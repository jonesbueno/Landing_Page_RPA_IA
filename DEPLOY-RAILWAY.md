# 🚂 Deploy da API no Railway + LP na Kinghost

## 🎯 Arquitetura Final

```
┌─────────────────────────────────────┐
│  Landing Page (Kinghost)            │
│  https://rpa.edesoft.com.br         │
│                                     │
│  [Formulário] ──────────────┐      │
└──────────────────────────────┼──────┘
                               │
                               │ AJAX POST
                               ↓
┌──────────────────────────────┴──────┐
│  API Node.js (Railway - GRÁTIS)     │
│  https://sua-api.up.railway.app     │
│                                     │
│  [Express + Nodemailer]             │
└──────────────────┬──────────────────┘
                   │
                   │ SMTP (porta 587)
                   ↓
┌──────────────────┴──────────────────┐
│  SMTP Kinghost                      │
│  smtp.kinghost.net:587              │
│                                     │
│  Envia para:                        │
│  └─ joao.espindola@edesoft.com.br   │
│  └─ Lead recebe autoresposta        │
└─────────────────────────────────────┘
```

---

## 📋 PASSO 1: Deploy no Railway

### 1.1 Criar conta
1. Acesse: https://railway.app
2. Clique em **"Start a New Project"**
3. Escolha **"Login with GitHub"**
4. Autorize o Railway

### 1.2 Criar novo projeto
1. No dashboard, clique em **"New Project"**
2. Escolha **"Deploy from GitHub repo"**
3. Selecione o repositório **`Landing_Page_RPA_IA`**
4. Clique em **"Deploy Now"**

### 1.3 Configurar variáveis de ambiente
1. No projeto, clique em **"Variables"**
2. Adicione estas variáveis:

```
SMTP_HOST = smtp.kinghost.net
SMTP_PORT = 587
SMTP_USER = comunicacao@edesoft.com.br
SMTP_PASS = Eds@23!EU#30
EMAIL_TO = joao.espindola@edesoft.com.br
PORT = 3000
```

3. Clique em **"Save"**

### 1.4 Gerar domínio público
1. Vá em **"Settings"**
2. Clique em **"Generate Domain"**
3. **COPIE A URL** (ex: `https://landing-page-rpa-ia.up.railway.app`)

---

## 📋 PASSO 2: Compilar LP para Kinghost

### 2.1 Atualizar URL da API no código

Edite o arquivo `src/App.tsx` na **linha ~594**:

```javascript
// ANTES:
const response = await fetch('/api/send-email', {

// DEPOIS:
const response = await fetch('https://SUA-URL-RAILWAY.up.railway.app/api/send-email', {
```

**Substitua `SUA-URL-RAILWAY.up.railway.app` pela URL que o Railway te deu!**

### 2.2 Compilar o projeto

```bash
npm run build
```

Isso vai gerar a pasta `dist/` com os arquivos prontos.

---

## 📋 PASSO 3: Upload para Kinghost

### 3.1 Fazer upload dos arquivos

1. Acesse o **cPanel** da Kinghost
2. Vá em **"Gerenciador de Arquivos"**
3. Navegue até a pasta do seu subdomínio (ex: `public_html/rpa/`)
4. Faça upload de **TODOS** os arquivos dentro da pasta `dist/`:
   - `index.html`
   - `assets/` (pasta completa)
   - Todos os outros arquivos

### 3.2 Configurar domínio (se necessário)

Se ainda não configurou o subdomínio:
1. cPanel → **"Subdomínios"**
2. Criar: `rpa.edesoft.com.br`
3. Raiz do documento: `/public_html/rpa`

---

## ✅ PASSO 4: Testar

1. **Acesse**: `https://rpa.edesoft.com.br`
2. **Preencha** o formulário
3. **Envie**
4. **Verifique**:
   - ✅ Mensagem de sucesso aparece
   - ✅ Email chegou em `joao.espindola@edesoft.com.br`
   - ✅ Lead recebeu email de agradecimento

---

## 🔧 Monitoramento e Logs

### Ver logs da API no Railway:
1. Dashboard → Projeto → **"Deployments"**
2. Clique no deployment atual
3. Veja os **logs em tempo real**

### Testar a API diretamente:
```bash
curl -X POST https://SUA-URL.up.railway.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@exemplo.com",
    "message": "Teste de API"
  }'
```

---

## 💰 Custos

- **Railway**: GRÁTIS (plano Hobby)
  - 500 horas/mês gratuitas
  - Mais que suficiente para a API
- **Kinghost**: Seu plano atual
- **SMTP**: Incluído no seu email

**Total adicional: R$ 0,00/mês** 🎉

---

## 🆘 Problemas Comuns

### Email não chega
- Verifique as variáveis de ambiente no Railway
- Veja os logs do Railway
- Teste as credenciais SMTP

### Formulário não envia
- Verifique se a URL da API está correta no código
- Abra o console do navegador (F12) e veja erros
- Verifique CORS (já está configurado)

### API offline
- Railway pode desligar após inatividade
- Primeira requisição "acorda" a API (pode demorar ~30s)

---

## 🔄 Atualizações Futuras

### Para atualizar a Landing Page:
1. Edite o código
2. `npm run build`
3. Upload da pasta `dist/` para Kinghost

### Para atualizar a API:
1. Commit no GitHub
2. Railway faz deploy automático!

---

**Pronto!** Sua landing page está no ar com envio de emails funcionando! 🎉

