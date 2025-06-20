import { users, type User, type InsertUser } from "@shared/schema";

// 📧 Interface para Contatos
export interface Contact {
  id?: number;
  name: string;
  email: string;
  message: string;
  destinatario: string; // contato@thalitapreis.com.br
  createdAt: Date;
  status: 'recebido' | 'lido' | 'respondido';
  userAgent?: string;
  ip?: string;
}

export interface ContactFilters {
  page?: number;
  limit?: number;
  status?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface ContactStats {
  total: number;
  recebidos: number;
  lidos: number;
  respondidos: number;
  hoje: number;
  estaSemana: number;
  esteMes: number;
}

// 🔧 Interface principal do Storage
export interface IStorage {
  // Usuários (já existentes)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // 📧 Contatos - CRUD
  insertContact(contact: Omit<Contact, 'id'>): Promise<Contact>;
  getContacts(filters?: ContactFilters): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;
  updateContactStatus(id: number, status: Contact['status']): Promise<Contact>;
  deleteContact(id: number): Promise<boolean>;
  
  // 📊 Estatísticas
  getContactStats(): Promise<ContactStats>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private currentUserId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
  }

  // ========================================
  // 👤 MÉTODOS DE USUÁRIOS (já existentes)
  // ========================================

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // ========================================
  // 📧 MÉTODOS DE CONTATOS
  // ========================================

  async insertContact(contactData: Omit<Contact, 'id'>): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...contactData, 
      id,
      createdAt: new Date(contactData.createdAt || Date.now())
    };
    
    this.contacts.set(id, contact);
    
    console.log(`💾 Contato salvo no storage:`, {
      id: contact.id,
      nome: contact.name,
      email: contact.email,
      destinatario: contact.destinatario,
      status: contact.status
    });
    
    return contact;
  }

  async getContacts(filters: ContactFilters = {}): Promise<Contact[]> {
    const { page = 1, limit = 10, status, startDate, endDate } = filters;
    
    let contactsList = Array.from(this.contacts.values());
    
    // Filtrar por status
    if (status) {
      contactsList = contactsList.filter(contact => contact.status === status);
    }
    
    // Filtrar por data
    if (startDate) {
      contactsList = contactsList.filter(contact => 
        contact.createdAt >= startDate
      );
    }
    
    if (endDate) {
      contactsList = contactsList.filter(contact => 
        contact.createdAt <= endDate
      );
    }
    
    // Ordenar por data (mais recentes primeiro)
    contactsList.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    // Paginação
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    return contactsList.slice(startIndex, endIndex);
  }

  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }

  async updateContactStatus(id: number, status: Contact['status']): Promise<Contact> {
    const contact = this.contacts.get(id);
    
    if (!contact) {
      throw new Error(`Contato com ID ${id} não encontrado`);
    }
    
    const updatedContact: Contact = {
      ...contact,
      status
    };
    
    this.contacts.set(id, updatedContact);
    
    console.log(`🔄 Status do contato ${id} atualizado para: ${status}`);
    
    return updatedContact;
  }

  async deleteContact(id: number): Promise<boolean> {
    const deleted = this.contacts.delete(id);
    
    if (deleted) {
      console.log(`🗑️ Contato ${id} removido do storage`);
    }
    
    return deleted;
  }

  // ========================================
  // 📊 ESTATÍSTICAS DE CONTATOS
  // ========================================

  async getContactStats(): Promise<ContactStats> {
    const allContacts = Array.from(this.contacts.values());
    const now = new Date();
    
    // Data de hoje (início do dia)
    const hoje = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Início da semana (domingo)
    const inicioSemana = new Date(hoje);
    inicioSemana.setDate(hoje.getDate() - hoje.getDay());
    
    // Início do mês
    const inicioMes = new Date(now.getFullYear(), now.getMonth(), 1);
    
    const stats: ContactStats = {
      total: allContacts.length,
      recebidos: allContacts.filter(c => c.status === 'recebido').length,
      lidos: allContacts.filter(c => c.status === 'lido').length,
      respondidos: allContacts.filter(c => c.status === 'respondido').length,
      hoje: allContacts.filter(c => c.createdAt >= hoje).length,
      estaSemana: allContacts.filter(c => c.createdAt >= inicioSemana).length,
      esteMes: allContacts.filter(c => c.createdAt >= inicioMes).length
    };
    
    console.log(`📈 Estatísticas calculadas:`, stats);
    
    return stats;
  }

  // ========================================
  // 🛠️ MÉTODOS UTILITÁRIOS
  // ========================================

  // Limpar contatos antigos (utilitário para manutenção)
  async cleanOldContacts(daysOld: number = 365): Promise<number> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    const contactsToDelete = Array.from(this.contacts.entries())
      .filter(([_, contact]) => contact.createdAt < cutoffDate)
      .map(([id, _]) => id);
    
    contactsToDelete.forEach(id => {
      this.contacts.delete(id);
    });
    
    console.log(`🧹 Removidos ${contactsToDelete.length} contatos antigos (mais de ${daysOld} dias)`);
    
    return contactsToDelete.length;
  }

  // Buscar contatos por email ou nome
  async searchContacts(query: string): Promise<Contact[]> {
    const searchTerm = query.toLowerCase().trim();
    
    return Array.from(this.contacts.values())
      .filter(contact => 
        contact.name.toLowerCase().includes(searchTerm) ||
        contact.email.toLowerCase().includes(searchTerm) ||
        contact.message.toLowerCase().includes(searchTerm)
      )
      .sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }

  // Exportar contatos para CSV (futuro)
  async exportContacts(): Promise<string> {
    const contacts = await this.getContacts({ limit: 1000 });
    
    const csvHeader = 'ID,Nome,Email,Mensagem,Destinatário,Status,Data,IP,UserAgent\n';
    const csvRows = contacts.map(contact => 
      `${contact.id},"${contact.name}","${contact.email}","${contact.message.replace(/"/g, '""')}","${contact.destinatario}","${contact.status}","${contact.createdAt.toISOString()}","${contact.ip || ''}","${contact.userAgent || ''}"`
    ).join('\n');
    
    return csvHeader + csvRows;
  }

  // Debug: Mostrar informações do storage
  async getStorageInfo(): Promise<{users: number, contacts: number}> {
    return {
      users: this.users.size,
      contacts: this.contacts.size
    };
  }
}

export const storage = new MemStorage();