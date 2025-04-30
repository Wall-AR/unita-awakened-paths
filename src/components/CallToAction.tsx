
import { Button } from "@/components/ui/button";
import SacredSymbol from "./SacredSymbol";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5" />
        <SacredSymbol type="flowerOfLife" className="top-0 right-0 w-96 h-96 opacity-5" />
        <SacredSymbol type="sriYantra" className="bottom-0 left-0 w-96 h-96 opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-card/30 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-border/50">
          <h2 className="font-heading text-3xl md:text-4xl gold-text">
            Inicie Sua Jornada Esotérica
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Explore o conhecimento oculto de forma envolvente e transformadora. 
            Junte-se a milhares de buscadores na maior plataforma de estudo esotérico gamificado.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="w-full sm:w-auto px-8 py-6 text-lg bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/register">
                Criar Conta Gratuita
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-6 text-lg border-primary/50 hover:border-primary"
              asChild
            >
              <Link to="/courses">
                Explorar Cursos
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Comece gratuitamente com o curso "A Bíblia Revelada" e desbloqueie seu primeiro mestre guia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
