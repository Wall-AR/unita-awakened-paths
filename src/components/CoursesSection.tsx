
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "A Bíblia Revelada: Para Além do Véu",
    description: "Descubra os significados ocultos e a sabedoria esotérica contida nas escrituras sagradas.",
    level: "Iniciante",
    modules: 8,
    lessons: 32,
    estimatedTime: "16 horas",
    isFeatured: true,
    isFree: true,
    progress: 0,
    tradition: "Cristianismo Esotérico",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: 2,
    title: "O Kybalion: Os Sete Princípios Herméticos",
    description: "Estude os princípios fundamentais do hermetismo e sua aplicação prática na vida cotidiana.",
    level: "Intermediário",
    modules: 7,
    lessons: 21,
    estimatedTime: "12 horas",
    isFeatured: true,
    isFree: false,
    progress: 35,
    tradition: "Hermetismo",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: 3,
    title: "A Voz do Silêncio: Sabedoria Budista Esotérica",
    description: "Explore os ensinamentos profundos de H.P. Blavatsky sobre o caminho do discipulado.",
    level: "Avançado",
    modules: 6,
    lessons: 24,
    estimatedTime: "14 horas",
    isFeatured: false,
    isFree: false,
    progress: 0,
    tradition: "Budismo Esotérico",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300"
  }
];

const CoursesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Cursos Interativos</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Uma nova forma de absorver conteúdos esotéricos através de experiências imersivas e interativas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.id}
              className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-40">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {course.isFeatured && (
                    <Badge className="bg-primary">Destaque</Badge>
                  )}
                  {course.isFree && (
                    <Badge variant="outline" className="border-gold text-gold">Gratuito</Badge>
                  )}
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {course.tradition}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-heading text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>Nível: {course.level}</span>
                  <span>{course.modules} Módulos</span>
                  <span>{course.estimatedTime}</span>
                </div>
                
                {course.progress > 0 ? (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Seu progresso</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-1" />
                  </div>
                ) : null}
                
                <Button 
                  className="w-full mt-2" 
                  variant={course.progress > 0 ? "default" : "outline"}
                  asChild
                >
                  <Link to={`/courses/${course.id}`}>
                    {course.progress > 0 ? "Continuar" : "Começar"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/courses">Ver todos os cursos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
