# TODO — pendências do MAGMA

Itens que dependem de informação real do cliente. Nada foi inventado: onde havia
dúvida, deixamos um padrão seguro + marcação `TODO` no código.

## Confirmar / preencher

- [ ] **WhatsApp** — hoje usa `+39 379 155 1455` (número dos posters de evento), configurável em `NEXT_PUBLIC_WHATSAPP_NUMBER`. O telefone do `Info.docx` é `+39 340 139 6582` (usado como telefone de contato no rodapé/visita). Confirmar qual número recebe mensagens no WhatsApp.
- [ ] **Endereço** — usamos `Via San Francesco d'Assisi 15, San Teodoro (SS)` (do `Info.docx`, o mais recorrente). O briefing chegou a citar o nº 7; mantido o 15. Confirmar.
- [ ] **Instagram** — definir `NEXT_PUBLIC_INSTAGRAM_URL`. Enquanto vazio, aparece como “Instagram (adicione o link)” no rodapé.
- [ ] **Google Maps** — definir `NEXT_PUBLIC_MAPS_URL` com o link real da ficha do Google. Sem isso, o botão abre uma busca pelo endereço.
- [ ] **Domínio** — definir `NEXT_PUBLIC_SITE_URL` e regerar o QR do menu (`python scripts/build-menu.py`, ajustando a URL no topo do script) para apontar ao domínio final.

## Datas dos eventos

- [ ] As datas vêm exatamente dos posters (`11/6`, `15/6`, `19 Giugno`). Onde o ano/dia não estava claro, o card mostra “Past event”. Atualizar `src/data/events.ts` quando houver datas/anos oficiais e novos posters.

## Conteúdo opcional

- [ ] Revisar a copy em IT/PT/EN com o cliente (`src/i18n/*.ts`).
- [ ] Trocar o `og:image` padrão se quiser uma arte específica para compartilhamento.
- [ ] Adicionar horários de funcionamento (não fornecidos — propositalmente ausentes).
- [ ] Substituir `public/menu/magma-menu.pdf` pelo PDF oficial, se houver um layout próprio (o atual é gerado a partir do `cardapio.xlsx`).
