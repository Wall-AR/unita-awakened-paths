
export interface Path {
  name: string;
  description: string;
  icon: string;
  gradient: {
    from: string;
    to: string;
  };
  keyElements: string[];
  masters: string[];
}

export const paths: Path[] = [
  {
    name: "Caminho Hermético",
    description: "Baseado nos princípios universais do Corpus Hermeticum e do Caibalion, revelando as leis que governam o cosmos e a consciência.",
    icon: "⚕️",
    gradient: {
      from: "rgba(11, 57, 63, 0.4)",
      to: "rgba(0, 30, 30, 0.7)"
    },
    keyElements: [
      "Os Sete Princípios Herméticos",
      "Alquimia Interior",
      "Estudo do Caibalion",
      "Meditação sobre os Princípios"
    ],
    masters: [
      "Hermes Trismegisto",
      "Paracelso",
      "Giordano Bruno"
    ]
  },
  {
    name: "Caminho Cabalístico",
    description: "Explora o antigo sistema místico judaico da Cabala, revelando a estrutura oculta da realidade através da Árvore da Vida.",
    icon: "✡️",
    gradient: {
      from: "rgba(45, 13, 83, 0.4)",
      to: "rgba(20, 0, 50, 0.7)"
    },
    keyElements: [
      "A Árvore da Vida (Sephirot)",
      "Os 22 Caminhos",
      "Gematria e Numerologia Sagrada",
      "Meditação sobre os Nomes Divinos"
    ],
    masters: [
      "Rabi Shimon bar Yochai",
      "Isaac Luria",
      "Abraham Abulafia"
    ]
  },
  {
    name: "Caminho Gnóstico",
    description: "Revela o conhecimento interior (gnosis) através do estudo dos evangelhos canônicos e apócrifos, buscando a libertação espiritual.",
    icon: "🕊️",
    gradient: {
      from: "rgba(83, 13, 45, 0.4)",
      to: "rgba(50, 0, 20, 0.7)"
    },
    keyElements: [
      "Evangelhos Gnósticos",
      "Sabedoria Sophia",
      "Simbolismo do Cristo Interior",
      "Bibliotecas de Nag Hammadi"
    ],
    masters: [
      "Jesus",
      "Maria Madalena",
      "Valentino"
    ]
  },
  {
    name: "Caminho Védico",
    description: "Explora a profunda sabedoria dos Vedas e Upanishads, revelando o conhecimento do Ser e a natureza da consciência.",
    icon: "☸️",
    gradient: {
      from: "rgba(83, 45, 13, 0.4)",
      to: "rgba(50, 20, 0, 0.7)"
    },
    keyElements: [
      "Estudo dos Upanishads",
      "Filosofia Advaita Vedanta",
      "Yoga e Meditação",
      "Bhagavad Gita"
    ],
    masters: [
      "Adi Shankara",
      "Patanjali",
      "Ramana Maharshi"
    ]
  },
  {
    name: "Caminho Budista",
    description: "Segue o caminho do meio ensinado por Buda, buscando a libertação do sofrimento através da meditação e sabedoria.",
    icon: "☸️",
    gradient: {
      from: "rgba(83, 70, 13, 0.4)",
      to: "rgba(50, 40, 0, 0.7)"
    },
    keyElements: [
      "Quatro Nobres Verdades",
      "Caminho Óctuplo",
      "Meditação Vipassana",
      "Compaixão (Metta)"
    ],
    masters: [
      "Siddharta Gautama",
      "Nagarjuna",
      "Thich Nhat Hanh"
    ]
  },
  {
    name: "Caminho Alquímico",
    description: "Estuda a transformação da matéria como alegoria da transmutação espiritual interior, revelando o ouro interno.",
    icon: "⚗️",
    gradient: {
      from: "rgba(13, 83, 45, 0.4)",
      to: "rgba(0, 50, 20, 0.7)"
    },
    keyElements: [
      "As Operações Alquímicas",
      "Simbolismo da Pedra Filosofal",
      "Correspondências entre Macrocosmo e Microcosmo",
      "Alquimia Prática e Espiritual"
    ],
    masters: [
      "Nicolas Flamel",
      "Paracelso",
      "Carl Jung"
    ]
  },
  {
    name: "Caminho Taoísta",
    description: "Segue o fluxo natural do Tao, buscando harmonia através do equilíbrio das forças yin e yang em todas as dimensões da existência.",
    icon: "☯️",
    gradient: {
      from: "rgba(13, 45, 83, 0.4)",
      to: "rgba(0, 20, 50, 0.7)"
    },
    keyElements: [
      "Tao Te Ching",
      "Princípio do Wu-Wei (Não-Ação)",
      "Qigong e Cultivo da Energia Vital",
      "Medicina Tradicional Chinesa"
    ],
    masters: [
      "Lao Tzu",
      "Chuang Tzu",
      "Wei Boyang"
    ]
  },
  {
    name: "Caminho Xamânico",
    description: "Explora as antigas práticas de comunicação com os mundos espirituais através de estados alterados de consciência e rituais sagrados.",
    icon: "🔮",
    gradient: {
      from: "rgba(45, 83, 13, 0.4)",
      to: "rgba(20, 50, 0, 0.7)"
    },
    keyElements: [
      "Jornada Xamânica",
      "Comunicação com Espíritos da Natureza",
      "Plantas Sagradas e Enteógenos",
      "Rituais de Cura e Iniciação"
    ],
    masters: [
      "Mestres Indígenas Diversos",
      "Carlos Castaneda",
      "Michael Harner"
    ]
  },
  {
    name: "Caminho Místico Cristão",
    description: "Aprofunda-se na dimensão contemplativa e mística do cristianismo, buscando a união direta com o Divino.",
    icon: "✝️",
    gradient: {
      from: "rgba(13, 13, 83, 0.4)",
      to: "rgba(0, 0, 50, 0.7)"
    },
    keyElements: [
      "Teologia Negativa",
      "Contemplação e Oração do Coração",
      "Misticismo Apofático",
      "Tradição Hesicasta"
    ],
    masters: [
      "Teresa de Ávila",
      "São João da Cruz",
      "Mestre Eckhart"
    ]
  }
];
