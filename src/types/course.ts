
export interface Course {
  id: string;
  title: string;
  tradition: string;
  description: string;
  icon: string;
  duration: string;
  lessons: number;
  modules?: number;
  level: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isFree?: boolean;
  premium?: boolean;
  prerequisites?: string[];
  skills?: string[];
  coverImage?: string;
  path: string;
  material?: string;
  mainMasters?: string[];
  structure?: CourseStructure;
}

export interface CourseStructure {
  levels: CourseLevel[];
}

export interface CourseLevel {
  id: string;
  name: string;
  description: string;
  isFree: boolean;
  modules: CourseModule[];
}

export interface CourseModule {
  id: string;
  name: string;
  description: string;
  lessons: Lesson[];
  quiz?: Quiz;
  practice?: Practice;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  contentType: 'text' | 'video' | 'audio' | 'interactive';
  content: string; // HTML/markdown ou URL
  mediaUrls?: string[];
  interactiveElements?: InteractiveElement[];
  requiredForCompletion: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number;
  maxAttempts?: number;
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'open-ended';
  options?: string[];
  correctAnswer?: string | string[];
  explanation?: string;
  points: number;
}

export interface Practice {
  id: string;
  title: string;
  description: string;
  instructions: string;
  recommendedDuration: string;
  verificationMethod: 'reflection' | 'photo' | 'recording' | 'checklist';
}

export interface InteractiveElement {
  id: string;
  type: 'visualization' | 'meditation' | 'exercise' | 'map' | 'timeline' | 'symbol';
  title: string;
  description: string;
  content: string; // JSON ou URL
}
