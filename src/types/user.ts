
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName: string;
  joinedDate: Date;
  avatar?: string;
  level: number;
  xp: number;
  primaryPath?: string; // ID do caminho principal
  currentMaster?: string; // ID do mestre guia atual
  attributes: UserAttributes;
  unlocks: UserUnlocks;
  preferences: UserPreferences;
}

export interface UserAttributes {
  wisdom: number; // Sabedoria
  compassion: number; // Compaixão
  harmony: number; // Harmonia
  integrity: number; // Integridade
  inspiration: number; // Inspiração
}

export interface UserUnlocks {
  titles: string[]; // Títulos desbloqueados
  masters: string[]; // Mestres desbloqueados
  specialContent: string[]; // Conteúdos especiais desbloqueados
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  emailUpdates: boolean;
  language: string;
}

export interface UserProgress {
  userId: string;
  courses: {
    [courseId: string]: CourseProgress;
  };
  missions: {
    [missionId: string]: MissionProgress;
  };
  practices: {
    [practiceId: string]: PracticeStreak;
  };
}

export interface CourseProgress {
  courseId: string;
  started: Date;
  lastActivity: Date;
  completedLessons: string[];
  completedModules: string[];
  quizScores: {
    [quizId: string]: number;
  };
  completed: boolean;
  completionDate?: Date;
}

export interface MissionProgress {
  missionId: string;
  started: Date;
  status: 'in-progress' | 'completed' | 'failed';
  steps: {
    [stepId: string]: boolean;
  };
  verifications: {
    [verificationId: string]: string; // URL ou texto de verificação
  };
  reflection?: string;
  completed?: Date;
}

export interface PracticeStreak {
  practiceId: string;
  currentStreak: number;
  longestStreak: number;
  lastPractice: Date;
  totalSessions: number;
  totalMinutes: number;
  notes: {
    date: Date;
    note: string;
  }[];
}
