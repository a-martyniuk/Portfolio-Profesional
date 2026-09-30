export function generatePersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Alexis Martyniuk",
        jobTitle: "Senior Data Engineer",
        description: "Senior Data Engineer especializado en sistemas de datos críticos con más de 15 años de trayectoria en TI y 8 años liderando plataformas de datos en nubes y ambientes de misión crítica.",
        url: "https://www.alexismartyniuk.com.ar",
        sameAs: [
            "https://linkedin.com/in/alexismartyniuk",
            "https://github.com/a-martyniuk"
        ],
        knowsAbout: [
            "Data Engineering",
            "Data Architecture",
            "ETL / ELT",
            "Oracle Data Integrator",
            "Snowflake",
            "Microsoft Fabric",
            "Microsoft Fabric Lakehouse",
            "Direct Lake Power BI",
            "Medallion Architecture",
            "AWS",
            "Python",
            "PySpark",
            "PL/SQL",
            "PostgreSQL",
            "Business Intelligence",
            "Data Warehousing",
            "BMC Control-M",
            "Triskell PPM",
            "Mawida GRC",
            "Data Platform Banking"
        ],
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "IUPFA - Instituto Universitario PFA"
        },
        worksFor: [
            {
                "@type": "Organization",
                name: "GYF Inteligencia Digital / Infolytics",
                description: "Plataforma de datos y tableros de gestión TI para Banco del Chubut sobre Microsoft Fabric"
            },
            {
                "@type": "Organization",
                name: "BeOn Digital Transformation Partners",
                description: "Diseño e implementación de pipelines e-commerce en Fabric/PySpark y arquitecturas Database-as-Code"
            },
            {
                "@type": "Organization",
                name: "Laboratorios Bagó",
                description: "Diseño de plataforma de datos de misión crítica"
            },
            {
                "@type": "GovernmentOrganization",
                name: "Ministerio de Seguridad",
                description: "Infraestructura de análisis criminal provincial"
            }
        ],
        knowsLanguage: [
            {
                "@type": "Language",
                name: "Spanish",
                alternateName: "es"
            },
            {
                "@type": "Language",
                name: "English",
                alternateName: "en"
            },
            {
                "@type": "Language",
                name: "Portuguese",
                alternateName: "pt"
            }
        ]
    };
}
