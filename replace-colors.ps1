$files = Get-ChildItem -Path "src" -Recurse -Include "*.tsx","*.ts","*.css"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $updated = $content `
        -replace 'text-slate-400', 'text-cyan-400' `
        -replace 'text-slate-300', 'text-cyan-300' `
        -replace 'text-slate-500', 'text-cyan-600' `
        -replace 'bg-slate-400', 'bg-cyan-400' `
        -replace 'border-slate-400', 'border-cyan-400' `
        -replace 'from-slate-400', 'from-cyan-400' `
        -replace 'via-slate-300', 'via-cyan-300' `
        -replace 'to-slate-500', 'to-cyan-500' `
        -replace 'bg-slate-400/5', 'bg-cyan-500/5'
    if ($content -ne $updated) {
        Set-Content $file.FullName $updated
        Write-Host "Updated: $($file.Name)"
    }
}
Write-Host "Done."
