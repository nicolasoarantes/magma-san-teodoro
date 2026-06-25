# MAGMA - GitHub setup (Windows PowerShell)
# Cria o repositorio local, faz o primeiro commit e sobe para o GitHub.
#
# Uso:
#   .\github-setup.ps1 -Repo "magma-san-teodoro"
#   .\github-setup.ps1 -Repo "magma-san-teodoro" -Private
#   .\github-setup.ps1 -Repo "magma-san-teodoro" -Remote "https://github.com/USUARIO/REPO.git"
#
# Se o GitHub CLI (gh) estiver instalado e logado, o repo e criado automaticamente.
# Caso contrario, o script faz o commit local e mostra os comandos finais.

param(
    [Parameter(Mandatory = $true)][string]$Repo,
    [switch]$Private,
    [string]$Remote
)

$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

# 1) Garante git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "ERRO: git nao encontrado. Instale em https://git-scm.com/download/win" -ForegroundColor Red
    exit 1
}

# 2) Inicializa o repo (se necessario)
if (-not (Test-Path ".git")) {
    Write-Host "==> git init" -ForegroundColor Cyan
    git init | Out-Null
    git branch -M main
}

# 3) Commit
Write-Host "==> Adicionando arquivos e fazendo commit..." -ForegroundColor Cyan
git add .
# Evita erro se nao houver mudancas
$pending = git status --porcelain
if ($pending) {
    git commit -m "MAGMA San Teodoro - site (Next.js, i18n, menu, events)" | Out-Null
}
else {
    Write-Host "==> Nada novo para commitar." -ForegroundColor Yellow
}

# 4) Sobe para o GitHub
$gh = Get-Command gh -ErrorAction SilentlyContinue

if ($Remote) {
    Write-Host "==> Usando remoto informado: $Remote" -ForegroundColor Cyan
    git remote remove origin 2>$null
    git remote add origin $Remote
    git push -u origin main
}
elseif ($gh) {
    $vis = if ($Private) { "--private" } else { "--public" }
    Write-Host "==> Criando repo no GitHub com gh ($vis)..." -ForegroundColor Cyan
    gh repo create $Repo $vis --source "." --remote origin --push
}
else {
    Write-Host ""
    Write-Host "GitHub CLI (gh) nao encontrado. Faca assim:" -ForegroundColor Yellow
    Write-Host "  1) Crie um repo vazio em https://github.com/new  (nome: $Repo)"
    Write-Host "  2) Rode os comandos abaixo (troque USUARIO):"
    Write-Host ""
    Write-Host "     git remote add origin https://github.com/USUARIO/$Repo.git" -ForegroundColor Green
    Write-Host "     git push -u origin main" -ForegroundColor Green
    Write-Host ""
    Write-Host "Dica: para automatizar no futuro, instale o GitHub CLI: https://cli.github.com/"
}

Write-Host ""
Write-Host "==> Pronto. Depois e so importar o repo em vercel.com/new para deploy continuo." -ForegroundColor Green
