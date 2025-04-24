
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
  courses?: string[];
}

export const paths: Path[] = [
  {
    name: "Tradição Abraâmica",
    description: "Explore os ensinamentos e práticas espirituais das tradições judaica, cristã e islâmica, revelando sua sabedoria ancestral e mística.",
    icon: "✝️",
    gradient: {
      from: "rgba(45, 13, 83, 0.4)",
      to: "rgba(20, 0, 50, 0.7)"
    },
    keyElements: [
      "Interpretação Esotérica da Bíblia",
      "Cabala e Misticismo Judaico",
      "Misticismo Cristão Medieval",
      "Sufismo e Sabedoria Islâmica"
    ],
    masters: [
      "Jesus Cristo",
      "Moisés",
      "São Francisco de Assis",
      "Teresa de Ávila",
      "Rumi"
    ],
    courses: [
      "A Bíblia Revelada: Para Além do Véu",
      "A Cabala Mística: A Árvore da Vida",
      "Misticismo Cristão: De Jesus aos Místicos Medievais",
      "Sufismo: O Caminho do Coração"
    ]
  },
  {
    name: "Tradição Hermética",
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
      "Saint Germain",
      "Eliphas Levi"
    ],
    courses: [
      "O Caibalion: Os Sete Princípios Herméticos",
      "Alquimia Ocidental: Da Matéria ao Espírito",
      "A Tábua de Esmeralda e seus Segredos"
    ]
  },
  {
    name: "Tradição Oriental",
    description: "Explore as profundas tradições espirituais da Ásia, incluindo as práticas contemplativas e filosóficas da Índia, China e Japão.",
    icon: "☸️",
    gradient: {
      from: "rgba(83, 45, 13, 0.4)",
      to: "rgba(50, 20, 0, 0.7)"
    },
    keyElements: [
      "Budismo e Meditação",
      "Vedanta e Upanishads",
      "Taoísmo e Harmonia Natural",
      "Zen e Não-dualidade"
    ],
    masters: [
      "Buda",
      "Lao Tsé",
      "Patanjali",
      "Paramahansa Yogananda",
      "Thich Nhat Hanh"
    ],
    courses: [
      "A Voz do Silêncio: Sabedoria Além das Palavras",
      "Vedanta: O Conhecimento Supremo",
      "Tao Te Ching: O Caminho do Meio",
      "Zen: Além da Mente Dualista"
    ]
  },
  {
    name: "Tradição Egípcia",
    description: "Explore os antigos mistérios do Egito, seus rituais de iniciação e a sabedoria codificada em seus textos sagrados e monumentos.",
    icon: "☥",
    gradient: {
      from: "rgba(83, 70, 13, 0.4)",
      to: "rgba(50, 40, 0, 0.7)"
    },
    keyElements: [
      "O Livro dos Mortos",
      "Rituais de Iniciação",
      "Mitologia e Deuses Egípcios",
      "Simbolismo Hieroglífico"
    ],
    masters: [
      "Hermes Trismegisto"
    ],
    courses: [
      "O Livro dos Mortos: Jornada da Alma",
      "Mitos e Mistérios do Antigo Egito"
    ]
  },
  {
    name: "Tradição Ocidental Moderna",
    description: "Estuda as escolas esotéricas modernas que surgiram nos séculos XIX e XX, integrando conhecimento antigo com novas perspectivas.",
    icon: "🔮",
    gradient: {
      from: "rgba(13, 83, 45, 0.4)",
      to: "rgba(0, 50, 20, 0.7)"
    },
    keyElements: [
      "Alta Magia Cerimonial",
      "Teosofia e Antroposofia",
      "Rosacrucianismo",
      "Psicologia Profunda"
    ],
    masters: [
      "Helena Blavatsky",
      "Aleister Crowley",
      "Rudolf Steiner",
      "Carl Jung",
      "Dion Fortune"
    ],
    courses: [
      "Dogma e Ritual da Alta Magia",
      "Teosofia: A Sabedoria Divina",
      "Rosacrucianismo: O Caminho da Rosa e da Cruz"
    ]
  },
  {
    name: "Tradição Xamânica e Pagã",
    description: "Explora as antigas práticas xamânicas e tradições pagãs focadas na conexão com a natureza e estados alterados de consciência.",
    icon: "🌿",
    gradient: {
      from: "rgba(13, 45, 83, 0.4)",
      to: "rgba(0, 20, 50, 0.7)"
    },
    keyElements: [
      "Técnicas de Êxtase",
      "Trabalho com Plantas de Poder",
      "Rituais Sazonais",
      "Conexão com Espíritos da Natureza"
    ],
    masters: [
      "Carlos Castaneda"
    ],
    courses: [
      "A Cozinha da Bruxa: Ervas e Rituais",
      "Xamanismo Global: Técnicas de Êxtase"
    ]
  },
  {
    name: "Caminhos Integradores",
    description: "Abordagens que sintetizam múltiplas tradições e integram ciência contemporânea com sabedoria ancestral para uma visão holística.",
    icon: "🔄",
    gradient: {
      from: "rgba(45, 83, 13, 0.4)",
      to: "rgba(20, 50, 0, 0.7)"
    },
    keyElements: [
      "Neurociência e Espiritualidade",
      "Psicologia Transpessoal",
      "Simbolismo Universal",
      "Estados de Consciência"
    ],
    masters: [
      "Carl Jung",
      "Ram Dass",
      "Jiddu Krishnamurti",
      "G.I. Gurdjieff"
    ],
    courses: [
      "Como se Tornar Sobrenatural: Integrando Ciência e Espiritualidade",
      "Símbolos Universais: A Linguagem do Inconsciente Coletivo",
      "Mapeando a Consciência: Estados Alterados e Expansão da Mente"
    ]
  }
];

