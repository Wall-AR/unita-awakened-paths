
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Filter, BookOpen, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { getMasters } from "@/services/masterService";
import { Master } from "@/types/master";

const Masters = () => {
  const { data: allMasters, isLoading, error } = useQuery<Master[], Error>({
    queryKey: ['masters'],
    queryFn: getMasters
  });

  const mastersByCategory = allMasters 
    ? {
        "S": {
          title: "Avatares e Fundadores",
          masters: allMasters.filter(master => master.category === "S"),
          color: "bg-amber-500"
        },
        "A": {
          title: "Mestres Históricos",
          masters: allMasters.filter(master => master.category === "A"),
          color: "bg-primary"
        },
        "B": {
          title: "Místicos e Professores",
          masters: allMasters.filter(master => master.category === "B"),
          color: "bg-secondary"
        },
        "C": {
          title: "Sábios e Instrutores",
          masters: allMasters.filter(master => master.category === "C"),
          color: "bg-muted"
        }
      }
    : {};
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <div className="container mx-auto px-4 py-8 text-center">Loading masters...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <div className="container mx-auto px-4 py-8 text-center text-red-500">Error loading masters: {error.message}</div>
        </main>
        <Footer />
      </div>
    );
  }

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
                <BreadcrumbPage>Mestres</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Mestres da Sabedoria
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Guias iluminados de diferentes tradições que compartilham sua sabedoria através dos tempos.
          </p>

          {/* Introdução */}
          <section className="mb-16 p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <h2 className="font-heading text-2xl mb-4">Os Guardiões do Conhecimento</h2>
            <p className="text-muted-foreground mb-6">
              Na Unitas, os Mestres são seus guias na jornada espiritual. Cada Mestre representa uma figura histórica 
              ou arquetípica que personifica os ensinamentos de uma tradição específica. 
              Ao progredir na plataforma, você desenvolve relacionamento com diferentes Mestres, 
              recebendo deles missões e ensinamentos alinhados com sua sabedoria particular.
            </p>
            <p className="text-muted-foreground">
              Os Mestres estão organizados em categorias que refletem sua raridade e profundidade de sabedoria. 
              Os da Categoria C são mais comuns e acessíveis aos iniciantes, enquanto os da Categoria A são guias 
              para buscadores mais avançados, com os raríssimos Mestres da Categoria S sendo desbloqueados apenas 
              em circunstâncias especiais.
            </p>
          </section>

          {/* Filtros e Busca */}
          <div className="mb-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar mestres..."
                className="w-full pl-10 pr-3 py-2 rounded-md bg-background/50 border border-border/50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtrar por Tradição
            </Button>
          </div>

          {/* Mestres por Categoria */}
          {Object.entries(mastersByCategory).map(([categoryKey, data]) => {
            const category = categoryKey as keyof typeof mastersByCategory; // Type assertion
            if (!data || !data.masters || data.masters.length === 0) return null; // Skip if no masters for this category
            return (
            <section key={category} className="mb-16">
              <h2 className="font-heading text-2xl mb-6 flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${data.color}`}></span>
                {data.title}
                {category === "S" && (
                  <Badge className="ml-3 bg-amber-500/20 text-amber-200">Extremamente Raros</Badge>
                )}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.masters.map((master) => (
                  <Card key={master.id} className="overflow-hidden bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="h-48 bg-gradient-to-b from-primary/10 to-secondary/10 flex items-center justify-center">
                      <span className="text-5xl">{master.icon}</span>
                    </div>
                    <div className="p-6">
                      <div className="mb-1">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/20">{master.tradition}</span>
                      </div>
                      <h3 className="font-heading text-xl mb-2">{master.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{master.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {master.teachings.slice(0, 2).map((teaching, i) => (
                          <Badge key={i} variant="outline" className="bg-background/50">
                            {teaching}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>{master.missionTypes.length} missões</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          <span>{master.category}</span>
                        </div>
                      </div>
                      
                      <Link to={`/masters/${master.id}`} className="w-full">
                        <Button variant="secondary" size="sm" className="w-full">Ver Detalhes</Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )})}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="font-heading text-3xl mb-6">Encontre Seu Mestre Guia</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ao se registrar na Unitas, você será apresentado a seu primeiro mestre guia, escolhido 
              com base em suas afinidades espirituais. Conforme avança em sua jornada, poderá 
              desbloquear mestres mais raros que o guiarão em níveis mais profundos de conhecimento.
            </p>
            <Button size="lg">Iniciar Jornada</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Masters;
