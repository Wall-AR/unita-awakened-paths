
export interface Mission {
  id: string;
  title: string;
  masterId: string;
  type: "study" | "practice" | "service" | "creativity" | "self-knowledge" | "multiple";
  level: "beginner" | "intermediate" | "advanced";
  duration: string; // Ex: "3-7 days", "1 hour"
  description: string;
  objectives: string[];
  steps: string[];
  verification: string[];
  rewards: {
    xp: number;
    attributes?: {[key: string]: number};
    unlockable?: string;
  };
  requiredItems?: string[];
}

export const missions: Mission[] = [
  // Missão de Hermes
  {
    id: "correspondencias-natureza",
    title: "Correspondências da Natureza",
    masterId: "hermes",
    type: "multiple", // Combina estudo e prática
    level: "intermediate",
    duration: "3-7 dias",
    description: "Esta missão baseia-se no princípio hermético \"Como é acima, é abaixo\". Você irá observar um fenômeno natural específico e identificar como ele se reflete em outros níveis da realidade.",
    objectives: [
      "Compreender na prática o princípio da correspondência",
      "Desenvolver visão analógica",
      "Reconhecer padrões universais em manifestações particulares"
    ],
    steps: [
      "Escolha um fenômeno natural (crescimento de planta, ciclo da lua, padrão de nuvens, etc.)",
      "Observe-o diretamente por pelo menos 30 minutos, em silêncio contemplativo",
      "Registre suas observações detalhadas",
      "Identifique como o mesmo padrão se manifesta no corpo humano",
      "Identifique como se manifesta nas relações sociais",
      "Identifique como se manifesta no seu próprio processo psicológico",
      "Crie um diagrama ou esquema mostrando estas correspondências",
      "Reflita sobre o que isso revela sobre a unidade subjacente à realidade"
    ],
    verification: [
      "Foto ou desenho do fenômeno observado",
      "Diagrama de correspondências",
      "Reflexão escrita sobre insights (mínimo 300 palavras)"
    ],
    rewards: {
      xp: 120,
      attributes: {
        "Sabedoria": 5,
        "Harmonia": 3
      },
      unlockable: "Título: \"Observador Hermético\" (após 5 missões similares)"
    }
  },
  
  // Missão de Jesus
  {
    id: "ato-compaixao",
    title: "Ato de Compaixão Anônimo",
    masterId: "jesus",
    type: "service",
    level: "beginner",
    duration: "1-3 dias",
    description: "Esta missão te convida a praticar a compaixão pura, sem buscar reconhecimento ou recompensa, como ensinado pelo Cristo.",
    objectives: [
      "Desenvolver compaixão desinteressada",
      "Praticar o serviço sem ego",
      "Experimentar a alegria da doação anônima"
    ],
    steps: [
      "Identifique uma necessidade real em sua comunidade ou entre pessoas próximas",
      "Planeje uma ação que possa ajudar genuinamente a atender esta necessidade",
      "Realize a ação sem revelar sua identidade ao beneficiário",
      "Observe seus sentimentos durante o processo",
      "Reflita sobre a experiência sem compartilhá-la com outros"
    ],
    verification: [
      "Reflexão escrita sobre a experiência (sem detalhes que identifiquem os envolvidos)",
      "Descrição dos sentimentos e aprendizados (mínimo 200 palavras)"
    ],
    rewards: {
      xp: 100,
      attributes: {
        "Compaixão": 7,
        "Integridade": 3
      }
    }
  },
  
  // Missão de Buda
  {
    id: "meditacao-atencao-plena",
    title: "Prática de Atenção Plena Diária",
    masterId: "buda",
    type: "practice",
    level: "beginner",
    duration: "7 dias",
    description: "Desenvolva a prática da atenção plena (mindfulness) nas atividades cotidianas, como ensinado pelo Buda.",
    objectives: [
      "Cultivar presença consciente nas atividades diárias",
      "Desenvolver consciência da respiração como âncora",
      "Observar pensamentos sem identificação"
    ],
    steps: [
      "Pratique meditação sentada por 10-15 minutos cada manhã, focando na respiração",
      "Escolha uma atividade diária rotineira (como comer, caminhar ou lavar louça)",
      "Realize esta atividade com total presença e atenção aos detalhes sensoriais",
      "Quando perceber a mente vagando, gentilmente retorne ao momento presente",
      "Ao final de cada dia, registre suas observações sobre a experiência"
    ],
    verification: [
      "Registro diário de práticas (horário e duração)",
      "Reflexão sobre desafios encontrados e insights obtidos",
      "Descrição de como a prática afetou seu estado mental"
    ],
    rewards: {
      xp: 150,
      attributes: {
        "Harmonia": 5,
        "Sabedoria": 3
      },
      unlockable: "Desbloqueio da missão avançada \"Observação dos Cinco Agregados\""
    }
  },
  
  // Missão de Carl Jung
  {
    id: "trabalho-com-sombra",
    title: "Encontro com a Sombra",
    masterId: "carl-jung",
    type: "self-knowledge",
    level: "advanced",
    duration: "10-14 dias",
    description: "Esta missão te guiará no processo junguiano de confrontar e integrar aspectos negados da personalidade (a Sombra).",
    objectives: [
      "Identificar conteúdos psíquicos projetados nos outros",
      "Reconhecer aspectos negados do self",
      "Iniciar o processo de integração da sombra"
    ],
    steps: [
      "Por 3 dias, registre reações emocionais intensas negativas a outras pessoas",
      "Identifique padrões nas características que mais o irritam nos outros",
      "Reflita: como estas características podem existir em você de forma não reconhecida?",
      "Escreva uma carta do seu 'eu sombra' para seu 'eu consciente'",
      "Crie um diálogo escrito entre estes dois aspectos de si mesmo",
      "Desenvolva um pequeno ritual para honrar este aspecto negado"
    ],
    verification: [
      "Registro das projeções identificadas",
      "Carta da sombra (mínimo 500 palavras)",
      "Diálogo entre ego e sombra",
      "Descrição do ritual de integração"
    ],
    rewards: {
      xp: 180,
      attributes: {
        "Integridade": 7,
        "Sabedoria": 5,
        "Harmonia": 3
      },
      unlockable: "Acesso ao material avançado \"Arquétipos e Individuação\""
    }
  }
];

