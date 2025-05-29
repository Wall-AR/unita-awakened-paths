
/**
 * @interface Course
 * @description Represents a course in the learning platform.
 */
export interface Course {
  /** The unique identifier for the course. */
  id: string;
  /** The main title of the course. */
  title: string;
  /** The spiritual tradition or school of thought the course belongs to. */
  tradition: string;
  /** A brief summary or description of the course content. */
  description: string;
  /** An icon representing the course, often an emoji or short code. */
  icon: string;
  /** The estimated total duration to complete the course (e.g., "20-24 horas"). */
  duration: string;
  /** The total number of lessons in the course. */
  lessons: number;
  /** The total number of modules in the course, if applicable. */
  modules?: number;
  /** The difficulty level of the course. */
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Iniciante/Intermediário' | 'Intermediário/Avançado';
  /** Indicates if the course is newly added. */
  isNew?: boolean;
  /** Indicates if the course is currently featured. */
  isFeatured?: boolean;
  /** Indicates if the course is available for free. */
  isFree?: boolean;
  /** Indicates if the course is a premium offering. */
  premium?: boolean;
  /** A list of prerequisite course IDs or descriptions. */
  prerequisites?: string[];
  /** A list of skills that will be developed or enhanced by taking this course. */
  skills?: string[];
  /** URL for the course's cover image. */
  coverImage?: string;
  /** The name of the learning path this course belongs to. */
  pathName: string; 
  /** Description of or link to supplementary materials for the course. */
  material?: string;
  /** IDs of the main masters or guides associated with this course. */
  mainMasterIds?: string[]; 
  /** The detailed structure of the course, including levels, modules, and lessons. */
  structure?: CourseStructure; 
}

/**
 * @interface CourseStructure
 * @description Defines the hierarchical structure of a course, typically composed of levels.
 */
export interface CourseStructure {
  /** An array of levels within the course. */
  levels: CourseLevel[];
}

/**
 * @interface CourseLevel
 * @description Represents a distinct level within a course structure.
 */
export interface CourseLevel {
  /** The unique identifier for this course level. */
  id: string;
  /** The name of the course level (e.g., "Nível 1: Fundamentos"). */
  name: string;
  /** A description of what this level covers. */
  description: string;
  /** Indicates if this specific level is free. */
  isFree: boolean;
  /** An array of modules contained within this level. */
  modules: CourseModule[];
}

/**
 * @interface CourseModule
 * @description Represents a module within a course level, containing lessons and other activities.
 */
export interface CourseModule {
  /** The unique identifier for this module. */
  id: string;
  /** The name of the module. */
  name: string;
  /** A description of the module's content and objectives. */
  description: string;
  /** An array of lessons within this module. */
  lessons: Lesson[];
  /** An optional quiz associated with this module. */
  quiz?: Quiz;
  /** An optional practical exercise or practice associated with this module. */
  practice?: Practice;
}

/**
 * @interface Lesson
 * @description Represents a single lesson within a course module.
 */
export interface Lesson {
  /** The unique identifier for this lesson. */
  id: string;
  /** The title of the lesson. */
  title: string;
  /** A brief description of the lesson's content. */
  description: string;
  /** The estimated duration of the lesson (e.g., "15 min"). */
  duration: string;
  /** The type of content for this lesson. */
  contentType: 'text' | 'video' | 'audio' | 'interactive';
  /** 
   * The main content of the lesson. 
   * Can be HTML/markdown for text, a URL for video/audio, or a reference/ID for interactive elements. 
   */
  content: string; 
  /** Optional array of URLs for supplementary media files (videos, audio clips, images). */
  mediaUrls?: string[];
  /** Optional array of interactive elements embedded or linked within the lesson. */
  interactiveElements?: InteractiveElement[];
  /** Indicates if completing this lesson is required for module/course completion. */
  requiredForCompletion: boolean;
}

/**
 * @interface Quiz
 * @description Represents a quiz associated with a course module.
 */
export interface Quiz {
  /** The unique identifier for this quiz. */
  id: string;
  /** The title of the quiz. */
  title: string;
  /** A brief description or instructions for the quiz. */
  description: string;
  /** An array of questions in the quiz. */
  questions: QuizQuestion[];
  /** The minimum score required to pass the quiz. */
  passingScore: number;
  /** The maximum number of attempts allowed for this quiz, if applicable. */
  maxAttempts?: number;
}

/**
 * @interface QuizQuestion
 * @description Represents a single question within a quiz.
 */
export interface QuizQuestion {
  /** The unique identifier for this question. */
  id: string;
  /** The text of the question. */
  text: string;
  /** The type of question. */
  type: 'multiple-choice' | 'true-false' | 'open-ended';
  /** An array of options for multiple-choice questions. */
  options?: string[];
  /** The correct answer(s). For multiple-choice, can be a single value or an array if multiple selections are allowed. */
  correctAnswer?: string | string[];
  /** An explanation for the correct answer, shown after an attempt. */
  explanation?: string;
  /** The number of points this question is worth. */
  points: number;
}

/**
 * @interface Practice
 * @description Represents a practical exercise or activity within a course module.
 */
export interface Practice {
  /** The unique identifier for this practice. */
  id: string;
  /** The title of the practice. */
  title: string;
  /** A description of the practice and its objectives. */
  description: string;
  /** Step-by-step instructions for performing the practice. */
  instructions: string;
  /** The recommended duration for the practice. */
  recommendedDuration: string;
  /** Method used to verify completion or understanding of the practice. */
  verificationMethod: 'reflection' | 'photo' | 'recording' | 'checklist';
}

/**
 * @interface InteractiveElement
 * @description Represents an interactive component or element that can be part of a lesson.
 */
export interface InteractiveElement {
  /** The unique identifier for this interactive element. */
  id: string;
  /** The type of interactive element. */
  type: 'visualization' | 'meditation' | 'exercise' | 'map' | 'timeline' | 'symbol';
  /** The title of the interactive element. */
  title: string;
  /** A brief description of the interactive element. */
  description: string;
  /** 
   * The content payload for the interactive element. 
   * This could be a JSON string defining its properties, or a URL to its definition/source.
   */
  content: string;
}
