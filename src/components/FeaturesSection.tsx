
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Aprendizado Gamificado",
    description: "Ganhe experiência, desbloqueie conquistas e suba de nível enquanto absorve conhecimentos profundos.",
    icon: "🏆"
  },
  {
    title: "Mestres Guias",
    description: "Seja orientado por figuras históricas e místicas que personificam diferentes tradições espirituais.",
    icon: "👨‍🏫"
  },
  {
    title: "Missões Diárias",
    description: "Pratique e aplique o conhecimento através de desafios significativos para o seu desenvolvimento.",
    icon: "📝"
  },
  {
    title: "Certificações",
    description: "Documente seu progresso e expertise em diferentes áreas do conhecimento esotérico.",
    icon: "🎓"
  },
  {
    title: "Comunidade",
    description: "Conecte-se com outros buscadores, compartilhe experiências e forme círculos de estudo.",
    icon: "👥"
  },
  {
    title: "Conteúdo Desbloqueável",
    description: "Acesse ensinamentos mais avançados conforme avança em sua jornada de conhecimento.",
    icon: "🔓"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background/0 via-muted/10 to-background/0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Uma Nova Experiência de Aprendizado</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Transformamos o estudo esotérico em uma jornada imersiva e interativa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-heading text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
