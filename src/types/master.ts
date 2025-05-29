
/**
 * @interface Master
 * @description Represents a master guide or teacher in the platform.
 */
export interface Master {
  /** The unique identifier for the master. */
  id: string;
  /** The name of the master. */
  name: string;
  /** The primary spiritual tradition or school of thought associated with the master. */
  tradition: string;
  /** 
   * The category of the master, indicating their significance or role.
   * S = Avatars/Founders, A = Historical Masters, B = Mystics/Teachers, C = Sages/Instructors.
   */
  category: 'S' | 'A' | 'B' | 'C'; 
  /** A brief description of the master and their significance. */
  description: string;
  /** The historical period or era in which the master lived or is primarily associated. */
  period: string;
  /** Key characteristics or personality traits of the master. */
  characteristics: string[];
  /** Core teachings or philosophical concepts attributed to the master. */
  teachings: string[];
  /** Types of missions or quests typically assigned or inspired by this master. */
  missionTypes: string[];
  /** An icon representing the master, often an emoji or short code. */
  icon: string;
  /** A notable quote attributed to the master. */
  quote?: string;
  /** Description of or link to key texts or materials related to the master. */
  material?: string;
  /** URL for an image or portrait of the master. */
  image?: string;
  /** The rarity or classification of the master within the platform's system. */
  rarity?: 'Comum' | 'Incomum' | 'Raro' | 'Extremamente Raro';
  /** The minimum user level required to unlock or interact with this master. */
  availableAt: number; 
  /** An array of mission IDs associated with this master. */
  missions: string[]; 
  /** An array of specialization path IDs compatible with this master's teachings. */
  specializations: string[]; 
  /** Freemium Model: Defines the access tier required to interact with this master. */
  requiredTier: 'free' | 'seeker' | 'initiate' | 'adept';
}
