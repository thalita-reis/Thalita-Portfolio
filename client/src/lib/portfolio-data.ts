export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  type: 'degree' | 'certification';
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SoftSkill {
  name: string;
  icon: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
    instagram: string;
  };
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export const portfolioData = {
  personalInfo: {
    name: "Thalita Pereira dos Reis",
    title: "Product Owner & Desenvolvedora Front-end",
    description: "Product Owner e Desenvolvedora Front-end com 20 anos de experiência em projetos de diferentes portes. Especializada em gestão de produto, metodologias ágeis e desenvolvimento Front-end com React.js, JavaScript, TypeScript e Node.js.",
    profileImage: "/attached_assets/Facetune_12-03-2024-19-12-10_1750195477728.jpeg"
  },

  about: {
    title: "Profissional em Transição para Desenvolvimento Front-end",
    description: [
      "Sou Product Owner e Desenvolvedora Front-end com 20 anos de experiência em projetos de diferentes portes, atuando como Gerente de Projetos, Product Owner, Scrum Master e Agile Coach. Essa trajetória me levou a tomar a decisão de retomar um grande sonho: tornar-me uma desenvolvedora Front-end, com especialização em HTML, CSS, JavaScript, TypeScript, React.js, Node.js e jQuery.",
      "Após anos dedicados a projetos que envolvem metodologias ágeis, gestão de produtos e transformação digital, percebo que posso usar minha experiência prática para criar produtos digitais inovadores e com forte impacto no mercado. Acredito que minha visão estratégica e capacidade técnica serão diferenciais valiosos, permitindo não só entregar código de qualidade, mas também construir pontes entre a tecnologia, o produto e o negócio."
    ],
    stats: {
      projects: "120+",
      experience: "20+"
    },
    workspaceImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },

  experiences: [
    {
      id: "1",
      title: "Desenvolvedora Front-end & Product Owner",
      company: "IMAGIN3D",
      period: "Jan 2025 - Presente",
      description: "Atuo na evolução de soluções digitais com foco em modelagem 3D interativa e realidade aumentada, aplicando experiência em produto e habilidades técnicas em desenvolvimento Front-end. Participei ativamente do desenvolvimento do sistema financeiro utilizando React.js, HTML, CSS, TypeScript e Node.js, permitindo controle de lucros e vendas para mais de 120 clientes ativos. Criei e otimizei componentes reutilizáveis com JavaScript e jQuery, reduzi o churn em 30% e aumentei em 40% a adoção de funcionalidades.",
      technologies: ["React.js", "TypeScript", "JavaScript", "HTML/CSS", "Node.js", "jQuery"]
    },
    {
      id: "2",
      title: "Product Owner",
      company: "Amo Promo",
      period: "Set 2023 - Nov 2024",
      description: "Implementei metodologias ágeis (Scrum, Kanban e SAFe) em projetos de grande porte, reduzindo em 25% o tempo médio de entrega. Gerenciei simultaneamente entre 5 e 8 projetos estratégicos, garantindo 95% de aderência aos prazos e aumentando em 35% a eficiência das equipes.",
      technologies: ["Scrum", "Kanban", "SAFe", "Project Management"]
    },
    {
      id: "3",
      title: "Product Owner",
      company: "BTG Pactual",
      period: "Dez 2021 - Ago 2023",
      description: "Gerenciei o ciclo de vida completo de produtos digitais estratégicos, implementando metodologias ágeis e análise de dados. Reduzi em 30% o tempo de entrega otimizando processos ágeis e aumentei em 25% a retenção de clientes aprimorando a experiência do usuário.",
      technologies: ["Product Strategy", "Data Analysis", "ERP", "CRM"]
    },
    {
      id: "4",
      title: "Product Owner",
      company: "GNDI – Notredame Intermédica",
      period: "Ago 2020 - Jul 2021",
      description: "Planejei e gerenciei projetos estratégicos, reduzindo em 25% o tempo médio de execução e garantindo 98% de aderência aos prazos. Refinei e priorizei o backlog de produtos, proporcionando um aumento de 30% na eficiência dos times.",
      technologies: ["Healthcare Tech", "Product Planning", "Team Leadership", "Process Optimization"]
    }
  ] as Experience[],

  education: [
    {
      id: "1",
      degree: "Pós Tech em Full Stack Development",
      institution: "FIAP",
      period: "2025 - em andamento",
      description: "Especialização avançada em desenvolvimento full stack com foco em tecnologias modernas e práticas de mercado.",
      type: "degree" as const
    },
    {
      id: "2",
      degree: "Pós-graduação em Agile Project Management & Leadership",
      institution: "PUC Minas",
      period: "2022",
      description: "Especialização em gestão ágil de projetos e liderança, focando em metodologias Scrum, Kanban e frameworks ágeis.",
      type: "degree" as const
    },
    {
      id: "3",
      degree: "Tecnologia da Informação",
      institution: "Faculdade Sumaré",
      period: "2012",
      description: "Formação técnica em Tecnologia da Informação com base sólida em sistemas e desenvolvimento.",
      type: "degree" as const
    }
  ] as Education[],

  certifications: [
    {
      id: "1",
      name: "PMP - Project Management Professional",
      provider: "TI Exames",
      icon: "fas fa-certificate"
    },
    {
      id: "2",
      name: "Certified Strategic Product Manager",
      provider: "Faculdade FaCiencia",
      icon: "fas fa-chart-line"
    },
    {
      id: "3",
      name: "SAFe Certification",
      provider: "Scaled Agile Framework",
      icon: "fas fa-users-cog"
    },
    {
      id: "4",
      name: "Scrum Master PSM I",
      provider: "Scrum.org",
      icon: "fas fa-tasks"
    },
    {
      id: "5",
      name: "Product Owner Certification",
      provider: "Clarify Treinamentos",
      icon: "fas fa-product-hunt"
    },
    {
      id: "6",
      name: "Design Thinking",
      provider: "Ironhack",
      icon: "fas fa-lightbulb"
    }
  ],

  technicalSkills: [
    { name: "Product Management / Discovery", percentage: 95 },
    { name: "Scrum / Kanban / SAFe", percentage: 90 },
    { name: "JavaScript / TypeScript", percentage: 85 },
    { name: "React.js / Node.js", percentage: 80 },
    { name: "HTML / CSS / jQuery", percentage: 85 },
    { name: "Git / GitHub / DevOps", percentage: 80 }
  ] as Skill[],

  tools: [
    { name: "Jira", icon: "fab fa-atlassian" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Vercel", icon: "fas fa-server" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Trello", icon: "fab fa-trello" },
    { name: "Miro", icon: "fas fa-project-diagram" },
    { name: "Power BI", icon: "fas fa-chart-bar" },
    { name: "Render", icon: "fas fa-cloud" }
  ] as Tool[],

  softSkills: [
    { name: "Facilitação de Workshops Ágeis", icon: "fas fa-check-circle" },
    { name: "Coaching em Inovação", icon: "fas fa-check-circle" },
    { name: "Comunicação Técnico-Negócio", icon: "fas fa-check-circle" },
    { name: "Liderança de Equipes Multidisciplinares", icon: "fas fa-check-circle" },
    { name: "Resolução de Conflitos", icon: "fas fa-check-circle" },
    { name: "Melhoria Contínua", icon: "fas fa-check-circle" }
  ] as SoftSkill[],

  contact: {
    email: "thalitapereirareis@gmail.com",
    phone: "11-94808-0600",
    location: "São Paulo, SP - Brasil",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/thalitapereiradosreis",
      github: "https://github.com/thalita-reis",
      twitter: "",
      instagram: "https://www.instagram.com/eu.thata_reis/"
    }
  } as ContactInfo,

  languages: [
    { name: "Português", level: "Nativo", percentage: 100 },
    { name: "Inglês", level: "Intermediário", percentage: 70 },
    { name: "Espanhol", level: "Básico", percentage: 40 }
  ] as Language[]
};
