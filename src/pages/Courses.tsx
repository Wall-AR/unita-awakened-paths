
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbPage>Cursos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Cursos Transformadores
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Uma jornada através dos textos sagrados e ensinamentos místicos, revelando sua sabedoria para o mundo moderno.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder para os cursos - será implementado posteriormente */}
            <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <h3 className="font-heading text-xl mb-3">A Bíblia Revelada</h3>
              <p className="text-muted-foreground mb-4">
                Uma jornada além do véu dos textos sagrados.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
