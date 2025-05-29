export interface BlogPost {
  id: string; // Added id based on common practice, data will need update
  title: string;
  author: string;
  date: string; // Kept as string for now
  category: string; // Kept as string for now, can be refined later
  excerpt: string;
  icon: string;
  content?: string; // Added optional content for full blog post
  slug: string; // Added slug for URL generation
}
