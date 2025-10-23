const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Configurar CORS para permitir requisições do seu domínio
  res.setHeader('Access-Control-Allow-Origin', '*'); // Aceita de qualquer domínio
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Responder a requisições OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Apenas permite POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { name, company, position, email, phone, message } = req.body;

  // Validação básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  // Configurar o transporter do Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.kinghost.net",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true para 465, false para outras portas
    auth: {
      user: process.env.SMTP_USER || "comunicacao@edesoft.com.br",
      pass: process.env.SMTP_PASS || "Eds@23!EU#30",
    },
  });

  try {
    console.log('Tentando enviar email...');
    console.log('Configuração SMTP:', {
      host: process.env.SMTP_HOST || "smtp.kinghost.net",
      port: parseInt(process.env.SMTP_PORT || "587"),
      user: process.env.SMTP_USER || "comunicacao@edesoft.com.br"
    });
    
    // Email para a equipe Edesoft
    await transporter.sendMail({
      from: `"Landing Page Edesoft" <${process.env.SMTP_USER || "comunicacao@edesoft.com.br"}>`,
      to: process.env.EMAIL_TO || 'joao.espindola@edesoft.com.br',
      subject: 'Novo Lead - Landing Page RPA + IA',
      html: `
        <h2>Novo Lead da Landing Page</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="background-color: #f0f0f0; font-weight: bold;">Nome Completo</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td style="background-color: #f0f0f0; font-weight: bold;">Empresa</td>
            <td>${company || 'Não informado'}</td>
          </tr>
          <tr>
            <td style="background-color: #f0f0f0; font-weight: bold;">Cargo</td>
            <td>${position || 'Não informado'}</td>
          </tr>
          <tr>
            <td style="background-color: #f0f0f0; font-weight: bold;">E-mail</td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="background-color: #f0f0f0; font-weight: bold;">Telefone</td>
            <td>${phone || 'Não informado'}</td>
          </tr>
          <tr>
            <td style="background-color: #f0f0f0; font-weight: bold;">Desafio Operacional</td>
            <td>${message}</td>
          </tr>
        </table>
        <br>
        <p><em>Este lead foi gerado através da Landing Page RPA + IA</em></p>
      `,
    });

    // Email de agradecimento automático para o lead
    await transporter.sendMail({
      from: `"Equipe Edesoft" <${process.env.SMTP_USER || "comunicacao@edesoft.com.br"}>`,
      to: email,
      subject: 'Obrigado pelo seu interesse - Edesoft',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Olá, ${name}!</h2>
          
          <p>Muito obrigado pelo seu interesse em conhecer nossas soluções de <strong>RPA e Inteligência Artificial</strong>.</p>
          
          <p>Recebemos suas informações e um especialista do nosso time entrará em contato em breve para apresentar como podemos ajudar a automatizar e transformar a operação da sua empresa.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Seus dados:</strong></p>
            <ul style="margin-top: 10px;">
              <li>Empresa: ${company || 'Não informado'}</li>
              <li>Cargo: ${position || 'Não informado'}</li>
              <li>E-mail: ${email}</li>
              <li>Telefone: ${phone || 'Não informado'}</li>
            </ul>
          </div>
          
          <p>Enquanto isso, fique à vontade para conhecer mais sobre a Edesoft em nosso site: <a href="https://edesoft.com.br">www.edesoft.com.br</a></p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            Atenciosamente,<br>
            <strong>Equipe Edesoft</strong><br>
            Transformando TI em Ativo Estratégico
          </p>
        </div>
      `,
    });

    console.log('Emails enviados com sucesso!');
    return res.status(200).json({ success: true, message: 'Emails enviados com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    console.error('Stack:', error.stack);
    return res.status(500).json({ 
      success: false, 
      error: 'Erro ao enviar email',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

