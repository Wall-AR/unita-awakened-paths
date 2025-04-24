
export interface Master {
  name: string;
  tradition: string;
  category: string; // S, A, B, C
  description: string;
  specialty: string;
  icon: string;
  century?: string;
  quote?: string;
  missionTypes?: string[];
}

export const masters: Master[] = [
  // Categoria A: Mestres Históricos Principais
  {
    name: "Hermes Trismegisto",
    tradition: "Hermetismo",
    category: "A",
    description: "O lendário iniciador dos mistérios herméticos, associado ao deus Thoth egípcio e Hermes grego.",
    specialty: "Princípios Universais e Alquimia",
    icon: "⚕️",
    century: "Lendário",
    quote: "Como acima, assim é abaixo; como abaixo, assim é acima.",
    missionTypes: ["Contemplação", "Estudo dos Princípios", "Alquimia Interior"]
  },
  {
    name: "Jesus de Nazaré",
    tradition: "Cristianismo",
    category: "A",
    description: "O mestre central da tradição cristã, cujos ensinamentos transformaram o mundo ocidental.",
    specialty: "Amor Incondicional e Perdão",
    icon: "✝️",
    century: "Século I",
    quote: "Conhecereis a verdade, e a verdade vos libertará.",
    missionTypes: ["Serviço", "Compaixão", "Contemplação"]
  },
  {
    name: "Siddharta Gautama",
    tradition: "Budismo",
    category: "A",
    description: "O Buda histórico que alcançou a iluminação e estabeleceu o caminho do meio para a libertação do sofrimento.",
    specialty: "Meditação e Cessação do Sofrimento",
    icon: "☸️",
    century: "Século V a.C.",
    quote: "A paz vem de dentro. Não a procure fora.",
    missionTypes: ["Meditação", "Consciência Plena", "Compaixão"]
  },

  // Categoria B: Místicos e Professores Reconhecidos
  {
    name: "Paracelso",
    tradition: "Alquimia",
    category: "B",
    description: "Médico, alquimista e astrólogo suíço que revolucionou a medicina ocidental com abordagens holísticas.",
    specialty: "Medicina Hermética e Paracelsiana",
    icon: "⚗️",
    century: "Século XVI",
    quote: "O homem é uma miniatura do macrocosmo."
  },
  {
    name: "Teresa de Ávila",
    tradition: "Misticismo Cristão",
    category: "B",
    description: "Mística espanhola que explorou os estados interiores da alma em sua jornada em direção à união com Deus.",
    specialty: "Oração Contemplativa",
    icon: "🕊️",
    century: "Século XVI",
    quote: "A paciência tudo alcança."
  },
  {
    name: "Lao Tzu",
    tradition: "Taoísmo",
    category: "B",
    description: "O autor legendário do Tao Te Ching e fundador do taoísmo filosófico.",
    specialty: "Wu-Wei (Não-Ação)",
    icon: "☯️",
    century: "Século VI a.C.",
    quote: "Aquele que conhece os outros é sábio; aquele que conhece a si mesmo é iluminado."
  },
  {
    name: "Isaac Luria",
    tradition: "Cabala",
    category: "B",
    description: "Rabino e místico que revolucionou o estudo da Cabala com seu sistema cosmológico e de redenção.",
    specialty: "Cabala Luriânica",
    icon: "✡️",
    century: "Século XVI",
    quote: "Toda a criação é um ato de contração do infinito."
  },

  // Categoria C: Sábios e Instrutores
  {
    name: "Helena Blavatsky",
    tradition: "Teosofia",
    category: "C",
    description: "Fundadora da Sociedade Teosófica que ajudou a introduzir conceitos orientais no ocidente.",
    specialty: "Síntese de Tradições Orientais e Ocidentais",
    icon: "🔮",
    century: "Século XIX"
  },
  {
    name: "Alan Watts",
    tradition: "Zen Ocidental",
    category: "C",
    description: "Filósofo que popularizou as filosofias orientais no ocidente com clareza e humor.",
    specialty: "Interpretação Ocidental do Zen e Taoísmo",
    icon: "☯️",
    century: "Século XX"
  },
  {
    name: "Manly P. Hall",
    tradition: "Esoterismo Ocidental",
    category: "C",
    description: "Erudito e autor que compilou vastos conhecimentos sobre tradições místicas e ocultistas.",
    specialty: "Filosofia Simbólica",
    icon: "📚",
    century: "Século XX"
  },
  {
    name: "Maria Prophetissa",
    tradition: "Alquimia",
    category: "C",
    description: "Uma das primeiras alquimistas conhecidas, inventora de vários aparelhos alquímicos.",
    specialty: "Operações Alquímicas",
    icon: "⚗️",
    century: "Século III"
  },
  {
    name: "Hildegarda de Bingen",
    tradition: "Misticismo Cristão",
    category: "C",
    description: "Abadessa, compositora e mística que recebeu visões divinas e as registrou em obras importantes.",
    specialty: "Medicina Holística e Visões",
    icon: "🌿",
    century: "Século XII"
  }
];
