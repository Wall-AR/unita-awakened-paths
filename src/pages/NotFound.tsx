
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SacredSymbol from "@/components/SacredSymbol";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SacredSymbol type="flowerOfLife" className="top-1/4 -right-24 w-96 h-96 opacity-5" />
          <SacredSymbol type="treeOfLife" className="bottom-1/4 -left-24 w-96 h-96 opacity-5" />
        </div>
        
        <div className="text-center p-8 max-w-lg">
          <h1 className="font-heading text-6xl mb-4 gold-text">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Esta página parece estar oculta além do véu...
          </p>
          <p className="text-muted-foreground mb-8">
            O caminho que você busca não foi encontrado. Talvez seja um mistério ainda não revelado, 
            ou simplesmente um desvio em sua jornada.
          </p>
          <Button size="lg" asChild>
            <a href="/">Retornar ao Caminho</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
