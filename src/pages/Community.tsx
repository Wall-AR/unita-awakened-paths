
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { users, Circle, Topic } from "@/data/communityData";

const Community = () => {
  // Destaque para círculos de estudo ativos
  const featuredCircles: Circle[] = [
    { id: 1, name: "Hermetismo Aplicado", members: 12, tradition: "Hermético", type: "Prática", active: true },
    { id: 2, name: "Estudo dos Evangelhos", members: 8, tradition: "Cristianismo", type: "Curso", active: true },
    { id: 3, name: "Meditação Oriental", members: 15, tradition: "Budismo", type: "Prática", active: true }
  ];
  
  // Tópicos recentes do fórum
  const recentTopics: Topic[] = [
    { id: 1, title: "Interpretação do Caibalion", author: "sophia_wisdom", replies: 24, views: 142, category: "Hermetismo" },
    { id: 2, title: "Simbolismo da Cruz", author: "light_seeker", replies: 18, views: 97, category: "Cristianismo" },
    { id: 3, title: "Prática de Mindfulness", author: "peaceful_mind", replies: 31, views: 203, category: "Budismo" }
  ];

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
                <BreadcrumbPage>Comunidade</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Comunidade Unitas
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Conecte-se com buscadores de todo o mundo que compartilham sua jornada pelo conhecimento espiritual.
          </p>

          {/* Seção: Círculos de Estudo */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-2xl">Círculos de Estudo</h2>
              <Button variant="outline">Ver Todos</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCircles.map(circle => (
                <Card key={circle.id} className="bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{circle.name}</CardTitle>
                    <CardDescription>{circle.tradition} • {circle.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{circle.members} membros ativos</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="secondary" size="sm">Ver Detalhes</Button>
                    <Button size="sm">Participar</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Seção: Fórum */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-2xl">Fórum de Discussão</h2>
              <Button variant="outline">Ver Todos</Button>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-border/50 flex font-medium text-sm">
                <div className="w-1/2">Tópico</div>
                <div className="w-1/6 text-center">Categoria</div>
                <div className="w-1/6 text-center">Respostas</div>
                <div className="w-1/6 text-center">Visualizações</div>
              </div>
              
              {recentTopics.map(topic => (
                <div key={topic.id} className="px-6 py-4 border-b border-border/30 flex text-sm hover:bg-card/50 transition-colors duration-200">
                  <div className="w-1/2">
                    <p className="font-medium hover:text-primary cursor-pointer">{topic.title}</p>
                    <p className="text-xs text-muted-foreground">por {topic.author}</p>
                  </div>
                  <div className="w-1/6 text-center my-auto">
                    <span className="px-2 py-1 rounded-full bg-card/50 text-xs">{topic.category}</span>
                  </div>
                  <div className="w-1/6 text-center my-auto">{topic.replies}</div>
                  <div className="w-1/6 text-center my-auto">{topic.views}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção: Membros */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-2xl">Membros Destacados</h2>
              <Button variant="outline">Ver Todos</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {users.slice(0, 4).map(user => (
                <div key={user.id} className="flex items-center gap-3 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.title} • Nível {user.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-16 py-10 px-8 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 text-center">
            <h3 className="font-heading text-2xl mb-3">Junte-se à Nossa Comunidade</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Compartilhe sua jornada, participe de círculos de estudo e conecte-se com outros buscadores em um ambiente de respeito e crescimento mútuo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Criar Uma Conta</Button>
              <Button variant="outline" size="lg">Saiba Mais</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
