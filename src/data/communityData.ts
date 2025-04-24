
// Tipos para os dados da comunidade
export interface User {
  id: number;
  name: string;
  title: string;
  level: number;
  attributes?: {
    wisdom: number;
    compassion: number;
    harmony: number;
    integrity: number;
    respect: number;
  };
  traditions?: string[];
}

export interface Circle {
  id: number;
  name: string;
  members: number;
  tradition: string;
  type: string;
  active: boolean;
  description?: string;
}

export interface Topic {
  id: number;
  title: string;
  author: string;
  replies: number;
  views: number;
  category: string;
  lastActivity?: Date;
}

// Dados simulados para a comunidade
export const users: User[] = [
  { id: 1, name: "Sophia Luz", title: "Guardiã da Sabedoria", level: 37 },
  { id: 2, name: "Miguel Hermeneuta", title: "Filósofo Hermético", level: 42 },
  { id: 3, name: "Ana Clara", title: "Alquimista", level: 28 },
  { id: 4, name: "Ricardo Paz", title: "Místico", level: 33 },
  { id: 5, name: "Laila Estrela", title: "Hermeneuta", level: 45 },
  { id: 6, name: "Gabriel Serra", title: "Guardião", level: 31 }
];

// Mais dados podem ser adicionados conforme necessário
