
export interface Course {
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
  prerequisites?: string[];
  skills?: string[];
  coverImage?: string;
}

export const courses: Course[] = [
  {
    title: "A Bíblia Revelada: Para Além do Véu",
    tradition: "Cristianismo Esotérico",
    description: "Uma jornada além dos significados literais dos textos bíblicos, revelando suas camadas esotéricas e aplicação transformadora.",
    icon: "📜",
    duration: "24-30 horas",
    lessons: 32,
    modules: 8,
    level: "Todos os Níveis",
    isFeatured: true,
    skills: ["Interpretação Simbólica", "Meditação Contemplativa", "Compreensão Contextual"]
  },
  {
    title: "O Caibalion: As Sete Leis Herméticas",
    tradition: "Hermetismo",
    description: "Explore os sete princípios universais do hermetismo e sua aplicação prática na transformação pessoal.",
    icon: "⚖️",
    duration: "16-20 horas",
    lessons: 21,
    level: "Intermediário",
    skills: ["Mentalismo", "Correspondência", "Vibração", "Polaridade", "Ritmo", "Causa e Efeito", "Gênero"]
  },
  {
    title: "A Árvore da Vida: Mapa da Consciência",
    tradition: "Cabala",
    description: "Navegue pela estrutura da Árvore Sefirótica como um mapa do cosmos e da psique humana.",
    icon: "✡️",
    duration: "20-24 horas",
    lessons: 24,
    level: "Intermediário",
    skills: ["Compreensão das Sefirot", "Meditação Cabalística", "Correspondências Simbólicas"]
  },
  {
    title: "Alquimia Interior: A Grande Obra",
    tradition: "Alquimia",
    description: "Transforme o chumbo em ouro através dos processos alquímicos aplicados à consciência.",
    icon: "⚗️",
    duration: "18-22 horas",
    lessons: 24,
    level: "Intermediário-Avançado",
    skills: ["Calcinação", "Dissolução", "Separação", "Conjunção", "Fermentação", "Destilação", "Coagulação"]
  },
  {
    title: "A Voz do Silêncio: Caminho Interior do Budismo",
    tradition: "Budismo",
    description: "Uma exploração dos ensinamentos do Budismo Mahayana e sua aplicação prática na vida moderna.",
    icon: "☸️",
    duration: "16-20 horas",
    lessons: 18,
    level: "Todos os Níveis",
    skills: ["Meditação Mindfulness", "Compaixão (Metta)", "Impermanência", "Não-eu"]
  },
  {
    title: "Introdução à Gnose: O Conhecimento Libertador",
    tradition: "Gnosticismo",
    description: "Explore os fundamentos do pensamento gnóstico e sua visão transformadora da existência.",
    icon: "🕊️",
    duration: "12-16 horas",
    lessons: 15,
    level: "Iniciante",
    isNew: true,
    skills: ["Compreensão dos Arquétipos", "Simbolismo Gnóstico", "Auto-observação"]
  },
  {
    title: "O Tao e o Fluxo Natural da Vida",
    tradition: "Taoísmo",
    description: "Descubra o caminho do Tao através do princípio do Wu-Wei e da harmonia com os ciclos naturais.",
    icon: "☯️",
    duration: "14-18 horas",
    lessons: 16,
    level: "Todos os Níveis",
    skills: ["Wu-Wei (Não-ação)", "Equilíbrio Yin-Yang", "Simplicidade", "Flexibilidade"]
  },
  {
    title: "Upanishads: A Sabedoria Védica",
    tradition: "Vedanta",
    description: "Mergulhe nos ensinamentos essenciais dos Upanishads sobre a natureza da consciência e da realidade.",
    icon: "🕉️",
    duration: "20-24 horas",
    lessons: 22,
    level: "Intermediário",
    skills: ["Meditação Védica", "Auto-Indagação", "Compreensão do Não-Dualismo"]
  },
  {
    title: "O Livro da Jornada Interior",
    tradition: "Sufi",
    description: "Viaje pelos estágios da alma no caminho sufi do amor e do conhecimento direto de Deus.",
    icon: "☪️",
    duration: "16-20 horas",
    lessons: 18,
    level: "Intermediário",
    isNew: true,
    skills: ["Dhikr (Lembrança)", "Contemplação", "Poesia Mística", "Dança Espiritual"]
  }
];
