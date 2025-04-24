
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="text-sm transition-colors hover:text-foreground">Início</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Blog da Unitas
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Artigos, reflexões e recursos para aprofundar sua jornada no conhecimento espiritual.
          </p>

          {/* Post em destaque */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl mb-6">Em Destaque</h2>
            <Card className="bg-card/30 backdrop-blur-sm border border-border/50">
              <div className="md:flex">
                <div className="md:w-2/5 h-64 md:h-auto bg-primary/10 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-4xl">✦</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <CardHeader className="p-0 pb-4">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-xs">Hermetismo</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-heading">
                      As Sete Leis Herméticas e sua Aplicação na Vida Moderna
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Por Sofia Luz • 12 de Abril de 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 pb-6">
                    <p className="text-muted-foreground">
                      Como os princípios ancestrais do Caibalion podem transformar nossa compreensão da realidade e oferecer ferramentas práticas para navegar os desafios contemporâneos.
                    </p>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Button variant="secondary">Ler Artigo</Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </div>

          {/* Posts recentes */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl mb-6">Artigos Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="h-48 bg-primary/10 rounded-t-lg flex items-center justify-center">
                    <span className="text-3xl">{post.icon}</span>
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-xs">{post.category}</span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>Por {post.author} • {post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Ler Artigo</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Categorias */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl mb-6">Categorias</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Cristianismo Esotérico", "Hermetismo", "Cabala", "Budismo", "Tradições Orientais", "Meditação & Práticas", "Filosofia", "Simbologia"].map((category, index) => (
                <Button key={index} variant="outline" className="justify-start h-14">
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 text-center">
            <h3 className="font-heading text-2xl mb-4">Assine Nossa Newsletter</h3>
            <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
              Receba artigos selecionados, recursos exclusivos e novidades sobre o mundo do conhecimento espiritual diretamente em seu email.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flex-1 px-4 py-2 rounded-md bg-background border border-border/50 focus:outline-none focus:border-primary"
              />
              <Button>Assinar</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
