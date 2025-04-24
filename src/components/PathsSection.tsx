
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const paths = [
  {
    id: 1,
    title: "Hermetismo",
    description: "Explore os sete princípios herméticos e as leis universais descritas no Kybalion.",
    icon: "⚛️",
    color: "from-emerald-500/20 to-emerald-900/20",
    highlight: "emerald",
    featured: true
  },
  {
    id: 2,
    title: "Teosofia",
    description: "Estude os ensinamentos de Helena Blavatsky e a síntese das tradições espirituais.",
    icon: "🔮",
    color: "from-indigo-500/20 to-indigo-900/20",
    highlight: "indigo"
  },
  {
    id: 3,
    title: "Cabala",
    description: "Descubra a árvore da vida, as sefirot e os mistérios da mística judaica.",
    icon: "✡️",
    color: "from-blue-500/20 to-blue-900/20",
    highlight: "blue"
  },
  {
    id: 4,
    title: "Filosofia Grega",
    description: "Mergulhe nos ensinamentos de Platão, Pitágoras e as escolas de mistérios.",
    icon: "🏛️",
    color: "from-cyan-500/20 to-cyan-900/20",
    highlight: "cyan"
  },
  {
    id: 5,
    title: "Misticismo Cristão",
    description: "Explore os ensinamentos esotéricos de Jesus e os textos gnósticos.",
    icon: "✝️",
    color: "from-purple-500/20 to-purple-900/20",
    highlight: "purple",
    featured: true
  },
  {
    id: 6,
    title: "Alquimia",
    description: "A arte da transformação interior e os segredos da Grande Obra.",
    icon: "⚗️",
    color: "from-amber-500/20 to-amber-900/20",
    highlight: "amber"
  },
];

const PathsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Caminhos de Sabedoria</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Explore diferentes tradições esotéricas, cada uma revelando facetas da mesma verdade universal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path) => (
            <Card 
              key={path.id}
              className={`path-card bg-gradient-to-br ${path.color} border-${path.highlight}-500/20 hover:border-${path.highlight}-500/50`}
            >
              <div className={`path-card-icon text-${path.highlight}-400`}>
                {path.icon}
              </div>
              <h3 className="font-heading text-xl mb-2">{path.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{path.description}</p>
              <Button 
                variant="outline" 
                className="mt-2 border-white/20 hover:bg-white/10 hover:border-white/30"
                asChild
              >
                <Link to={`/paths/${path.id}`}>
                  Explorar
                </Link>
              </Button>
              {path.featured && (
                <div className="absolute top-4 right-4 bg-primary/80 text-xs py-1 px-2 rounded-full">
                  Em destaque
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/paths">Ver todos os caminhos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PathsSection;
