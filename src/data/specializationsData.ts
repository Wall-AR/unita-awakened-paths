
import { SpecializationPath, DailyPractice } from "@/types/path";

export const specializationPaths: SpecializationPath[] = [
  {
    id: "philosopher",
    name: "O Caminho do Filósofo",
    description: "Para aqueles que buscam compreender a verdade através do conhecimento intelectual e da análise racional.",
    focus: ["Conhecimento teórico", "Compreensão intelectual", "Sabedoria conceitual"],
    development: ["Estudo comparativo", "Análise de textos", "Síntese de tradições"],
    attributes: ["Sabedoria", "Discernimento", "Clareza mental"],
    recommendedCourses: ["O Caibalion: Os Sete Princípios Herméticos", "Vedanta: O Conhecimento Supremo", "Símbolos Universais: A Linguagem do Inconsciente Coletivo"],
    affinityMasters: ["Pitágoras", "Hermes Trismegisto", "Carl Jung", "Manly P. Hall"],
    icon: "📚",
    color: "blue",
    dailyPractices: [
      {
        id: "philosophical-reading",
        name: "Leitura Contemplativa",
        description: "Leia textos filosóficos ou espirituais com atenção plena, absorvendo seu significado profundo.",
        duration: "15-30 min",
        instructions: "Escolha um parágrafo de uma obra filosófica, leia lentamente, pare para refletir sobre cada conceito importante. Anote insights.",
        benefitsAttributes: [], // Added to conform to global type
      },
      {
        id: "philosophical-journaling",
        name: "Journaling Filosófico",
        description: "Registre suas reflexões filosóficas, questões existenciais e insights conceituais.",
        duration: "10-15 min",
        instructions: "Formule uma pergunta filosófica no topo da página. Explore múltiplas perspectivas sobre ela. Conclua com sua visão atual.",
        benefitsAttributes: [],
      },
      {
        id: "socratic-dialogue",
        name: "Diálogo Socrático",
        description: "Pratique o questionamento sistemático para explorar conceitos profundos.",
        duration: "15-30 min",
        instructions: "Com um parceiro ou em diálogo interno, escolha um conceito e explore-o através de perguntas cada vez mais profundas.",
        benefitsAttributes: [],
      }
    ]
  },
  {
    id: "mystic",
    name: "O Caminho do Místico",
    description: "Para aqueles que buscam a experiência direta e pessoal da realidade divina, através da contemplação e estados alterados de consciência.",
    focus: ["Experiência direta", "Estados alterados", "União com o divino"],
    development: ["Práticas contemplativas", "Meditação profunda", "Estados não-duais"],
    attributes: ["Intuição", "Conexão espiritual", "Transcendência"],
    recommendedCourses: ["A Voz do Silêncio: Sabedoria Além das Palavras", "Sufismo: O Caminho do Coração", "Misticismo Cristão: De Jesus aos Místicos Medievais"],
    affinityMasters: ["Teresa de Ávila", "Rumi", "Paramahansa Yogananda", "Thich Nhat Hanh"],
    icon: "🕊️",
    color: "purple",
    dailyPractices: [
      {
        id: "silent-meditation",
        name: "Meditação Silenciosa",
        description: "Aquiete a mente e mergulhe no silêncio interior para conectar-se com estados mais profundos de consciência.",
        duration: "20-40 min",
        instructions: "Sente-se em posição confortável. Foque na respiração por 5 minutos. Depois, solte todo foco e repouse na consciência pura.",
        benefitsAttributes: [],
      },
      {
        id: "mantra-recitation",
        name: "Recitação de Mantras",
        description: "Use sons sagrados para elevar a vibração da consciência e conectar-se com energias mais sutis.",
        duration: "10-15 min",
        instructions: "Escolha um mantra significativo. Recite-o em voz alta por alguns minutos, depois sussurre e finalmente repita-o mentalmente.",
        benefitsAttributes: [],
      },
      {
        id: "sacred-symbol-contemplation",
        name: "Contemplação de Símbolos",
        description: "Use símbolos sagrados como pontos focais para meditação e expansão da consciência.",
        duration: "10-15 min",
        instructions: "Selecione um símbolo sagrado. Olhe-o com atenção por alguns minutos. Feche os olhos e visualize-o internamente.",
        benefitsAttributes: [],
      }
    ]
  },
  {
    id: "alchemist",
    name: "O Caminho do Alquimista",
    description: "Para aqueles que buscam a transformação interior através do trabalho com energias sutis e a integração dos opostos.",
    focus: ["Transformação pessoal", "Integração de opostos", "Transmutação energética"],
    development: ["Trabalho com energias sutis", "Purificação interior", "Integração sombra"],
    attributes: ["Transmutação", "Integração", "Equilíbrio interior"],
    recommendedCourses: ["Alquimia Ocidental: Da Matéria ao Espírito", "Como se Tornar Sobrenatural", "A Tábua de Esmeralda e seus Segredos"],
    affinityMasters: ["Saint Germain", "Hermes Trismegisto", "Carl Jung", "Eliphas Levi"],
    icon: "⚗️",
    color: "amber",
    dailyPractices: [
      {
        id: "transformative-visualization",
        name: "Visualização Transformadora",
        description: "Use o poder da visualização criativa para transformar estados interiores.",
        duration: "15-20 min",
        instructions: "Visualize uma qualidade indesejada como uma substância que se transforma gradualmente em uma qualidade desejada através de cores, luzes e símbolos.",
        benefitsAttributes: [],
      },
      {
        id: "subtle-energy-work",
        name: "Trabalho com Energia Sutil",
        description: "Trabalhe conscientemente com as energias sutis do corpo e da consciência.",
        duration: "15-20 min",
        instructions: "Visualize e sinta a energia vital movendo-se através dos centros energéticos do corpo, purificando e elevando a vibração.",
        benefitsAttributes: [],
      },
      {
        id: "dream-symbol-journal",
        name: "Registro de Sonhos e Símbolos",
        description: "Captura e interprete símbolos pessoais que emergem nos sonhos e na consciência.",
        duration: "10 min",
        instructions: "Ao acordar, registre imediatamente os sonhos. Observe padrões, símbolos recorrentes e sensações emocionais associadas.",
        benefitsAttributes: [],
      }
    ]
  },
  {
    id: "guardian",
    name: "O Caminho do Guardião",
    description: "Para aqueles que buscam servir aos outros e proteger a sabedoria espiritual através de ações éticas e responsabilidade social.",
    focus: ["Serviço", "Proteção", "Ética aplicada", "Responsabilidade social"],
    development: ["Práticas de serviço", "Ética vivida", "Liderança espiritual"],
    attributes: ["Compaixão", "Proteção", "Coragem", "Justiça"],
    recommendedCourses: ["A Bíblia Revelada: Para Além do Véu", "Mitos e Mistérios do Antigo Egito", "Budismo Engajado"],
    affinityMasters: ["Jesus Cristo", "Moisés", "São Francisco de Assis", "Thich Nhat Hanh"],
    icon: "🛡️",
    color: "green",
    dailyPractices: [
      {
        id: "compassion-meditation",
        name: "Meditação de Compaixão",
        description: "Desenvolva compaixão universal através de prática meditativa direcionada.",
        duration: "15-20 min",
        instructions: "Comece gerando sentimentos de amor-bondade para si mesmo, depois para entes queridos, pessoas neutras, pessoas difíceis e finalmente todos os seres.",
        benefitsAttributes: [],
      },
      {
        id: "daily-service-act",
        name: "Ato Diário de Serviço",
        description: "Realize um ato de serviço desinteressado todos os dias.",
        duration: "variável",
        instructions: "Identifique uma necessidade em seu ambiente e atenda-a sem esperar reconhecimento ou recompensa. Observe como isso afeta seu estado interior.",
        benefitsAttributes: [],
      },
      {
        id: "ethical-reflection",
        name: "Reflexão Ética Aplicada",
        description: "Examine suas ações diárias através de princípios éticos elevados.",
        duration: "10 min",
        instructions: "Revise suas ações do dia à luz de princípios éticos como não-violência, verdade, generosidade. Identifique áreas para melhoria.",
        benefitsAttributes: [],
      }
    ]
  },
  {
    id: "hermeneut",
    name: "O Caminho do Hermeneuta",
    description: "Para aqueles que buscam decifrar os símbolos sagrados e interpretar os textos espirituais, revelando sua sabedoria oculta.",
    focus: ["Interpretação de símbolos", "Textos sagrados", "Conexões entre tradições"],
    development: ["Estudo de linguagem simbólica", "Mitologia comparada", "Exegese"],
    attributes: ["Compreensão profunda", "Visão analógica", "Discernimento simbólico"],
    recommendedCourses: ["Símbolos Universais: A Linguagem do Inconsciente Coletivo", "A Cabala Mística: A Árvore da Vida", "O Livro dos Mortos: Jornada da Alma"],
    affinityMasters: ["Hermes Trismegisto", "Carl Jung", "Helena Blavatsky", "Manly P. Hall"],
    icon: "🔍",
    color: "indigo",
    dailyPractices: [
      {
        id: "symbol-text-study",
        name: "Estudo de Símbolos ou Textos",
        description: "Estude profundamente símbolos sagrados ou textos espirituais, explorando suas múltiplas camadas.",
        duration: "20-30 min",
        instructions: "Escolha um símbolo ou passagem curta. Analise seu significado literal, alegórico, simbólico e místico. Registre insights em cada nível.",
        benefitsAttributes: [],
      },
      {
        id: "inspired-writing",
        name: "Escrita Inspirada",
        description: "Pratique a escrita em estado receptivo, permitindo que significados mais profundos fluam através de você.",
        duration: "15 min",
        instructions: "Aquiete a mente por alguns minutos. Estabeleça uma intenção clara para receber sabedoria. Escreva continuamente, sem julgar ou editar o conteúdo.",
        benefitsAttributes: [],
      },
      {
        id: "connecting-concepts",
        name: "Conexão de Conceitos",
        description: "Pratique encontrar conexões entre conceitos aparentemente não relacionados em diferentes tradições.",
        duration: "15 min",
        instructions: "Escolha dois conceitos de tradições diferentes. Explore suas similaridades, diferenças e princípios subjacentes comuns.",
        benefitsAttributes: [],
      }
    ]
  }
];
