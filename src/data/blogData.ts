
export interface BlogPost {
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  icon: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "A Linguagem dos Símbolos Sagrados",
    author: "Rafael Santos",
    date: "3 de Abril de 2025",
    category: "Simbologia",
    excerpt: "Como interpretar e compreender os símbolos universais encontrados nas diversas tradições espirituais.",
    icon: "⚛"
  },
  {
    title: "Meditação para Iniciantes: Um Guia Prático",
    author: "Ana Luz",
    date: "28 de Março de 2025",
    category: "Meditação & Práticas",
    excerpt: "Técnicas simples e eficazes para começar uma prática meditativa consistente no mundo moderno.",
    icon: "☯"
  },
  {
    title: "Os Evangelhos Gnósticos e Sua Relevância Atual",
    author: "Lucas Herrera",
    date: "15 de Março de 2025",
    category: "Cristianismo Esotérico",
    excerpt: "Uma análise dos textos gnósticos de Nag Hammadi e suas perspectivas únicas sobre a mensagem cristã.",
    icon: "✝"
  },
  {
    title: "Árvore da Vida: Navegando pelos Caminhos da Cabala",
    author: "Sofia Mendes",
    date: "2 de Março de 2025",
    category: "Cabala",
    excerpt: "Um guia introdutório ao sistema cabalístico e sua aplicação como mapa da consciência humana.",
    icon: "✡"
  },
  {
    title: "As Quatro Nobres Verdades: Fundamentos do Budismo",
    author: "Miguel Costa",
    date: "20 de Fevereiro de 2025",
    category: "Budismo",
    excerpt: "Explorando os ensinamentos fundamentais de Buda e sua aplicação para o alívio do sofrimento.",
    icon: "☸"
  },
  {
    title: "Alquimia Interior: Transformando Chumbo em Ouro",
    author: "Clara Oliveira",
    date: "5 de Fevereiro de 2025",
    category: "Hermetismo",
    excerpt: "Um guia prático para a compreensão da alquimia como processo de transformação pessoal.",
    icon: "⚗"
  }
];
