import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // 📧 API de Contato - Receber mensagens do formulário
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validação dos campos obrigatórios
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: "Nome, email e mensagem são obrigatórios" 
        });
      }

      // Validação básica de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: "Email inválido" 
        });
      }

      // Email de destino configurado
      const emailDestino = "contato@thalitapreis.com.br";

      // Salvar contato no banco de dados
      const contact = await storage.insertContact({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        destinatario: emailDestino,
        createdAt: new Date(),
        status: 'recebido',
        userAgent: req.get('User-Agent') || '',
        ip: req.ip || req.connection.remoteAddress || ''
      });

      // Log para acompanhamento
      console.log(`📧 Nova mensagem recebida para ${emailDestino}:`, {
        id: contact.id,
        de: email,
        nome: name,
        preview: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
        timestamp: new Date().toISOString()
      });

      // Resposta de sucesso
      res.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        contactId: contact.id,
        destinatario: emailDestino
      });

    } catch (error) {
      console.error('❌ Erro na API de contato:', error);
      res.status(500).json({ 
        error: "Erro interno do servidor. Tente novamente em alguns minutos." 
      });
    }
  });

  // 📊 API para listar contatos (para painel admin futuro)
  app.get("/api/contacts", async (req, res) => {
    try {
      // Verificação básica de autenticação (implementar autenticação real depois)
      const authHeader = req.get('Authorization');
      if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
        return res.status(401).json({ error: "Não autorizado" });
      }

      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const status = req.query.status as string;

      const contacts = await storage.getContacts({
        page,
        limit,
        status
      });

      res.json({
        success: true,
        data: contacts,
        pagination: {
          page,
          limit,
          total: contacts.length
        }
      });

    } catch (error) {
      console.error('❌ Erro ao buscar contatos:', error);
      res.status(500).json({ 
        error: "Erro ao buscar contatos" 
      });
    }
  });

  // 📝 API para marcar contato como lido
  app.patch("/api/contacts/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      // Verificação de autenticação
      const authHeader = req.get('Authorization');
      if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
        return res.status(401).json({ error: "Não autorizado" });
      }

      // Validar status
      const validStatuses = ['recebido', 'lido', 'respondido'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ 
          error: "Status inválido. Use: recebido, lido ou respondido" 
        });
      }

      const updatedContact = await storage.updateContactStatus(parseInt(id), status);

      res.json({
        success: true,
        message: `Contato marcado como ${status}`,
        data: updatedContact
      });

    } catch (error) {
      console.error('❌ Erro ao atualizar status:', error);
      res.status(500).json({ 
        error: "Erro ao atualizar status do contato" 
      });
    }
  });

  // 📈 API para estatísticas de contatos
  app.get("/api/contacts/stats", async (req, res) => {
    try {
      // Verificação de autenticação
      const authHeader = req.get('Authorization');
      if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
        return res.status(401).json({ error: "Não autorizado" });
      }

      const stats = await storage.getContactStats();

      res.json({
        success: true,
        data: {
          total: stats.total,
          recebidos: stats.recebidos,
          lidos: stats.lidos,
          respondidos: stats.respondidos,
          hoje: stats.hoje,
          estaSemana: stats.estaSemana,
          esteMes: stats.esteMes
        }
      });

    } catch (error) {
      console.error('❌ Erro ao buscar estatísticas:', error);
      res.status(500).json({ 
        error: "Erro ao buscar estatísticas" 
      });
    }
  });

  // 🏥 Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      services: {
        database: "connected", // Implementar verificação real depois
        email: "configured"
      }
    });
  });

  // ❌ 404 handler para rotas da API não encontradas
  app.use("/api/*", (req, res) => {
    res.status(404).json({
      error: "Endpoint não encontrado",
      path: req.path,
      method: req.method,
      availableEndpoints: [
        "POST /api/contact",
        "GET /api/contacts",
        "PATCH /api/contacts/:id/status",
        "GET /api/contacts/stats",
        "GET /api/health"
      ]
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}