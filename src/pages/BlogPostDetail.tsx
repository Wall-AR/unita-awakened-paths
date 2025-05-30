import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogPostBySlug } from "@/services/blogService";
import type { BlogPost } from "@/types";
import Header from "@/components/Header"; // Changed to default import
import Footer from "@/components/Footer"; // Changed to default import
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Corrected import for shadcn/ui
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import { format } from 'date-fns'; // For formatting date

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery<BlogPost | undefined, Error>({
    queryKey: ['blogPost', slug],
    queryFn: () => getBlogPostBySlug(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Icon icon="svg-spinners:blocks-shuffle-3" className="h-12 w-12" />
      </div>
    );
  }

  if (error || !post) {
    return <div className="text-center text-red-500 py-10">Error loading blog post or post not found.</div>;
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className="my-8 max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl mb-3">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.authorImage || '/images/placeholder-avatar.png'} alt={post.author} />
                  <AvatarFallback>{post.author.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <span>{format(new Date(post.date), 'dd MMMM, yyyy')}</span>
              <span>•</span>
              <Badge variant="outline">{post.category}</Badge>
            </div>
            {post.image && (
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mt-4" 
              />
            )}
          </header>
          
          {/* Render simple text content. For HTML or Markdown, specific libraries would be needed. */}
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags - if available in BlogPost type */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          )}
        </article>
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
            <Link to="/blog">
                <Icon icon="lucide:arrow-left" className="inline-block mr-2" />
                Voltar para o Blog
            </Link>
        </div>

      </main>
      <Footer />
    </>
  );
};

export default BlogPostDetail;
