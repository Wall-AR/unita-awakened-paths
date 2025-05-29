import { BlogPost } from "@/types/blog";
import { blogPosts } from "@/data/blogData";

/**
 * Retrieves all blog posts.
 * @returns {Promise<BlogPost[]>} A promise that resolves to an array of all blog posts.
 */
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  return Promise.resolve(blogPosts);
};

/**
 * Retrieves a specific blog post by its slug.
 * @param {string} slug - The slug of the blog post to retrieve.
 * @returns {Promise<BlogPost | undefined>} A promise that resolves to the blog post object if found, or undefined otherwise.
 */
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const post = blogPosts.find((p) => p.slug === slug);
  return Promise.resolve(post || undefined);
};
