# 🚀 Deploy - Opção 1: LP no Servidor + API na Vercel

## 📋 Configuração

### **Parte 1: Deploy da API na Vercel**

#### 1. Criar conta na Vercel
- Acesse: https://vercel.com
- Faça login com GitHub
- Autorize acesso ao repositório `Landing_Page_RPA_IA`

#### 2. Importar projeto
1. Dashboard → "Add New" → "Project"
2. Selecione `Landing_Page_RPA_IA`
3. Clique em "Import"

#### 3. Configurar Build
- **Framework Preset**: Vite
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

#### 4. ⚠️ IMPORTANTE: Configurar Variáveis de Ambiente

Antes de fazer deploy, adicione estas variáveis em "Environment Variables":

```
SMTP_HOST = smtp.kinghost.net
SMTP_PORT = 587
SMTP_USER = comunicacao@edesoft.com.br
SMTP_PASS = Eds@23!EU#30
EMAIL_TO = joao.espindola@edesoft.com.br
```

#### 5. Deploy
- Clique em "Deploy"
- Aguarde o build completar
- **Anote a URL** da API (ex: `https://landing-page-rpa-ia.vercel.app`)

---

### **Parte 2: Hospedar Landing Page no Seu Servidor**

#### 1. Compilar o projeto
```bash
npm run build
```

Isso vai gerar a pasta `dist/` com os arquivos prontos.

#### 2. Atualizar URL da API

**ANTES de compilar**, edite o arquivo `src/App.tsx`:

Na linha ~594, troque:
```javascript
const response = await fetch('/api/send-email', {
```

Por:
```javascript
const response = await fetch('https://SEU-PROJETO.vercel.app/api/send-email', {
```

Substitua `SEU-PROJETO.vercel.app` pela URL que a Vercel te deu!

#### 3. Recompilar
```bash
npm run build
```

#### 4. Upload para seu servidor
Faça upload de **TUDO** dentro da pasta `dist/` para o seu servidor:
- Via FTP
- Via cPanel File Manager
- Via SSH/SFTP

**Exemplo de estrutura no servidor:**
```
/public_html/rpa/
├── index.html
├── assets/
│   ├── index-xxxxx.css
│   └── index-xxxxx.js
└── ...outros arquivos
```

---

## ✅ Testar

1. Acesse `rpa.edesoft.com.br` (ou seu subdomínio)
2. Preencha o formulário
3. Envie
4. Verifique:
   - ✅ Mensagem de sucesso aparece
   - ✅ Email chegou em `joao.espindola@edesoft.com.br`
   - ✅ Lead recebeu email de agradecimento

---

## 🔧 Atualizações Futuras

### Para atualizar a Landing Page:
1. Edite o código
2. `npm run build`
3. Upload da pasta `dist/` para o servidor

### Para atualizar a API:
1. Commit no GitHub
2. A Vercel faz deploy automático!

---

## 🆘 Problemas Comuns

### Erro de CORS
Se aparecer erro "CORS blocked":
- Verifique se a URL da API está correta
- A API já está configurada para aceitar de qualquer origem

### Email não chega
1. Verifique as variáveis de ambiente na Vercel
2. Veja os logs na Vercel: Dashboard → Projeto → "Functions"
3. Teste as credenciais SMTP

### Formulário não envia
1. Abra o Console do navegador (F12)
2. Veja se tem erros
3. Verifique se a URL da API está certa

---

## 📊 URLs Finais

- **Landing Page**: `rpa.edesoft.com.br` (seu servidor)
- **API de Email**: `https://landing-page-rpa-ia.vercel.app/api/send-email` (Vercel)

---

**Pronto!** Seu formulário vai funcionar perfeitamente! 🎉

