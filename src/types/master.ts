
export interface Master {
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
  rarity?: string;
  availableAt: number; // Nível mínimo para desbloquear
  missions: string[]; // IDs das missões deste mestre
  specializations: string[]; // Caminhos de especialização compatíveis
}
