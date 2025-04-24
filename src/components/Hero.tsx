
import { Button } from "@/components/ui/button";
import SacredSymbol from "./SacredSymbol";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background symbols */}
      <SacredSymbol type="flowerOfLife" className="top-1/4 -right-24 w-96 h-96 opacity-5" />
      <SacredSymbol type="treeOfLife" className="bottom-1/4 -left-24 w-96 h-96 opacity-5" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-heading text-4xl md:text-6xl tracking-tight gold-text">
            Muitos Caminhos, Uma Verdade
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            Uma jornada transformadora pelos conhecimentos mistéricos da antiguidade, reinventados para o mundo moderno.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-primary hover:bg-primary/90">
              Iniciar Jornada
            </Button>
            <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg border-primary/50 hover:border-primary">
              Conheça mais
            </Button>
          </div>
          
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <p className="text-2xl font-heading gold-text">25+</p>
              <p className="text-sm text-muted-foreground">Tradições Místicas</p>
            </div>
            <div className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <p className="text-2xl font-heading gold-text">100+</p>
              <p className="text-sm text-muted-foreground">Cursos Interativos</p>
            </div>
            <div className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <p className="text-2xl font-heading gold-text">50+</p>
              <p className="text-sm text-muted-foreground">Mestres Guias</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
