import { Course } from "@/types/course";

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
    pathName: "Tradição Abraâmica",
    material: "Bíblia Sagrada, textos apócrifos, material sobre interpretação cabalística da Bíblia",
    mainMasterIds: ["jesus", "unknown-moises", "teresa-avila"],
    skills: ["Interpretação Simbólica", "Meditação Contemplativa", "Compreensão Contextual"],
    accessLevel: 'free',
    isFeaturedFree: true,
    structure: {
      levels: [{
        id: "br-l1", name: "Introdução e Fundamentos", description: "Entendendo o esoterismo bíblico.", 
        modules: [{
          id: "br-l1-m1", name: "O Véu Literal", description: "Desafios da interpretação literal.",
          lessons: [
            { id: "br-l1-m1-les1", title: "Introdução ao Esoterismo Bíblico", description: "O que é?", duration: "30 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free' },
            { id: "br-l1-m1-les2", title: "A Linguagem Simbólica", description: "Chaves de interpretação.", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free' },
          ]
        }]
      }]
    },
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
    pathName: "Tradição Abraâmica",
    material: "\"A Cabala Mística\" de Dion Fortune, textos do Zohar, Sefer Yetzirah",
    mainMasterIds: ["unknown-moises", "unknown-dion-fortune"],
    skills: ["Compreensão das Sefirot", "Meditação Cabalística", "Correspondências Simbólicas"],
    accessLevel: 'initiate',
    structure: {
      levels: [{
        id: "cm-l1", name: "Fundamentos da Cabala", description: "Introdução à Árvore da Vida.",
        modules: [{
          id: "cm-l1-m1", name: "As Sefirot", description: "Explorando as 10 emanações.",
          lessons: [
            { id: "cm-l1-m1-les1", title: "Introdução à Árvore da Vida", description: "O que é?", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free' },
            { id: "cm-l1-m1-les2", title: "Kether: A Coroa", description: "A primeira Sefirah.", duration: "60 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'initiate' },
            { id: "cm-l1-m1-les3", title: "Chokmah: Sabedoria", description: "A segunda Sefirah.", duration: "60 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'initiate' },
          ]
        }]
      }]
    },
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
    pathName: "Tradição Abraâmica",
    material: "Textos de místicos cristãos como Mestre Eckhart, São João da Cruz, Teresa de Ávila",
    mainMasterIds: ["jesus", "teresa-avila", "unknown-sao-francisco-de-assis"],
    skills: ["Oração Contemplativa", "Teologia Negativa", "União Mística"],
    accessLevel: 'seeker',
    structure: {
      levels: [{
        id: "mc-l1", name: "O Coração do Misticismo", description: "Entendendo a experiência mística.",
        modules: [{
          id: "mc-l1-m1", name: "Raízes Místicas", description: "Jesus e os primeiros cristãos.",
          lessons: [
            { id: "mc-l1-m1-les1", title: "O que é Misticismo Cristão?", description: "Definições e abordagens.", duration: "40 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free' },
            { id: "mc-l1-m1-les2", title: "A Via Negativa", description: "Conhecendo Deus pelo que Ele não é.", duration: "50 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'seeker' },
          ]
        }]
      }]
    },
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
    pathName: "Tradição Abraâmica",
    material: "Textos de Rumi, Ibn 'Arabi, Hazrat Inayat Khan",
    mainMasterIds: ["rumi"],
    skills: ["Dhikr (Lembrança)", "Contemplação", "Poesia Mística", "Dança Espiritual"],
    accessLevel: 'seeker',
    structure: {
        levels: [{
          id: "suf-l1", name: "Introdução ao Sufismo", description: "Princípios e mestres.",
          modules: [{
            id: "suf-l1-m1", name: "O Amor Divino", description: "A essência do caminho sufi.",
            lessons: [
              { id: "suf-l1-m1-les1", title: "O que é Sufismo?", description: "Origens e filosofia.", duration: "40 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free' },
              { id: "suf-l1-m1-les2", title: "Rumi e a Poesia do Êxtase", description: "Explorando os poemas de Rumi.", duration: "50 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'seeker' },
            ]
          }]
        }]
      },
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
    pathName: "Tradição Hermética",
    material: "\"O Caibalion\", textos herméticos complementares, Corpus Hermeticum",
    mainMasterIds: ["hermes"],
    skills: ["Mentalismo", "Correspondência", "Vibração", "Polaridade", "Ritmo", "Causa e Efeito", "Gênero"],
    accessLevel: 'free',
    structure: {
        levels: [{
          id: "caib-l1", name: "Princípios Fundamentais", description: "Entendendo as leis universais.",
          modules: [{
            id: "caib-l1-m1", name: "Os Sete Princípios", description: "Visão geral.",
            lessons: [
              { id: "caib-l1-m1-les1", title: "Introdução ao Hermetismo", description: "Origens e O Caibalion.", duration: "30 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free' },
              { id: "caib-l1-m1-les2", title: "O Princípio do Mentalismo", description: "O Todo é Mente.", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free' },
            ]
          }]
        }]
      },
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
    pathName: "Tradição Hermética",
    material: "Textos de Paracelso, Nicolas Flamel, material sobre simbolismo alquímico",
    mainMasterIds: ["hermes", "unknown-saint-germain"],
    skills: ["Calcinação", "Dissolução", "Separação", "Conjunção", "Fermentação", "Destilação", "Coagulação"],
    accessLevel: 'adept',
    structure: {
        levels: [{
          id: "alq-l1", name: "A Grande Obra", description: "Introdução à Alquimia.",
          modules: [{
            id: "alq-l1-m1", name: "Princípios e Símbolos", description: "Linguagem alquímica.",
            lessons: [
              { id: "alq-l1-m1-les1", title: "O que é Alquimia?", description: "História e filosofia.", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free' },
              { id: "alq-l1-m1-les2", title: "Solve et Coagula", description: "O lema alquímico.", duration: "60 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'adept' },
            ]
          }]
        }]
      },
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
    pathName: "Tradição Hermética",
    material: "Traduções da Tábua de Esmeralda, comentários históricos",
    mainMasterIds: ["hermes"],
    skills: ["Interpretação Simbólica", "Princípios Herméticos", "Alquimia Filosófica"],
    accessLevel: 'initiate',
    structure: {
        levels: [{
          id: "te-l1", name: "Desvendando a Tábua", description: "Análise do texto.",
          modules: [{
            id: "te-l1-m1", name: "Verso a Verso", description: "Interpretação.",
            lessons: [
              { id: "te-l1-m1-les1", title: "Origens da Tábua de Esmeralda", description: "Lendas e fatos.", duration: "40 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free' },
              { id: "te-l1-m1-les2", title: "\"O que está embaixo é como o que está em cima\"", description: "Primeiro princípio.", duration: "50 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'initiate' },
            ]
          }]
        }]
      },
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
    pathName: "Tradição Oriental",
    material: "\"A Voz do Silêncio\" de H.P. Blavatsky, textos originais budistas",
    mainMasterIds: ["buda", "helena-blavatsky"],
    skills: ["Meditação Mindfulness", "Compaixão (Metta)", "Impermanência", "Não-eu"],
    accessLevel: 'seeker',
     structure: {
        levels: [{ id: "vs-l1", name: "Fundamentos", modules: [{ id: "vs-l1-m1", name: "Introdução", lessons: [
            { id: "vs-l1-m1-les1", title: "A Sabedoria do Silêncio", duration: "30 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Descobrindo a voz interior." },
            { id: "vs-l1-m1-les2", title: "Os Dois Caminhos", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'seeker', description:"O caminho do olho e o caminho do coração." },
        ]}]}]
      },
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
    pathName: "Tradição Oriental",
    material: "Upanishads, Bhagavad Gita, textos de Vivekananda e Ramakrishna",
    mainMasterIds: ["unknown-krishna", "unknown-sri-aurobindo"],
    skills: ["Meditação Védica", "Auto-Indagação", "Compreensão do Não-Dualismo"],
    accessLevel: 'initiate',
    structure: {
        levels: [{ id: "ved-l1", name: "Introdução ao Vedanta", modules: [{ id: "ved-l1-m1", name: "Princípios", lessons: [
            { id: "ved-l1-m1-les1", title: "O que é Vedanta?", duration: "40 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Filosofia e origens." },
            { id: "ved-l1-m1-les2", title: "Atman e Brahman", duration: "50 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'initiate', description:"A alma individual e o absoluto." },
        ]}]}]
      },
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
    pathName: "Tradição Oriental",
    material: "Tao Te Ching, I Ching, comentários de mestres taoistas",
    mainMasterIds: ["lao-tse"],
    skills: ["Wu-Wei (Não-ação)", "Equilíbrio Yin-Yang", "Simplicidade", "Flexibilidade"],
    accessLevel: 'free',
    isFeaturedFree: true,
    structure: {
        levels: [{ id: "tao-l1", name: "O Caminho e sua Virtude", modules: [{ id: "tao-l1-m1", name: "Introdução ao Tao", lessons: [
            { id: "tao-l1-m1-les1", title: "O Tao que pode ser nomeado", duration: "30 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Entendendo o inefável." },
            { id: "tao-l1-m1-les2", title: "Wu Wei: A Não-Ação", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Agir sem esforço." },
        ]}]}]
      },
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
    pathName: "Tradição Egípcia",
    material: "Traduções do Livro Egípcio dos Mortos, material sobre mitologia egípcia",
    mainMasterIds: ["hermes"], // Thoth é associado a Hermes
    skills: ["Navegação do Mundo Inferior", "Rituais de Transição", "Simbologia Sagrada"],
    accessLevel: 'initiate',
    structure: {
        levels: [{ id: "lm-l1", name: "A Jornada Póstuma", modules: [{ id: "lm-l1-m1", name: "Ritos e Encantamentos", lessons: [
            { id: "lm-l1-m1-les1", title: "Introdução ao Livro dos Mortos", duration: "40 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Origens e propósito." },
            { id: "lm-l1-m1-les2", title: "A Pesagem do Coração", duration: "50 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'initiate', description:"O julgamento de Osíris." },
        ]}]}]
      },
  },

  // Magia Ocidental
  {
    id: "dogma-ritual",
    title: "Dogma e Ritual da Alta Magia",
    tradition: "Magia Ocidental",
    description: "Estudo dos princípios e práticas da alta magia cerimonial seguindo a tradição de Eliphas Levi.",
    icon: "⭐",
    duration: "24-30 horas",
    lessons: 28,
    level: LEVEL_ADVANCED,
    pathName: "Tradição Ocidental Moderna",
    material: "\"Dogma e Ritual da Alta Magia\" de Eliphas Levi",
    mainMasterIds: ["unknown-eliphas-levi"],
    skills: ["Ritual Mágico", "Simbolismo Ocultista", "Desenvolvimento da Vontade"],
    accessLevel: 'adept',
    structure: {
        levels: [{ id: "dr-l1", name: "Fundamentos da Alta Magia", modules: [{ id: "dr-l1-m1", name: "Dogma", lessons: [
            { id: "dr-l1-m1-les1", title: "O que é Alta Magia?", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Introdução aos conceitos de Eliphas Levi." },
            { id: "dr-l1-m1-les2", title: "O Ternário", duration: "60 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'adept', description:"Princípios fundamentais." },
        ]}]}]
      },
  },

  // Caminhos Integradores
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
    pathName: "Caminhos Integradores",
    material: "\"Como se Tornar Sobrenatural\" de Joe Dispenza, pesquisas neurocientíficas",
    mainMasterIds: ["unknown-joe-dispenza"],
    skills: ["Meditação Baseada em Ciência", "Reprogramação Neural", "Estados Elevados de Consciência"],
    accessLevel: 'seeker',
    structure: {
        levels: [{ id: "sn-l1", name: "A Ciência da Transformação", modules: [{ id: "sn-l1-m1", name: "Entendendo sua Mente", lessons: [
            { id: "sn-l1-m1-les1", title: "Você é o Placebo", duration: "40 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"O poder da mente sobre a matéria." },
            { id: "sn-l1-m1-les2", title: "Meditação e Ondas Cerebrais", duration: "50 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'seeker', description:"Acessando estados alterados." },
        ]}]}]
      },
  },
  
  // Placeholder Courses Updated
  {
    id: "unknown-zen-alem-da-mente-dualista",
    title: "Zen: Além da Mente Dualista",
    tradition: "Zen Budismo",
    description: "Explore a prática Zen para transcender a dualidade e encontrar a clareza no momento presente.",
    icon: "🧘",
    duration: "18-22 horas",
    lessons: 20,
    level: LEVEL_INTERMEDIATE,
    pathName: "Tradição Oriental",
    skills: ["Zazen", "Koans", "Mindfulness"],
    prerequisites: [],
    mainMasterIds: ["unknown-bodhidharma"],
    accessLevel: 'purchase',
    oneTimePurchasePrice: 29.99,
    structure: {
        levels: [{ id: "zen-l1", name: "Introdução ao Zen", modules: [{ id: "zen-l1-m1", name: "A Mente Zen", lessons: [
            { id: "zen-l1-m1-les1", title: "O que é Zen?", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Princípios e história." },
            { id: "zen-l1-m1-les2", title: "Zazen: A Prática da Meditação Sentada", duration: "60 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'purchase', description:"Instruções e postura." },
        ]}]}]
      },
  },
  {
    id: "unknown-mitos-misterios-egito",
    title: "Mitos e Mistérios do Antigo Egito",
    tradition: "Egípcia",
    description: "Desvende os segredos dos deuses, deusas e rituais sagrados do Egito Antigo.",
    icon: "🏺",
    duration: "20-24 horas",
    lessons: 22,
    level: LEVEL_INTERMEDIATE,
    pathName: "Tradição Egípcia",
    skills: ["Mitologia Egípcia", "Simbologia", "História Antiga"],
    prerequisites: [],
    mainMasterIds: ["hermes"],
    accessLevel: 'initiate',
    structure: {
        levels: [{ id: "mme-l1", name: "Panteão Egípcio", modules: [{ id: "mme-l1-m1", name: "Deuses e Deusas", lessons: [
            { id: "mme-l1-m1-les1", title: "Introdução à Mitologia Egípcia", duration: "40 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Cosmogonia e principais divindades." },
            { id: "mme-l1-m1-les2", title: "Osíris, Ísis e Hórus", duration: "50 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'initiate', description:"O mito central." },
        ]}]}]
      },
  },
  {
    id: "unknown-teosofia-sabedoria-divina",
    title: "Teosofia: A Sabedoria Divina",
    tradition: "Teosofia",
    description: "Explore os ensinamentos teosóficos sobre a natureza do cosmos, da humanidade e do divino.",
    icon: "🌐",
    duration: "22-26 horas",
    lessons: 25,
    level: LEVEL_INTERMEDIATE_ADVANCED,
    pathName: "Tradição Ocidental Moderna",
    skills: ["Cosmogênese", "Antropogênese", "Hierarquias Espirituais"],
    prerequisites: [],
    mainMasterIds: ["helena-blavatsky"],
    accessLevel: 'adept',
    structure: {
        levels: [{ id: "teo-l1", name: "Princípios Teosóficos", modules: [{ id: "teo-l1-m1", name: "Doutrina Secreta", lessons: [
            { id: "teo-l1-m1-les1", title: "O que é Teosofia?", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Introdução à Sociedade Teosófica e H.P. Blavatsky." },
            { id: "teo-l1-m1-les2", title: "Os Três Princípios Fundamentais", duration: "60 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'adept', description:"Base da cosmologia teosófica." },
        ]}]}]
      },
  },
  {
    id: "unknown-rosacrucianismo-caminho",
    title: "Rosacrucianismo: O Caminho da Rosa e da Cruz",
    tradition: "Rosacrucianismo",
    description: "Descubra os mistérios e a filosofia da tradição Rosacruz.",
    icon: "🌹",
    duration: "18-22 horas",
    lessons: 20,
    level: LEVEL_INTERMEDIATE,
    pathName: "Tradição Ocidental Moderna",
    skills: ["Filosofia Rosacruz", "Misticismo Ocidental", "Alquimia Espiritual"],
    prerequisites: [],
    mainMasterIds: ["unknown-christian-rosenkreuz"],
    accessLevel: 'initiate',
    structure: {
        levels: [{ id: "rosa-l1", name: "Introdução ao Rosacrucianismo", modules: [{ id: "rosa-l1-m1", name: "Manifestos", lessons: [
            { id: "rosa-l1-m1-les1", title: "Origens Históricas e Lendárias", duration: "40 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"A Fraternidade da Rosa Cruz." },
            { id: "rosa-l1-m1-les2", title: "Os Manifestos Rosacruzes", duration: "50 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'initiate', description:"Fama Fraternitatis, Confessio Fraternitatis, Núpcias Químicas." },
        ]}]}]
      },
  },
  {
    id: "unknown-cozinha-bruxa",
    title: "A Cozinha da Bruxa: Ervas e Rituais",
    tradition: "Xamanismo/Paganismo",
    description: "Aprenda a usar ervas mágicas e rituais na cozinha para cura, proteção e manifestação.",
    icon: "🌿",
    duration: "12-16 horas",
    lessons: 15,
    level: LEVEL_BEGINNER,
    pathName: "Tradição Xamânica e Pagã",
    skills: ["Herbalismo Mágico", "Culinária Ritualística", "Magia Natural"],
    prerequisites: [],
    mainMasterIds: ["unknown-starhawk"], // Example master, could be a generic "Herbalist Elder"
    accessLevel: 'free',
    structure: {
        levels: [{ id: "cb-l1", name: "Magia na Cozinha", modules: [{ id: "cb-l1-m1", name: "Ervas e Intenções", lessons: [
            { id: "cb-l1-m1-les1", title: "Introdução à Cozinha Mágica", duration: "30 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"O sagrado no cotidiano." },
            { id: "cb-l1-m1-les2", title: "Correspondências Herbais Básicas", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Propriedades mágicas de ervas comuns." },
        ]}]}]
      },
  },
  {
    id: "unknown-xamanismo-global",
    title: "Xamanismo Global: Técnicas de Êxtase",
    tradition: "Xamanismo",
    description: "Explore as diversas práticas xamânicas ao redor do mundo e suas técnicas para alcançar estados alterados de consciência.",
    icon: "🥁",
    duration: "20-24 horas",
    lessons: 22,
    level: LEVEL_INTERMEDIATE,
    pathName: "Tradição Xamânica e Pagã",
    skills: ["Jornada Xamânica", "Recuperação da Alma", "Trabalho com Animais de Poder"],
    prerequisites: [],
    mainMasterIds: ["unknown-mircea-eliade"], // Example, could be a generic "Global Shaman"
    accessLevel: 'seeker',
    structure: {
        levels: [{ id: "xg-l1", name: "O Mundo do Xamã", modules: [{ id: "xg-l1-m1", name: "Viagens e Aliados", lessons: [
            { id: "xg-l1-m1-les1", title: "O que é Xamanismo?", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"Visão geral e conceitos fundamentais." },
            { id: "xg-l1-m1-les2", title: "A Jornada Xamânica", duration: "60 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'seeker', description:"Técnicas e mundos." },
        ]}]}]
      },
  },
  {
    id: "unknown-simbolos-universais",
    title: "Símbolos Universais: A Linguagem do Inconsciente Coletivo",
    tradition: "Psicologia Analítica/Simbologia",
    description: "Descubra o significado dos símbolos arquetípicos e sua presença em mitos, sonhos e arte.",
    icon: "🌀",
    duration: "18-22 horas",
    lessons: 20,
    level: LEVEL_INTERMEDIATE,
    pathName: "Caminhos Integradores",
    skills: ["Interpretação de Símbolos", "Psicologia Junguiana", "Análise de Mitos"],
    prerequisites: [],
    mainMasterIds: ["unknown-carl-jung"],
    accessLevel: 'initiate',
    structure: {
        levels: [{ id: "su-l1", name: "Arquétipos e Símbolos", modules: [{ id: "su-l1-m1", name: "Linguagem da Psique", lessons: [
            { id: "su-l1-m1-les1", title: "Introdução à Simbologia", duration: "40 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"O poder dos símbolos." },
            { id: "su-l1-m1-les2", title: "Arquétipos Junguianos", duration: "50 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'initiate', description:"Self, Sombra, Anima/Animus." },
        ]}]}]
      },
  },
  {
    id: "unknown-mapeando-consciencia",
    title: "Mapeando a Consciência: Estados Alterados e Expansão da Mente",
    tradition: "Estudos da Consciência",
    description: "Uma exploração científica e experiencial dos diversos estados de consciência e técnicas para expansão mental.",
    icon: "🌌",
    duration: "24-30 horas",
    lessons: 28,
    level: LEVEL_ADVANCED,
    pathName: "Caminhos Integradores",
    skills: ["Meditação Avançada", "Biofeedback", "Exploração Onírica Lúcida"],
    prerequisites: ["Conhecimento básico de neurociência ou psicologia"],
    mainMasterIds: ["unknown-stanislav-grof"],
    accessLevel: 'adept',
    structure: {
        levels: [{ id: "mc-l1", name: "Cartografia da Mente", modules: [{ id: "mc-l1-m1", name: "Estados de Consciência", lessons: [
            { id: "mc-l1-m1-les1", title: "O Espectro da Consciência", duration: "45 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'free', description:"De vigília a estados místicos." },
            { id: "mc-l1-m1-les2", title: "Técnicas de Indução de Estados Alterados", duration: "60 min", contentType: 'text', content: "...", requiredForCompletion: true, accessLevel: 'adept', description:"Meditação, respiração holotrópica, etc." },
        ]}]}]
      },
  }
];
