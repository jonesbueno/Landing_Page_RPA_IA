# ⚠️ LEIA ANTES DE FAZER DEPLOY!

## 🎯 Você escolheu: Opção 1 (LP no Servidor + API na Vercel)

### 📝 CHECKLIST OBRIGATÓRIO:

- [ ] **1. Deploy da API na Vercel** (siga `DEPLOY-OPCAO1.md`)
- [ ] **2. Copiar URL da Vercel** (ex: `https://landing-page-rpa-ia.vercel.app`)
- [ ] **3. Atualizar código** (PASSO CRÍTICO! ⬇️)

---

## ⚡ PASSO CRÍTICO: Atualizar URL da API

**Arquivo:** `src/App.tsx`  
**Linha:** ~594

### ANTES (desenvolvimento):
```javascript
const response = await fetch('/api/send-email', {
```

### DEPOIS (produção):
```javascript
const response = await fetch('https://SUA-URL-VERCEL.vercel.app/api/send-email', {
```

**Substitua `SUA-URL-VERCEL.vercel.app` pela URL real que a Vercel te deu!**

---

## 🚀 Depois de atualizar a URL:

```bash
# 1. Compilar
npm run build

# 2. Upload da pasta dist/ para seu servidor
# (via FTP, cPanel, etc)
```

---

## ✅ Pronto!

Agora seu formulário vai:
1. Funcionar no seu domínio: `rpa.edesoft.com.br`
2. Enviar emails via API da Vercel
3. Email para: `joao.espindola@edesoft.com.br`
4. Autoresposta para o lead

---

## 📚 Documentação Completa

Veja `DEPLOY-OPCAO1.md` para instruções detalhadas passo a passo.

---

**Dúvidas?** Consulte os arquivos de documentação ou logs da Vercel! 🎉

