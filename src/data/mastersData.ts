
import { Master } from "@/types/master";

// This data represents a simplified view. It will need to be aligned with the global Master type,
// especially by adding 'id' and other mandatory fields from the global Master type.
// Fields like 'specialty' are not in the global Master type and might need to be added or removed.
export const masters: Master[] = [
  // Categoria A: Mestres Históricos Principais
  {
    id: "hermes-trismegisto", // Added ID
    name: "Hermes Trismegisto",
    tradition: "Hermetismo",
    category: "A",
    description: "O lendário iniciador dos mistérios herméticos, associado ao deus Thoth egípcio e Hermes grego.",
    // specialty: "Princípios Universais e Alquimia", // Not in global Master
    icon: "⚕️",
    period: "Lendário", // Renamed from century
    quote: "Como acima, assim é abaixo; como abaixo, assim é acima.",
    missionTypes: ["Contemplação", "Estudo dos Princípios", "Alquimia Interior"],
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: [] // Added missing fields
  },
  {
    id: "jesus-de-nazare", // Added ID
    name: "Jesus de Nazaré",
    tradition: "Cristianismo",
    category: "A",
    description: "O mestre central da tradição cristã, cujos ensinamentos transformaram o mundo ocidental.",
    // specialty: "Amor Incondicional e Perdão",
    icon: "✝️",
    period: "Século I",
    quote: "Conhecereis a verdade, e a verdade vos libertará.",
    missionTypes: ["Serviço", "Compaixão", "Contemplação"],
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },
  {
    id: "siddharta-gautama", // Added ID
    name: "Siddharta Gautama",
    tradition: "Budismo",
    category: "A",
    description: "O Buda histórico que alcançou a iluminação e estabeleceu o caminho do meio para a libertação do sofrimento.",
    // specialty: "Meditação e Cessação do Sofrimento",
    icon: "☸️",
    period: "Século V a.C.",
    quote: "A paz vem de dentro. Não a procure fora.",
    missionTypes: ["Meditação", "Consciência Plena", "Compaixão"],
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },

  // Categoria B: Místicos e Professores Reconhecidos
  {
    id: "paracelso", // Added ID
    name: "Paracelso",
    tradition: "Alquimia",
    category: "B",
    description: "Médico, alquimista e astrólogo suíço que revolucionou a medicina ocidental com abordagens holísticas.",
    // specialty: "Medicina Hermética e Paracelsiana",
    icon: "⚗️",
    period: "Século XVI",
    quote: "O homem é uma miniatura do macrocosmo.",
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },
  {
    id: "teresa-de-avila", // Added ID
    name: "Teresa de Ávila",
    tradition: "Misticismo Cristão",
    category: "B",
    description: "Mística espanhola que explorou os estados interiores da alma em sua jornada em direção à união com Deus.",
    // specialty: "Oração Contemplativa",
    icon: "🕊️",
    period: "Século XVI",
    quote: "A paciência tudo alcança.",
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },
  {
    id: "lao-tzu", // Added ID
    name: "Lao Tzu",
    tradition: "Taoísmo",
    category: "B",
    description: "O autor legendário do Tao Te Ching e fundador do taoísmo filosófico.",
    // specialty: "Wu-Wei (Não-Ação)",
    icon: "☯️",
    period: "Século VI a.C.",
    quote: "Aquele que conhece os outros é sábio; aquele que conhece a si mesmo é iluminado.",
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },
  {
    id: "isaac-luria", // Added ID
    name: "Isaac Luria",
    tradition: "Cabala",
    category: "B",
    description: "Rabino e místico que revolucionou o estudo da Cabala com seu sistema cosmológico e de redenção.",
    // specialty: "Cabala Luriânica",
    icon: "✡️",
    period: "Século XVI",
    quote: "Toda a criação é um ato de contração do infinito.",
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },

  // Categoria C: Sábios e Instrutores
  {
    id: "helena-blavatsky", // Added ID
    name: "Helena Blavatsky",
    tradition: "Teosofia",
    category: "C",
    description: "Fundadora da Sociedade Teosófica que ajudou a introduzir conceitos orientais no ocidente.",
    // specialty: "Síntese de Tradições Orientais e Ocidentais",
    icon: "🔮",
    period: "Século XIX",
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },
  {
    id: "alan-watts", // Added ID
    name: "Alan Watts",
    tradition: "Zen Ocidental",
    category: "C",
    description: "Filósofo que popularizou as filosofias orientais no ocidente com clareza e humor.",
    // specialty: "Interpretação Ocidental do Zen e Taoísmo",
    icon: "☯️",
    period: "Século XX",
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },
  {
    id: "manly-p-hall", // Added ID
    name: "Manly P. Hall",
    tradition: "Esoterismo Ocidental",
    category: "C",
    description: "Erudito e autor que compilou vastos conhecimentos sobre tradições místicas e ocultistas.",
    // specialty: "Filosofia Simbólica",
    icon: "📚",
    period: "Século XX",
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },
  {
    id: "maria-prophetissa", // Added ID
    name: "Maria Prophetissa",
    tradition: "Alquimia",
    category: "C",
    description: "Uma das primeiras alquimistas conhecidas, inventora de vários aparelhos alquímicos.",
    // specialty: "Operações Alquímicas",
    icon: "⚗️",
    period: "Século III",
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  },
  {
    id: "hildegarda-de-bingen", // Added ID
    name: "Hildegarda de Bingen",
    tradition: "Misticismo Cristão",
    category: "C",
    description: "Abadessa, compositora e mística que recebeu visões divinas e as registrou em obras importantes.",
    // specialty: "Medicina Holística e Visões",
    icon: "🌿",
    period: "Século XII",
    availableAt: 0, characteristics: [], teachings: [], missions: [], specializations: []
  }
];
