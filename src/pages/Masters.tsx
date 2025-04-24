
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Masters = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder para os mestres - será implementado posteriormente */}
            <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <h3 className="font-heading text-xl mb-3">Hermes Trismegisto</h3>
              <p className="text-muted-foreground mb-4">
                O grande iniciador dos mistérios herméticos.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Masters;
