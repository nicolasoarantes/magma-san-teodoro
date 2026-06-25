# MAGMA - deploy helper (Windows PowerShell)
# Uso:  .\deploy.ps1            -> build local + deploy de preview
#       .\deploy.ps1 -Prod      -> build local + deploy de producao
#       .\deploy.ps1 -Git       -> inicializa o repositorio git (primeira vez)
param(
    [switch]$Prod,
    [switch]$Git
)

$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

Write-Host "==> Node:" (node -v) " npm:" (npm -v) -ForegroundColor Yellow

if (-not (Test-Path "node_modules")) {
    Write-Host "==> Instalando dependencias..." -ForegroundColor Cyan
    npm install
}

Write-Host "==> Build de producao..." -ForegroundColor Cyan
npm run build

if ($Git) {
    if (-not (Test-Path ".git")) {
        git init
        git add .
        git commit -m "MAGMA San Teodoro - initial site"
        Write-Host "==> Repositorio git criado. Adicione um remoto e faca push:" -ForegroundColor Green
        Write-Host "    git remote add origin https://github.com/USUARIO/REPO.git"
        Write-Host "    git branch -M main; git push -u origin main"
    }
    else {
        Write-Host "==> .git ja existe, pulando init." -ForegroundColor Yellow
    }
}

if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "==> Instalando o Vercel CLI..." -ForegroundColor Cyan
    npm i -g vercel
}

if ($Prod) {
    Write-Host "==> Deploy de PRODUCAO..." -ForegroundColor Green
    vercel --prod
}
else {
    Write-Host "==> Deploy de PREVIEW..." -ForegroundColor Green
    vercel
}
