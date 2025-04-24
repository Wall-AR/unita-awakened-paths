
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder para os caminhos - será implementado posteriormente */}
            <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <h3 className="font-heading text-xl mb-3">Caminho Hermético</h3>
              <p className="text-muted-foreground mb-4">
                Explore os princípios universais através da sabedoria hermética antiga.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Paths;
