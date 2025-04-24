
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const masters = [
  {
    id: 1,
    name: "Hermes Trismegisto",
    title: "O Três Vezes Grande",
    tradition: "Hermetismo",
    description: "Figura lendária associada à sabedoria hermética e ao Kybalion.",
    rarity: "S",
    imageSrc: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 2,
    name: "Helena Blavatsky",
    title: "Fundadora da Teosofia",
    tradition: "Teosofia",
    description: "Escritora, ocultista e fundadora da Sociedade Teosófica.",
    rarity: "A",
    imageSrc: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 3,
    name: "Conde de Saint Germain",
    title: "O Mestre Ascensionado",
    tradition: "Alquimia",
    description: "Figura histórica e mística associada à imortalidade e alquimia.",
    rarity: "A",
    imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
  },
];

const MastersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background/0 via-muted/10 to-background/0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Mestres Guias</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Sábios e guardiões do conhecimento que irão guiá-lo em sua jornada esotérica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {masters.map((master) => (
            <Card 
              key={master.id} 
              className="bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${master.imageSrc})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge 
                    className={`
                      ${master.rarity === 'S' ? 'bg-gold text-gold-foreground' : 
                        master.rarity === 'A' ? 'bg-primary' : 
                        master.rarity === 'B' ? 'bg-secondary' : 'bg-muted'}
                      mb-2
                    `}
                  >
                    Raridade {master.rarity}
                  </Badge>
                  <h3 className="font-heading text-xl">{master.name}</h3>
                  <p className="text-sm text-muted-foreground">{master.title}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-primary mb-2">Tradição: {master.tradition}</div>
                <p className="text-sm text-muted-foreground">{master.description}</p>
                <button className="mt-4 text-primary hover:text-primary/80 text-sm font-medium">
                  Saiba mais
                </button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6">
            Cada mestre guia oferece missões diárias, ensinamentos exclusivos e um caminho único para a sabedoria. Descubra qual mestre ressoará com sua jornada espiritual.
          </p>
          <button className="text-primary hover:text-primary/80 font-medium">
            Conheça todos os mestres
          </button>
        </div>
      </div>
    </section>
  );
};

export default MastersSection;
