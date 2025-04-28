
export interface Path {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: {
    from: string;
    to: string;
  };
  keyElements: string[];
  masters: string[];
  courses?: string[];
}

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
  dailyPractices: DailyPractice[];
}

export interface DailyPractice {
  id: string;
  name: string;
  description: string;
  duration: string; // e.g., "15-20 min"
  instructions: string;
  benefitsAttributes: string[]; // atributos beneficiados
}
