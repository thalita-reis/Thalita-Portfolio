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

export const portfolioData = {
  personalInfo: {
    name: "Thalita Pereira dos Reis",
    title: "Desenvolvedora Full Stack",
    description: "Desenvolvedora Full Stack apaixonada por criar soluções digitais inovadoras e experiências de usuário excepcionais.",
    profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
  },

  about: {
    title: "Profissional Dedicada e Inovadora",
    description: [
      "Com mais de 5 anos de experiência em desenvolvimento web, especializo-me em criar aplicações robustas e escaláveis. Minha paixão por tecnologia me motiva a estar sempre aprendendo e implementando as melhores práticas do mercado.",
      "Tenho experiência sólida em React, Node.js, Python e bancos de dados, sempre focando na entrega de valor para o usuário final e na colaboração efetiva em equipes multidisciplinares."
    ],
    stats: {
      projects: "50+",
      experience: "5+"
    },
    workspaceImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },

  experiences: [
    {
      id: "1",
      title: "Desenvolvedora Full Stack Sênior",
      company: "TechCorp Solutions",
      period: "2022 - Atual",
      description: "Liderança técnica em projetos de grande escala, desenvolvimento de arquiteturas robustas usando React e Node.js, mentoria de desenvolvedores júnior e implementação de melhores práticas de desenvolvimento.",
      technologies: ["React", "Node.js", "AWS"]
    },
    {
      id: "2",
      title: "Desenvolvedora Frontend",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      description: "Desenvolvimento de interfaces interativas e responsivas, colaboração estreita com designers UX/UI, otimização de performance e implementação de testes automatizados.",
      technologies: ["Vue.js", "TypeScript", "SASS"]
    },
    {
      id: "3",
      title: "Desenvolvedora Júnior",
      company: "StartupTech",
      period: "2019 - 2020",
      description: "Início da carreira desenvolvendo aplicações web, aprendizado contínuo de tecnologias modernas, participação ativa em code reviews e desenvolvimento de features completas.",
      technologies: ["JavaScript", "PHP", "MySQL"]
    }
  ] as Experience[],

  education: [
    {
      id: "1",
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal do Rio de Janeiro",
      period: "2015 - 2019",
      description: "Formação sólida em fundamentos da computação, algoritmos, estruturas de dados, engenharia de software e desenvolvimento web. Projeto final focado em aplicações web modernas.",
      type: "degree" as const
    },
    {
      id: "2",
      degree: "Especialização em Desenvolvimento Web",
      institution: "Rocketseat",
      period: "2020 - 2021",
      description: "Especialização intensiva em tecnologias modernas de desenvolvimento web, incluindo React, Node.js, bancos de dados e metodologias ágeis.",
      type: "certification" as const
    }
  ] as Education[],

  certifications: [
    {
      id: "1",
      name: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      icon: "fab fa-aws"
    },
    {
      id: "2",
      name: "Google Analytics",
      provider: "Google",
      icon: "fab fa-google"
    },
    {
      id: "3",
      name: "React Developer",
      provider: "Meta",
      icon: "fab fa-react"
    }
  ],

  technicalSkills: [
    { name: "JavaScript / TypeScript", percentage: 95 },
    { name: "React / Next.js", percentage: 90 },
    { name: "Node.js / Express", percentage: 85 },
    { name: "Python / Django", percentage: 80 },
    { name: "Bancos de Dados (SQL/NoSQL)", percentage: 75 }
  ] as Skill[],

  tools: [
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Analytics", icon: "fas fa-chart-bar" }
  ] as Tool[],

  softSkills: [
    { name: "Liderança de Equipe", icon: "fas fa-check-circle" },
    { name: "Metodologias Ágeis", icon: "fas fa-check-circle" },
    { name: "Resolução de Problemas", icon: "fas fa-check-circle" },
    { name: "Comunicação Eficaz", icon: "fas fa-check-circle" },
    { name: "Mentoria Técnica", icon: "fas fa-check-circle" }
  ] as SoftSkill[],

  contact: {
    email: "thalita.reis@example.com",
    phone: "+55 (21) 99999-9999",
    location: "Rio de Janeiro, RJ - Brasil",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/thalitapereiradosreis",
      github: "https://github.com/thalitareis",
      twitter: "https://twitter.com/thalitareis",
      instagram: "https://instagram.com/thalitareis"
    }
  } as ContactInfo
};
