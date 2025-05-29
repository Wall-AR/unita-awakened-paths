export interface CommunityUserPreview {
  id: number; // Keeping as number to match current data, distinct from UserProfile.id: string
  name: string;
  title: string;
  level: number;
  attributes?: {
    wisdom?: number;
    compassion?: number;
    harmony?: number;
    integrity?: number;
    respect?: number;     // From local data
    inspiration?: number; // From global UserAttributes, added for potential future alignment
  };
  traditions?: string[]; // Field from local data
}

export interface Circle {
  id: number;
  name: string;
  members: number;
  tradition: string; // Can be refined to literal union later
  type: string;      // Can be refined to literal union later
  active: boolean;
  description?: string;
}

export interface Topic {
  id: number;
  title: string;
  author: string; // User ID or name
  replies: number;
  views: number;
  category: string; // Can be refined to literal union later
  lastActivity?: Date;
}
