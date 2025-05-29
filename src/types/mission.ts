
export interface Mission {
  id: string;
  title: string;
  masterId: string;
  type: "study" | "practice" | "service" | "creativity" | "self-knowledge" | "multiple";
  level: "beginner" | "intermediate" | "advanced";
  duration: string; // Ex: "3-7 days", "1 hour"
  description: string;
  objectives: string[];
  steps: MissionStep[];
  verification: MissionVerification[];
  rewards: {
    xp: number;
    attributes?: {[key: string]: number};
    unlockable?: string;
  };
  requiredItems?: string[];
  /** Freemium Model: Defines the access tier required for this mission. */
  requiredTier: 'free' | 'seeker' | 'initiate' | 'adept';
}

export interface MissionStep {
  id: string;
  description: string;
  isRequired: boolean;
  order: number;
  estimatedTime?: string;
}

export interface MissionVerification {
  id: string;
  type: 'text' | 'image' | 'audio' | 'video' | 'checklist';
  description: string;
  minLength?: number; // Para texto
  checklistItems?: string[]; // Para verificações de checklist
}

export interface UserMission {
  userId: string;
  missionId: string;
  status: 'assigned' | 'in-progress' | 'submitted' | 'completed' | 'failed';
  startDate: Date;
  dueDate?: Date;
  completionDate?: Date;
  currentStep: number;
  completedSteps: string[];
  verifications: {
    [verificationId: string]: {
      content: string; // URL ou texto
      submittedDate: Date;
    };
  };
  feedback?: string;
  reflection?: string;
}
