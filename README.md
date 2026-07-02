# MAGMA — San Teodoro

Site moderno, mobile-first e pronto para deploy na Vercel para o **MAGMA — Churrascaria, Steakhouse & American Bar**, em San Teodoro (Sardenha).

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion. Três páginas (Home, Events, Menu) em três idiomas (EN / IT / PT), com canvas de brasas interativo, header que esconde no scroll e cardápio filtrável vindo do `cardapio.xlsx`.

---

## Rodar localmente

Pré-requisito: **Node.js 18.18+ (ideal 20 LTS)**.

```powershell
npm install      # instala as dependências
npm run dev      # http://localhost:3000  (redireciona para /en)
npm run build    # valida o build de produção
npm start        # roda o build localmente
```

Rotas: `/en`, `/en/events`, `/en/menu` (e `/it/...`, `/pt/...`). A raiz `/` redireciona para o idioma do navegador, com fallback em inglês.

---

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=393791551455          # WhatsApp (só dígitos, formato internacional)
NEXT_PUBLIC_SITE_URL=https://seu-dominio.vercel.app  # usado em SEO e no QR do menu
NEXT_PUBLIC_INSTAGRAM_URL=                         # link do Instagram (vazio = aparece como TODO)
NEXT_PUBLIC_MAPS_URL=                              # link do Google Maps (vazio = busca pelo endereço)
```

Na Vercel, configure as mesmas variáveis em **Project → Settings → Environment Variables**.

---

## Como trocar o conteúdo

Todos os ativos reais ficam em `public/assets/magma/` e são mapeados em **`src/data/assets.ts`**.

| O que trocar | Onde |
|---|---|
| **Fotos** | substitua os arquivos em `public/assets/magma/fotos/` mantendo o nome, ou edite os caminhos em `src/data/assets.ts`. |
| **Logo** | arquivos em `public/assets/magma/logos/`. Header/footer e a seção de poster usam `header-logo.png`; o hero usa `logo-branca-fundo-preto.jpg`. Troque em `src/data/assets.ts`. |
| **Vídeo do hero** | `public/assets/magma/videos/hero.mp4` (+ `hero-poster.jpg` como capa). |
| **WhatsApp** | variável `NEXT_PUBLIC_WHATSAPP_NUMBER`. As mensagens prontas estão em `src/lib/whatsapp.ts`. |
| **Endereço / telefone** | `src/i18n/en.ts` (e `it.ts`, `pt.ts`), campo `home.visit`; e o rodapé em `src/components/layout/Footer.tsx`. |
| **Instagram / Maps** | variáveis `NEXT_PUBLIC_INSTAGRAM_URL` / `NEXT_PUBLIC_MAPS_URL`. |
| **Textos / traduções** | `src/i18n/en.ts`, `src/i18n/it.ts`, `src/i18n/pt.ts`. |
| **Eventos da galeria** | `src/data/events.ts` (datas só foram preenchidas quando claras no poster; o resto aparece como “Past event”). |

### Atualizar o cardápio

O cardápio é gerado a partir de `cardapio.xlsx` e fica em `src/data/menu.ts`. Para regenerar depois de editar a planilha, rode o script Python incluído:

```powershell
python scripts/build-menu.py
```

Ele reescreve `src/data/menu.ts` e o PDF `public/menu/magma-menu.pdf`. (Requer `pip install openpyxl reportlab`.)

### QR Code do menu

`public/menu/qr-menu.png` aponta para `…/menu`. Depois de ter o domínio real, regenere o PDF/QR com o script acima (ajuste a URL no topo do script) ou gere um novo QR para `NEXT_PUBLIC_SITE_URL/en/menu`.

---

## Subir para o GitHub

Use o script `github-setup.ps1` (cria o repo, faz o commit e o push):

```powershell
# com GitHub CLI (gh) instalado e logado — cria o repo automaticamente
.\github-setup.ps1 -Repo "magma-san-teodoro"

# ou apontando para um repo que voce ja criou em github.com/new
.\github-setup.ps1 -Repo "magma-san-teodoro" -Remote "https://github.com/USUARIO/REPO.git"
```

Depois é só importar o repositório em vercel.com/new para deploy automático a cada push.

## Deploy na Vercel

Veja `deploy.ps1` (script PowerShell pronto) ou rode manualmente:

```powershell
npm i -g vercel
vercel login
vercel          # primeiro deploy (preview)
vercel --prod   # produção
```

Como alternativa, suba para o GitHub e importe o repositório em vercel.com — o build roda automaticamente (`npm run build`).

---

## Estrutura

```
src/
  app/[locale]/        Home, /events, /menu, layout (SEO + schema), not-found
  components/          layout · home · events · menu · ui
  data/                assets.ts · menu.ts (gerado) · events.ts
  i18n/                en.ts · it.ts · pt.ts
  lib/                 whatsapp.ts · menu-normalizer.ts · locale.ts
  middleware.ts        redireciona / para o locale
public/
  assets/magma/        fotos · logos · videos (ativos reais)
  menu/                magma-menu.pdf · qr-menu.png
```

Veja `TODO.md` para os pontos pendentes (links reais de Instagram/Maps, confirmação do número de WhatsApp, etc.).
