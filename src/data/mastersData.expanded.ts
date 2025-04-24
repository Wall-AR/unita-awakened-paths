
export interface MasterGuide {
  id: string;
  name: string;
  tradition: string;
  category: "S" | "A" | "B" | "C"; // S=Avatars, A=Historical Masters, B=Mystics, C=Teachers
  description: string;
  period: string;
  characteristics: string[];
  teachings: string[];
  missionTypes: string[];
  icon: string;
  quote?: string;
  material?: string;
  image?: string;
  rarity?: string; // For display purposes
}

export const masterGuides: MasterGuide[] = [
  // Categoria S (Avatares/Fundadores)
  {
    id: "jesus",
    name: "Jesus Cristo",
    tradition: "Cristianismo",
    category: "S",
    description: "O mestre central da tradição cristã, cujos ensinamentos transformaram o mundo ocidental.",
    period: "1º século",
    characteristics: ["Compaixão infinita", "Perdão radical", "Amor universal"],
    teachings: ["As bem-aventuranças", "Parábolas", "Sermão da Montanha"],
    missionTypes: ["Serviço desinteressado", "Perdão", "Amor ao próximo", "Cura"],
    icon: "✝️",
    quote: "Conhecereis a verdade, e a verdade vos libertará.",
    material: "Evangelhos canônicos e apócrifos, estudos sobre o Jesus histórico",
    rarity: "Extremamente Raro"
  },
  {
    id: "buda",
    name: "Buda (Sidarta Gautama)",
    tradition: "Budismo",
    category: "S",
    description: "O fundador do budismo que alcançou a iluminação e estabeleceu o caminho do meio para a libertação do sofrimento.",
    period: "~500 a.C.",
    characteristics: ["Serenidade", "Equanimidade", "Compaixão impessoal"],
    teachings: ["Quatro Nobres Verdades", "Caminho Óctuplo", "Meditação"],
    missionTypes: ["Meditação", "Atenção plena", "Investigação de realidade", "Simplicidade"],
    icon: "☸️",
    quote: "A paz vem de dentro. Não a procure fora.",
    material: "Sutras budistas principais, biografias do Buda",
    rarity: "Extremamente Raro"
  },
  {
    id: "hermes",
    name: "Hermes Trismegisto",
    tradition: "Hermetismo",
    category: "S",
    description: "O lendário iniciador dos mistérios herméticos, associado ao deus Thoth egípcio e Hermes grego.",
    period: "Lendário (Antigo Egito/Grécia)",
    characteristics: ["Sabedoria esotérica", "Conhecimento oculto", "Princípios universais"],
    teachings: ["Sete princípios herméticos", "Correspondências", "Polaridade"],
    missionTypes: ["Estudo de correspondências", "Observação da natureza", "Contemplação"],
    icon: "⚕️",
    quote: "Como acima, assim é abaixo; como abaixo, assim é acima.",
    material: "Corpus Hermeticum, Caibalion, textos alquímicos",
    rarity: "Extremamente Raro"
  },
  
  // Categoria A (Mestres Históricos Principais)
  {
    id: "lao-tse",
    name: "Lao Tsé",
    tradition: "Taoísmo",
    category: "A",
    description: "O autor legendário do Tao Te Ching e fundador do taoísmo filosófico.",
    period: "~600 a.C.",
    characteristics: ["Simplicidade", "Não-ação (wu wei)", "Harmonia natural"],
    teachings: ["Tao Te Ching", "O caminho do Tao"],
    missionTypes: ["Observação da natureza", "Simplificação", "Fluir com a vida"],
    icon: "☯️",
    quote: "Aquele que conhece os outros é sábio; aquele que conhece a si mesmo é iluminado.",
    material: "Tao Te Ching, textos taoistas complementares",
    rarity: "Raro"
  },
  {
    id: "teresa-avila",
    name: "Teresa de Ávila",
    tradition: "Cristianismo Místico",
    category: "A",
    description: "Mística espanhola que explorou os estados interiores da alma em sua jornada em direção à união com Deus.",
    period: "1515-1582",
    characteristics: ["Êxtase místico", "Autodisciplina", "Reforma espiritual"],
    teachings: ["Castelo Interior", "União mística", "Oração contemplativa"],
    missionTypes: ["Meditação contemplativa", "Autoexame", "Aprofundamento espiritual"],
    icon: "🕊️",
    quote: "A paciência tudo alcança.",
    material: "Obras completas, biografias, contexto histórico",
    rarity: "Raro"
  },
  {
    id: "rumi",
    name: "Rumi",
    tradition: "Islã (Sufismo)",
    category: "A",
    description: "Poeta místico sufi que expressou os mais profundos estados de êxtase espiritual através de sua poesia.",
    period: "1207-1273",
    characteristics: ["Êxtase místico", "Poesia divina", "Dança espiritual"],
    teachings: ["Amor místico", "União com o divino", "Auto-obliteração"],
    missionTypes: ["Poesia", "Dança contemplativa", "Amor universal", "Celebração"],
    icon: "☪️",
    quote: "O que procuras está procurando por você.",
    material: "Poemas de Rumi, biografia, contexto histórico",
    rarity: "Raro"
  },
  
  // Categoria B (Místicos e Ocultistas)
  {
    id: "helena-blavatsky",
    name: "Helena Blavatsky",
    tradition: "Teosofia",
    category: "B",
    description: "Fundadora da Sociedade Teosófica que ajudou a introduzir conceitos orientais no ocidente.",
    period: "1831-1891",
    characteristics: ["Conhecimento universal", "Síntese espiritual", "Mediunidade"],
    teachings: ["Doutrina Secreta", "Ísis sem Véu", "Sabedoria antiga"],
    missionTypes: ["Estudo comparativo", "Decifração de símbolos", "Meditação teosófica"],
    icon: "🔮",
    material: "Obras principais, biografia, contexto histórico",
    rarity: "Incomum"
  },
  {
    id: "carl-jung",
    name: "Carl Jung",
    tradition: "Psicologia Analítica/Gnosticismo",
    category: "B",
    description: "Psicólogo e alquimista psicológico que explorou o inconsciente coletivo e a integração dos opostos.",
    period: "1875-1961",
    characteristics: ["Integração de opostos", "Individuação", "Simbolismo"],
    teachings: ["Inconsciente coletivo", "Arquétipos", "Alquimia psicológica"],
    missionTypes: ["Trabalho com sonhos", "Integração da sombra", "Ativo-imaginação"],
    icon: "🧠",
    quote: "Aquele que olha para fora, sonha; aquele que olha para dentro, desperta.",
    material: "Obras principais, Livro Vermelho, estudos junguianos",
    rarity: "Incomum"
  },
  
  // Categoria C (Sábios e Instrutores)
  {
    id: "alan-watts",
    name: "Alan Watts",
    tradition: "Zen/Taoísmo Ocidentalizado",
    category: "C",
    description: "Filósofo que popularizou as filosofias orientais no ocidente com clareza e humor.",
    period: "1915-1973",
    characteristics: ["Clareza explicativa", "Humor", "Tradução cultural"],
    teachings: ["Integração oriente-ocidente", "Não-dualidade", "Filosofia prática"],
    missionTypes: ["Contemplação zen", "Questionamento filosófico", "Integração cultural"],
    icon: "📚",
    material: "Obras principais, gravações de palestras",
    rarity: "Comum"
  },
  {
    id: "thich-nhat-hanh",
    name: "Thich Nhat Hanh",
    tradition: "Budismo Zen Engajado",
    category: "C",
    description: "Monge zen vietnamita que ensinou atenção plena e paz ativa no contexto contemporâneo.",
    period: "1926-2022",
    characteristics: ["Simplicidade", "Presença", "Paz ativa"],
    teachings: ["Atenção plena", "Respiração consciente", "Engajamento social"],
    missionTypes: ["Meditação caminhando", "Prática de presença", "Amor-bondade"],
    icon: "🧘‍♂️",
    quote: "A paz está em cada passo. O objetivo é o próprio caminho.",
    material: "Obras principais, contexto histórico",
    rarity: "Comum"
  },
  {
    id: "ram-dass",
    name: "Ram Dass (Richard Alpert)",
    tradition: "Hinduísmo Ocidentalizado/Bhakti",
    category: "C",
    description: "Professor de Harvard que se tornou mestre espiritual, integrando práticas orientais ao contexto ocidental.",
    period: "1931-2019",
    characteristics: ["Transformação pessoal", "Devoção", "Acessibilidade"],
    teachings: ["Be Here Now", "Serviço", "Jnana e Bhakti yoga"],
    missionTypes: ["Prática de presença", "Devoção", "Serviço compassivo"],
    icon: "🧠",
    quote: "O único lugar onde você pode encontrar força é no momento presente.",
    material: "Obras principais, palestras, biografia",
    rarity: "Comum"
  }
];

