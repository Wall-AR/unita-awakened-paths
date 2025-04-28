
export interface Title {
  id: string;
  name: string;
  description: string;
  category: 'tradition' | 'attribute' | 'achievement';
  tradition?: string;
  attribute?: string;
  requirements: TitleRequirement[];
  icon: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  unlockMessage: string;
}

export interface TitleRequirement {
  type: 'course_completion' | 'attribute_level' | 'mission_count' | 'streak_days' | 'community_contribution';
  value: number;
  specificId?: string; // Course ID, attribute name, etc.
  description: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'study' | 'practice' | 'community' | 'mastery' | 'special';
  isHidden: boolean;
  requirements: AchievementRequirement[];
  rewards: {
    xp?: number;
    title?: string;
    specialUnlock?: string;
  };
}

export interface AchievementRequirement {
  type: string;
  threshold: number;
  description: string;
}

export interface LevelThreshold {
  level: number;
  xpRequired: number;
  unlocks: string[];
  description?: string;
}

export const levelThresholds: LevelThreshold[] = [
  { level: 1, xpRequired: 0, unlocks: ['basic_access'] },
  { level: 10, xpRequired: 1000, unlocks: ['first_master_c'] },
  { level: 25, xpRequired: 5000, unlocks: ['change_master'] },
  { level: 33, xpRequired: 10000, unlocks: ['master_b_access'] },
  { level: 50, xpRequired: 25000, unlocks: ['advanced_esoteric_content'] },
  { level: 66, xpRequired: 50000, unlocks: ['special_library'] },
  { level: 75, xpRequired: 75000, unlocks: ['master_a_access'] },
  { level: 90, xpRequired: 100000, unlocks: ['initiatic_content'] },
  { level: 99, xpRequired: 150000, unlocks: ['master_s_lottery'] },
  { level: 100, xpRequired: 200000, unlocks: ['master_status'] },
];
