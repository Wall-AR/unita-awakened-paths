
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { paths } from "@/data/pathsData";

const Paths = () => {
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
                <BreadcrumbPage>Caminhos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Caminhos do Conhecimento
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Explore diferentes tradições e escolas de sabedoria, cada uma oferecendo uma perspectiva única da verdade universal.
          </p>

          {/* Introdução aos Caminhos */}
          <section className="mb-16 p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <h2 className="font-heading text-2xl mb-4">Muitas Tradições, Uma Verdade</h2>
            <p className="text-muted-foreground mb-6">
              Cada caminho espiritual é como uma diferente janela que contempla o mesmo horizonte eterno. 
              Na Unitas, você pode explorar múltiplas tradições, descobrindo suas linguagens, práticas 
              e perspectivas únicas, enquanto reconhece o fio dourado que as une.
            </p>
            <p className="text-muted-foreground">
              Escolha um ou vários caminhos para sua jornada, aprofundando-se nas tradições que mais 
              ressoam com seu espírito, ou explorando novas perspectivas que enriquecerão sua visão 
              e prática espiritual.
            </p>
          </section>

          {/* Grid de Caminhos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paths.map((path, index) => (
              <div 
                key={index} 
                className="path-card"
                style={{
                  background: `linear-gradient(to bottom right, ${path.gradient.from}, ${path.gradient.to})`
                }}
              >
                <div className="path-card-icon">{path.icon}</div>
                <h3 className="font-heading text-2xl mb-3">{path.name}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{path.description}</p>
                <ul className="space-y-2 mb-6">
                  {path.keyElements.map((element, i) => (
                    <li key={i} className="text-sm flex items-center">
                      <span className="text-primary mr-2">•</span>
                      {element}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button variant="secondary" size="sm" className="w-full">
                    Explorar Caminho
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="font-heading text-3xl mb-6">Comece Sua Jornada</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Independentemente do caminho que escolher, a jornada começa com um único passo. 
              Registre-se para explorar gratuitamente o nível introdutório de qualquer tradição.
            </p>
            <Button size="lg">Criar Conta Gratuita</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Paths;
