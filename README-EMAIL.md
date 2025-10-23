# 📧 Configuração do Sistema de Email

## ✅ Sistema Implementado

O formulário de contato agora usa o servidor SMTP da Edesoft (`smtp.kinghost.net`) para enviar emails diretamente, sem depender de serviços terceiros.

## 🚀 Como Funciona

Quando um lead preenche o formulário:

1. **Lead recebe** → Email de agradecimento automático
2. **Edesoft recebe** → Email com todos os dados do lead em `joao.espindola@edesoft.com.br`

## 📋 Configuração Atual

### SMTP
- **Host**: smtp.kinghost.net
- **Port**: 587
- **User**: comunicacao@edesoft.com.br
- **Password**: Eds@23!EU#30

### Destinatários
- **Principal**: joao.espindola@edesoft.com.br

### Emails Enviados

**Para a Edesoft:**
- Assunto: "Novo Lead - Landing Page RPA + IA"
- Formato: Tabela HTML com todos os dados
- Campos: Nome, Empresa, Cargo, Email, Telefone, Desafio

**Para o Lead:**
- Assunto: "Obrigado pelo seu interesse - Edesoft"
- Conteúdo: Email personalizado de agradecimento
- Informação: Confirmação dos dados enviados

## 🔧 Deploy

### Opção 1: Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Deploy
vercel --prod
```

### Opção 2: Netlify

```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Fazer login
netlify login

# 3. Deploy
netlify deploy --prod
```

## 📝 Estrutura de Arquivos

```
Landing_Page_RPA_IA/
├── api/
│   └── send-email.js       # API serverless com Nodemailer
├── src/
│   └── App.tsx             # Frontend com formulário
├── vercel.json             # Configuração Vercel
└── package.json            # Dependências (nodemailer)
```

## 🔐 Segurança

**IMPORTANTE**: As credenciais SMTP estão no código. Para produção, recomenda-se:

1. **Usar variáveis de ambiente**:
   ```javascript
   host: process.env.SMTP_HOST,
   user: process.env.SMTP_USER,
   pass: process.env.SMTP_PASS,
   ```

2. **Configurar no Vercel/Netlify**:
   - SMTP_HOST=smtp.kinghost.net
   - SMTP_USER=comunicacao@edesoft.com.br
   - SMTP_PASS=Eds@23!EU#30

## 🎯 Adicionar Mais Destinatários

Para enviar para mais emails, edite `api/send-email.js`:

```javascript
// Linha 37
to: 'joao.espindola@edesoft.com.br, marketing.edesoft@gmail.com, outro@edesoft.com.br',
```

## 🧪 Testar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar desenvolvimento
npm run dev

# 3. Testar o formulário
# O formulário enviará emails reais!
```

## ✨ Vantagens desta Solução

- ✅ **Sem limites**: Envios ilimitados
- ✅ **Múltiplos destinatários**: Quantos quiser
- ✅ **Controle total**: Servidor próprio
- ✅ **Personalização**: Templates HTML customizados
- ✅ **Gratuito**: Sem custos de terceiros
- ✅ **Confiável**: SMTP da Kinghost

## 🆘 Suporte

Se houver problemas:

1. Verificar logs no console do navegador
2. Verificar logs no Vercel/Netlify
3. Testar credenciais SMTP
4. Verificar firewall/porta 587

---

**Desenvolvido para Edesoft** - Transformando TI em Ativo Estratégico

