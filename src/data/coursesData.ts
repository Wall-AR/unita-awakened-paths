
export interface Course {
  id: string;
  title: string;
  tradition: string;
  description: string;
  icon: string;
  duration: string;
  lessons: number;
  modules?: number;
  level: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isFree?: boolean; 
  premium?: boolean;
  prerequisites?: string[];
  skills?: string[];
  coverImage?: string;
  path: string;
  material?: string;
  mainMasters?: string[];
}

// Helper categories
const LEVEL_BEGINNER = "Iniciante";
const LEVEL_INTERMEDIATE = "Intermediário";
const LEVEL_ADVANCED = "Avançado";
const LEVEL_BEGINNER_INTERMEDIATE = "Iniciante/Intermediário";
const LEVEL_INTERMEDIATE_ADVANCED = "Intermediário/Avançado";

export const courses: Course[] = [
  // Tradição Abraâmica
  {
    id: "biblia-revelada",
    title: "A Bíblia Revelada: Para Além do Véu",
    tradition: "Cristianismo Esotérico",
    description: "Uma jornada além dos significados literais dos textos bíblicos, revelando suas camadas esotéricas e aplicação transformadora.",
    icon: "📜",
    duration: "24-30 horas",
    lessons: 32,
    modules: 8,
    level: LEVEL_BEGINNER_INTERMEDIATE,
    isFeatured: true,
    isFree: true,
    premium: false,
    path: "Tradição Abraâmica",
    material: "Bíblia Sagrada, textos apócrifos, material sobre interpretação cabalística da Bíblia",
    mainMasters: ["Jesus Cristo", "Moisés", "Teresa de Ávila"],
    skills: ["Interpretação Simbólica", "Meditação Contemplativa", "Compreensão Contextual"]
  },
  {
    id: "cabala-mistica",
    title: "A Cabala Mística: A Árvore da Vida",
    tradition: "Cabala",
    description: "Navegue pela estrutura da Árvore Sefirótica como um mapa do cosmos e da psique humana.",
    icon: "✡️",
    duration: "20-24 horas",
    lessons: 24,
    level: LEVEL_INTERMEDIATE_ADVANCED,
    isFree: false,
    premium: true,
    path: "Tradição Abraâmica",
    material: "\"A Cabala Mística\" de Dion Fortune, textos do Zohar, Sefer Yetzirah",
    mainMasters: ["Moisés", "Dion Fortune"],
    skills: ["Compreensão das Sefirot", "Meditação Cabalística", "Correspondências Simbólicas"]
  },
  {
    id: "misticismo-cristao",
    title: "Misticismo Cristão: De Jesus aos Místicos Medievais",
    tradition: "Cristianismo Místico",
    description: "Explore a dimensão contemplativa e mística do cristianismo, de Jesus aos grandes místicos medievais.",
    icon: "✝️",
    duration: "18-22 horas",
    lessons: 20,
    level: LEVEL_INTERMEDIATE,
    path: "Tradição Abraâmica",
    material: "Textos de místicos cristãos como Mestre Eckhart, São João da Cruz, Teresa de Ávila",
    mainMasters: ["Jesus Cristo", "Teresa de Ávila", "São Francisco de Assis"],
    skills: ["Oração Contemplativa", "Teologia Negativa", "União Mística"]
  },
  {
    id: "sufismo",
    title: "Sufismo: O Caminho do Coração",
    tradition: "Sufismo",
    description: "Descubra o caminho místico do Islã através da poesia, dança e práticas contemplativas do sufismo.",
    icon: "☪️",
    duration: "16-20 horas",
    lessons: 18,
    level: LEVEL_INTERMEDIATE,
    isNew: true,
    path: "Tradição Abraâmica",
    material: "Textos de Rumi, Ibn 'Arabi, Hazrat Inayat Khan",
    mainMasters: ["Rumi"],
    skills: ["Dhikr (Lembrança)", "Contemplação", "Poesia Mística", "Dança Espiritual"]
  },
  
  // Tradição Hermética
  {
    id: "caibalion",
    title: "O Caibalion: Os Sete Princípios Herméticos",
    tradition: "Hermetismo",
    description: "Explore os sete princípios universais do hermetismo e sua aplicação prática na transformação pessoal.",
    icon: "⚖️",
    duration: "16-20 horas",
    lessons: 21,
    level: LEVEL_BEGINNER_INTERMEDIATE,
    isFeatured: true,
    path: "Tradição Hermética",
    material: "\"O Caibalion\", textos herméticos complementares, Corpus Hermeticum",
    mainMasters: ["Hermes Trismegisto"],
    skills: ["Mentalismo", "Correspondência", "Vibração", "Polaridade", "Ritmo", "Causa e Efeito", "Gênero"]
  },
  {
    id: "alquimia-ocidental",
    title: "Alquimia Ocidental: Da Matéria ao Espírito",
    tradition: "Alquimia",
    description: "Transforme o chumbo em ouro através dos processos alquímicos aplicados à consciência.",
    icon: "⚗️",
    duration: "18-22 horas",
    lessons: 24,
    level: LEVEL_ADVANCED,
    path: "Tradição Hermética",
    material: "Textos de Paracelso, Nicolas Flamel, material sobre simbolismo alquímico",
    mainMasters: ["Hermes Trismegisto", "Saint Germain"],
    skills: ["Calcinação", "Dissolução", "Separação", "Conjunção", "Fermentação", "Destilação", "Coagulação"]
  },
  {
    id: "tabua-esmeralda",
    title: "A Tábua de Esmeralda e seus Segredos",
    tradition: "Hermetismo",
    description: "Estudo aprofundado do texto hermético fundamental e suas aplicações práticas e filosóficas.",
    icon: "📋",
    duration: "14-16 horas",
    lessons: 15,
    level: LEVEL_INTERMEDIATE,
    path: "Tradição Hermética",
    material: "Traduções da Tábua de Esmeralda, comentários históricos",
    mainMasters: ["Hermes Trismegisto"],
    skills: ["Interpretação Simbólica", "Princípios Herméticos", "Alquimia Filosófica"]
  },
  
  // Tradição Oriental
  {
    id: "voz-silencio",
    title: "A Voz do Silêncio: Sabedoria Além das Palavras",
    tradition: "Budismo Esotérico",
    description: "Uma exploração dos ensinamentos do Budismo Mahayana e sua aplicação prática na vida moderna.",
    icon: "☸️",
    duration: "16-20 horas",
    lessons: 18,
    level: LEVEL_INTERMEDIATE,
    path: "Tradição Oriental",
    material: "\"A Voz do Silêncio\" de H.P. Blavatsky, textos originais budistas",
    mainMasters: ["Buda", "Helena Blavatsky"],
    skills: ["Meditação Mindfulness", "Compaixão (Metta)", "Impermanência", "Não-eu"]
  },
  {
    id: "vedanta",
    title: "Vedanta: O Conhecimento Supremo",
    tradition: "Vedanta",
    description: "Mergulhe nos ensinamentos essenciais dos Upanishads sobre a natureza da consciência e da realidade.",
    icon: "🕉️",
    duration: "20-24 horas",
    lessons: 22,
    level: LEVEL_INTERMEDIATE,
    path: "Tradição Oriental",
    material: "Upanishads, Bhagavad Gita, textos de Vivekananda e Ramakrishna",
    mainMasters: ["Krishna", "Sri Aurobindo"],
    skills: ["Meditação Védica", "Auto-Indagação", "Compreensão do Não-Dualismo"]
  },
  {
    id: "tao-te-ching",
    title: "Tao Te Ching: O Caminho do Meio",
    tradition: "Taoísmo",
    description: "Descubra o caminho do Tao através do princípio do Wu-Wei e da harmonia com os ciclos naturais.",
    icon: "☯️",
    duration: "14-18 horas",
    lessons: 16,
    level: LEVEL_BEGINNER_INTERMEDIATE,
    path: "Tradição Oriental",
    material: "Tao Te Ching, I Ching, comentários de mestres taoistas",
    mainMasters: ["Lao Tsé"],
    skills: ["Wu-Wei (Não-ação)", "Equilíbrio Yin-Yang", "Simplicidade", "Flexibilidade"]
  },
  
  // Tradição Egípcia
  {
    id: "livro-mortos",
    title: "O Livro dos Mortos: Jornada da Alma",
    tradition: "Egípcia",
    description: "Explore o caminho da alma após a morte segundo a tradição egípcia e seus ensinamentos simbólicos.",
    icon: "☥",
    duration: "16-20 horas",
    lessons: 18,
    level: LEVEL_INTERMEDIATE,
    path: "Tradição Egípcia",
    material: "Traduções do Livro Egípcio dos Mortos, material sobre mitologia egípcia",
    mainMasters: ["Hermes Trismegisto"],
    skills: ["Navegação do Mundo Inferior", "Rituais de Transição", "Simbologia Sagrada"]
  },

  // Exemplos de cursos das outras tradições...
  {
    id: "dogma-ritual",
    title: "Dogma e Ritual da Alta Magia",
    tradition: "Magia Ocidental",
    description: "Estudo dos princípios e práticas da alta magia cerimonial seguindo a tradição de Eliphas Levi.",
    icon: "⭐",
    duration: "24-30 horas",
    lessons: 28,
    level: LEVEL_ADVANCED,
    path: "Tradição Ocidental Moderna",
    material: "\"Dogma e Ritual da Alta Magia\" de Eliphas Levi",
    mainMasters: ["Eliphas Levi"],
    skills: ["Ritual Mágico", "Simbolismo Ocultista", "Desenvolvimento da Vontade"]
  },
  
  // Cursos integradores
  {
    id: "sobrenatural",
    title: "Como se Tornar Sobrenatural",
    tradition: "Ciência e Espiritualidade",
    description: "Integração de neurociência moderna com práticas meditativas para transformação pessoal profunda.",
    icon: "🧠",
    duration: "20-24 horas",
    lessons: 21,
    level: LEVEL_BEGINNER_INTERMEDIATE,
    isNew: true,
    isFeatured: true,
    path: "Caminhos Integradores",
    material: "\"Como se Tornar Sobrenatural\" de Joe Dispenza, pesquisas neurocientíficas",
    skills: ["Meditação Baseada em Ciência", "Reprogramação Neural", "Estados Elevados de Consciência"]
  }
];

