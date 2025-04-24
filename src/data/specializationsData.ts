
export interface SpecializationPath {
  id: string;
  name: string;
  description: string;
  focus: string[];
  development: string[];
  attributes: string[];
  recommendedCourses: string[];
  affinityMasters: string[];
  icon: string;
  color: string;
}

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
    color: "blue"
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
    color: "purple"
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
    color: "amber"
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
    color: "green"
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
    color: "indigo"
  }
];

