import express from 'express';
import cors from 'cors';
import sendEmail from './api/send-email.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'API de Email - Edesoft Landing Page',
    endpoints: ['/api/send-email']
  });
});

// Email endpoint
app.post('/api/send-email', sendEmail);
app.options('/api/send-email', sendEmail);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📧 Endpoint: http://localhost:${PORT}/api/send-email`);
});

