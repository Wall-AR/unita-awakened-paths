
import { Path } from "@/types/path";

export const paths: Path[] = [
  {
    id: "tradicao-abrahamica", // Added ID
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
    masterIds: [ 
      "jesus",
      "unknown-moises",
      "unknown-sao-francisco-de-assis",
      "teresa-avila",
      "rumi"
    ],
    courseIds: [ 
      "biblia-revelada",
      "cabala-mistica",
      "misticismo-cristao",
      "sufismo"
    ]
  },
  {
    id: "tradicao-hermetica", // Added ID
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
    masterIds: [
      "hermes",
      "unknown-saint-germain",
      "unknown-eliphas-levi"
    ],
    courseIds: [
      "caibalion",
      "alquimia-ocidental",
      "tabua-esmeralda"
    ]
  },
  {
    id: "tradicao-oriental", // Added ID
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
    masterIds: [
      "buda",
      "lao-tse",
      "unknown-patanjali",
      "unknown-paramahansa-yogananda",
      "thich-nhat-hanh"
    ],
    courseIds: [
      "voz-silencio",
      "vedanta",
      "tao-te-ching",
      "unknown-zen-alem-da-mente-dualista" 
    ]
  },
  {
    id: "tradicao-egipcia", // Added ID
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
    masterIds: [
      "hermes"
    ],
    courseIds: [
      "livro-mortos",
      "unknown-mitos-misterios-egito" 
    ]
  },
  {
    id: "tradicao-ocidental-moderna", // Added ID
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
    masterIds: [
      "helena-blavatsky",
      "unknown-aleister-crowley",
      "unknown-rudolf-steiner",
      "carl-jung",
      "unknown-dion-fortune"
    ],
    courseIds: [
      "dogma-ritual",
      "unknown-teosofia-sabedoria-divina", 
      "unknown-rosacrucianismo-caminho" 
    ]
  },
  {
    id: "tradicao-xamanica-paga", // Added ID
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
    masterIds: [
      "unknown-carlos-castaneda"
    ],
    courseIds: [
      "unknown-cozinha-bruxa", 
      "unknown-xamanismo-global" 
    ]
  },
  {
    id: "caminhos-integradores", // Added ID
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
    masterIds: [
      "carl-jung",
      "ram-dass",
      "unknown-jiddu-krishnamurti",
      "unknown-gi-gurdjieff"
    ],
    courseIds: [
      "sobrenatural",
      "unknown-simbolos-universais", 
      "unknown-mapeando-consciencia" 
    ]
  }
];

