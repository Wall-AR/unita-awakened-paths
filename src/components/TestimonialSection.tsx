
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    content: "Esta plataforma transformou completamente minha compreensão sobre esoterismo. Os cursos são profundos mas acessíveis, e o formato interativo torna o aprendizado muito mais envolvente.",
    author: "Mariana Silva",
    title: "Estudante de Filosofia",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    content: "Finalmente encontrei uma abordagem moderna e gamificada para textos clássicos que sempre achei intimidadores. A forma como os conteúdos são apresentados é revolucionária.",
    author: "Carlos Mendes",
    title: "Professor de História",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    content: "As missões diárias e a orientação do mestre guia trouxeram uma dimensão prática para meus estudos esotéricos que eu não encontrei em nenhum outro lugar.",
    author: "Julia Torres",
    title: "Praticante de Meditação",
    avatar: "https://i.pravatar.cc/150?img=25"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">O Que Dizem Nossos Viajantes</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Descubra como Unitas tem transformado a jornada espiritual de nossos usuários.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 flex flex-col"
            >
              <div className="flex-1">
                <svg className="h-8 w-8 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src={testimonial.avatar} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{testimonial.author}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
