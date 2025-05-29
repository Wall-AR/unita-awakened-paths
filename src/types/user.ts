
/**
 * @interface UserProfile
 * @description Represents the complete profile of a user in the platform.
 */
export interface UserProfile {
  /** The unique identifier for the user. */
  id: string;
  /** The unique username chosen by the user. */
  username: string;
  /** The user's email address. */
  email: string;
  /** The name displayed for the user in the UI. */
  displayName: string;
  /** The date when the user registered on the platform. */
  joinedDate: Date;
  /** Optional URL to the user's avatar image. */
  avatar?: string;
  /** The user's current overall level in the platform. */
  level: number;
  /** The user's current experience points. */
  xp: number;
  /** Optional ID of the user's chosen primary learning path. */
  primaryPath?: string; 
  /** Optional ID of the user's currently selected master guide. */
  currentMaster?: string; 
  /** The user's spiritual attributes scores. */
  attributes: UserAttributes;
  /** A record of items and features unlocked by the user. */
  unlocks: UserUnlocks;
  /** The user's personalized preferences for the platform. */
  preferences: UserPreferences;
  /** Freemium Model: The user's current subscription tier. */
  subscriptionTier: 'free' | 'seeker' | 'initiate' | 'adept';
}

/**
 * @interface UserAttributes
 * @description Represents the spiritual attributes tracked for a user.
 */
export interface UserAttributes {
  /** Wisdom attribute score. */
  wisdom: number; 
  /** Compassion attribute score. */
  compassion: number; 
  /** Harmony attribute score. */
  harmony: number; 
  /** Integrity attribute score. */
  integrity: number; 
  /** Inspiration attribute score. */
  inspiration: number; 
}

/**
 * @interface UserUnlocks
 * @description Represents various items, titles, or content unlocked by the user.
 */
export interface UserUnlocks {
  /** An array of IDs or names of titles unlocked by the user. */
  titles: string[]; 
  /** An array of IDs of masters unlocked by the user. */
  masters: string[]; 
  /** An array of IDs or keys for special content unlocked by the user. */
  specialContent: string[]; 
}

/**
 * @interface UserPreferences
 * @description Stores user-specific preferences for platform behavior and appearance.
 */
export interface UserPreferences {
  /** The preferred theme for the user interface. */
  theme: 'light' | 'dark' | 'system';
  /** Indicates if the user wishes to receive general notifications. */
  notifications: boolean;
  /** Indicates if the user wishes to receive email updates. */
  emailUpdates: boolean;
  /** The preferred language for the user interface (e.g., "pt-BR", "en-US"). */
  language: string;
  /** Controls the visibility of the user's profile. */
  profileVisibility: 'public' | 'private' | 'followers';
  /** Indicates if two-factor authentication is enabled for the user's account. */
  twoFactorEnabled: boolean;
  /** Indicates if the user allows logging of their activity for personalized recommendations or analytics. */
  activityLogging: boolean;
}

/**
 * @interface UserProgress
 * @description Tracks the user's progress across various platform activities like courses, missions, and practices.
 */
export interface UserProgress {
  /** The ID of the user this progress belongs to. */
  userId: string;
  /** 
   * A record of the user's progress in courses.
   * Keys are course IDs.
   */
  courses: {
    [courseId: string]: CourseProgress;
  };
  /** 
   * A record of the user's progress in missions.
   * Keys are mission IDs.
   */
  missions: {
    [missionId: string]: MissionProgress;
  };
  /** 
   * A record of the user's progress and streaks in daily practices.
   * Keys are practice IDs.
   */
  practices: {
    [practiceId: string]: PracticeStreak;
  };
}

/**
 * @interface CourseProgress
 * @description Details the user's progress within a specific course.
 */
export interface CourseProgress {
  /** The ID of the course. */
  courseId: string;
  /** The date when the user started the course. */
  started: Date;
  /** The date of the user's last activity in this course. */
  lastActivity: Date;
  /** An array of IDs of completed lessons in this course. */
  completedLessons: string[];
  /** An array of IDs of completed modules in this course. */
  completedModules: string[];
  /** 
   * A record of scores achieved by the user in quizzes within this course.
   * Keys are quiz IDs.
   */
  quizScores: {
    [quizId: string]: number;
  };
  /** Indicates if the user has completed the course. */
  completed: boolean;
  /** The date when the user completed the course, if applicable. */
  completionDate?: Date;
}

/**
 * @interface MissionProgress
 * @description Details the user's progress in a specific mission.
 */
export interface MissionProgress {
  /** The ID of the mission. */
  missionId: string;
  /** The date when the user started the mission. */
  started: Date;
  /** The current status of the mission for the user. */
  status: 'in-progress' | 'completed' | 'failed';
  /** 
   * A record of the user's completed steps in this mission.
   * Keys are step IDs, values are boolean (true if completed).
   */
  steps: {
    [stepId: string]: boolean;
  };
  /** 
   * A record of the user's submissions for mission verification steps.
   * Keys are verification IDs. Values can be URLs to uploaded files or submitted text.
   */
  verifications: {
    [verificationId: string]: string; 
  };
  /** Optional user reflection submitted upon mission completion. */
  reflection?: string;
  /** The date when the user completed the mission, if applicable. */
  completed?: Date;
}

/**
 * @interface PracticeStreak
 * @description Tracks the user's engagement and streak for a specific daily practice.
 */
export interface PracticeStreak {
  /** The ID of the daily practice. */
  practiceId: string;
  /** The user's current consecutive days streak for this practice. */
  currentStreak: number;
  /** The user's longest ever consecutive days streak for this practice. */
  longestStreak: number;
  /** The date when the user last performed this practice. */
  lastPractice: Date;
  /** The total number of times the user has performed this practice. */
  totalSessions: number;
  /** The total number of minutes the user has spent on this practice. */
  totalMinutes: number;
  /** An array of notes or journal entries related to this practice. */
  notes: {
    /** The date of the note. */
    date: Date;
    /** The content of the note. */
    note: string;
  }[];
}
