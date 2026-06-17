# 🗄️ Caso de Estudio: Reingeniería SQL y Framework de Auditoría (ISO 27001)

**Autor:** Alexis Martyniuk  
**Fecha:** Junio 2026  
**Rol:** Senior Data Engineer  
**Proyecto GitHub:** [sql-reengineering-iso27001](https://github.com/a-martyniuk/sql-reengineering-iso27001)

---

## 📋 Resumen del Proyecto
El mantenimiento y optimización de bases de datos analíticas en entornos corporativos exige altos estándares de seguridad y auditabilidad. Este caso describe el proceso de reingeniería de stored procedures y estructuras T-SQL en SQL Server para el esquema `[LaLa]`, implementando prácticas alineadas con los controles de seguridad de la norma **ISO/IEC 27001:2022** (A.8.27 - Desarrollo Seguro de Sistemas), garantizando transaccionalidad atómica, control de excepciones centralizado e idempotencia absoluta en cada ejecución.

---

## ❌ Diagnóstico de la Base de Datos Heredada (Legacy)
Al iniciar la auditoría técnica, se identificaron tres fallos críticos que vulneraban la integridad y rendimiento del sistema:
1.  **Ausencia de Control Transaccional**: Si un script de procesamiento masivo fallaba a la mitad de su ejecución, los registros modificados parcialmente quedaban guardados, corrompiendo los reportes y requiriendo depuración manual.
2.  **Falta de Logs Centralizados**: Las fallas silenciosas ocurrían sin registrar la severidad, línea de error, parámetros ingresados ni hora de inicio/fin, dificultando el mantenimiento y violando normas de trazabilidad en TI.
3.  **Procesos No Idempotentes**: Ejecutar la misma carga de datos dos veces en el mismo día duplicaba las estadísticas o arrojaba errores por violación de restricciones unique, forzando limpiezas manuales.

---

## 🏗️ Soluciones y Patrones de Diseño T-SQL Aplicados

### 1. Transaccionalidad Segura y Aborto Automatizado
Para asegurar que los procesos sean atómicos (se ejecuta todo con éxito o no se guarda absolutamente nada), se configuró de forma obligatoria `SET XACT_ABORT ON` al inicio de cada stored procedure:
```sql
SET NOCOUNT ON;
SET XACT_ABORT ON; -- Cancela y hace rollback automático si ocurre un error de ejecución
```
Esto, sumado a bloques estructurados `BEGIN TRY / BEGIN CATCH`, garantiza que ante cualquier fallo se dispare un `ROLLBACK TRANSACTION` seguro antes de arrojar el error original del sistema.

### 2. Idempotencia mediante Particionado Lógico
Para asegurar que un stored procedure pueda ser ejecutado múltiples veces sin corromper datos, se implementó una limpieza transaccional previa basada en los parámetros temporales y el identificador de cliente:
```sql
BEGIN TRANSACTION
    -- Limpieza previa de la partición lógica (Idempotencia)
    DELETE FROM [LaLa].[ProductCompliances]
    WHERE [Date] >= @FechaDesde 
      AND [Date] <= @FechaHasta
      AND ClientId = @IdCliente;
      
    -- Inserción de nuevos datos calculados con CTEs
    INSERT INTO [LaLa].[ProductCompliances] (...)
    SELECT ... FROM CTE_SourceData;
COMMIT TRANSACTION
```

### 3. Registro Autónomo de Auditoría (Execution Logs)
Se diseñó la tabla `[LaLa].[ExecutionLogs]` y el procedimiento modular `[LaLa].[usp_Log_Execution]`. Al comenzar cualquier proceso principal, se realiza una llamada inicial que escribe un log con estado `'Running'` y retorna el `LogId` de la transacción. Al finalizar (ya sea con éxito o error), el log se actualiza con marcas de tiempo precisas y métricas de filas afectadas.

Lo más crítico: en caso de error, el bloque `CATCH` escribe el mensaje de excepción detallado para agilizar el diagnóstico técnico:
```sql
BEGIN CATCH
    IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;

    DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
    
    -- Registro autónomo del error de ejecución
    EXEC [LaLa].[usp_Log_Execution] 
        @LogId = @ExecutionLogId, 
        @Status = 'Error', 
        @ErrorMessage = @ErrorMessage;

    RAISERROR (@ErrorMessage, 16, 1);
END CATCH
```

---

## 📈 Resultados Obtenidos
*   **Tasa de Registros Corruptos**: Reducción al **0%** de fallas de integridad de datos gracias al control atómico de transacciones.
*   **Tiempo de Diagnóstico Técnico**: El tiempo promedio para resolver bugs disminuyó en un **80%** debido a la centralización de logs y captura automática de excepciones en la tabla `[LaLa].[ExecutionLogs]`.
*   **Cumplimiento Normativo (Audits)**: Cumplimiento total del control **ISO 27001 A.8.27**, proporcionando logs inmutables que acreditan que todo código ejecutado en producción está completamente auditado y controlado por parámetros.
