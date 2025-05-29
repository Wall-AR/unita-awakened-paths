
import { Mission } from "@/types/mission";

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
      { id: "step-cn-1", description: "Escolha um fenômeno natural (crescimento de planta, ciclo da lua, padrão de nuvens, etc.)", isRequired: true, order: 1 },
      { id: "step-cn-2", description: "Observe-o diretamente por pelo menos 30 minutos, em silêncio contemplativo", isRequired: true, order: 2 },
      { id: "step-cn-3", description: "Registre suas observações detalhadas", isRequired: true, order: 3 },
      { id: "step-cn-4", description: "Identifique como o mesmo padrão se manifesta no corpo humano", isRequired: true, order: 4 },
      { id: "step-cn-5", description: "Identifique como se manifesta nas relações sociais", isRequired: true, order: 5 },
      { id: "step-cn-6", description: "Identifique como se manifesta no seu próprio processo psicológico", isRequired: true, order: 6 },
      { id: "step-cn-7", description: "Crie um diagrama ou esquema mostrando estas correspondências", isRequired: true, order: 7 },
      { id: "step-cn-8", description: "Reflita sobre o que isso revela sobre a unidade subjacente à realidade", isRequired: true, order: 8 }
    ], 
    verification: [ 
      { id: "ver-cn-1", type: 'image', description: "Foto ou desenho do fenômeno observado" },
      { id: "ver-cn-2", type: 'image', description: "Diagrama de correspondências" },
      { id: "ver-cn-3", type: 'text', description: "Reflexão escrita sobre insights (mínimo 300 palavras)", minLength: 300 }
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
      { id: "step-ac-1", description: "Identifique uma necessidade real em sua comunidade ou entre pessoas próximas", isRequired: true, order: 1 },
      { id: "step-ac-2", description: "Planeje uma ação que possa ajudar genuinamente a atender esta necessidade", isRequired: true, order: 2 },
      { id: "step-ac-3", description: "Realize a ação sem revelar sua identidade ao beneficiário", isRequired: true, order: 3 },
      { id: "step-ac-4", description: "Observe seus sentimentos durante o processo", isRequired: true, order: 4 },
      { id: "step-ac-5", description: "Reflita sobre a experiência sem compartilhá-la com outros", isRequired: true, order: 5 }
    ],
    verification: [
      { id: "ver-ac-1", type: 'text', description: "Reflexão escrita sobre a experiência (sem detalhes que identifiquem os envolvidos)", minLength: 200 },
      { id: "ver-ac-2", type: 'text', description: "Descrição dos sentimentos e aprendizados (mínimo 200 palavras)", minLength: 200 }
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
      { id: "step-map-1", description: "Pratique meditação sentada por 10-15 minutos cada manhã, focando na respiração", isRequired: true, order: 1 },
      { id: "step-map-2", description: "Escolha uma atividade diária rotineira (como comer, caminhar ou lavar louça)", isRequired: true, order: 2 },
      { id: "step-map-3", description: "Realize esta atividade com total presença e atenção aos detalhes sensoriais", isRequired: true, order: 3 },
      { id: "step-map-4", description: "Quando perceber a mente vagando, gentilmente retorne ao momento presente", isRequired: true, order: 4 },
      { id: "step-map-5", description: "Ao final de cada dia, registre suas observações sobre a experiência", isRequired: true, order: 5 }
    ],
    verification: [
      { id: "ver-map-1", type: 'text', description: "Registro diário de práticas (horário e duração)", minLength: 50 },
      { id: "ver-map-2", type: 'text', description: "Reflexão sobre desafios encontrados e insights obtidos", minLength: 100 },
      { id: "ver-map-3", type: 'text', description: "Descrição de como a prática afetou seu estado mental", minLength: 100 }
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
      { id: "step-ts-1", description: "Por 3 dias, registre reações emocionais intensas negativas a outras pessoas", isRequired: true, order: 1 },
      { id: "step-ts-2", description: "Identifique padrões nas características que mais o irritam nos outros", isRequired: true, order: 2 },
      { id: "step-ts-3", description: "Reflita: como estas características podem existir em você de forma não reconhecida?", isRequired: true, order: 3 },
      { id: "step-ts-4", description: "Escreva uma carta do seu 'eu sombra' para seu 'eu consciente'", isRequired: true, order: 4 },
      { id: "step-ts-5", description: "Crie um diálogo escrito entre estes dois aspectos de si mesmo", isRequired: true, order: 5 },
      { id: "step-ts-6", description: "Desenvolva um pequeno ritual para honrar este aspecto negado", isRequired: true, order: 6 }
    ],
    verification: [
      { id: "ver-ts-1", type: 'text', description: "Registro das projeções identificadas", minLength: 100 },
      { id: "ver-ts-2", type: 'text', description: "Carta da sombra (mínimo 500 palavras)", minLength: 500 },
      { id: "ver-ts-3", type: 'text', description: "Diálogo entre ego e sombra", minLength: 300 },
      { id: "ver-ts-4", type: 'text', description: "Descrição do ritual de integração", minLength: 100 }
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

