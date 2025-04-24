
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import SacredSymbol from "@/components/SacredSymbol";
import { Button } from "@/components/ui/button";

const About = () => {
  const team = [
    { name: "Sofia Mendes", role: "Fundadora & Visionária", bio: "Estudiosa de tradições espirituais há mais de 20 anos" },
    { name: "Lucas Herrera", role: "Diretor de Conteúdo", bio: "Especialista em estudos comparativos entre tradições" },
    { name: "Ana Luz", role: "Experiência do Usuário", bio: "Designer focada em interfaces para aprendizado significativo" },
    { name: "Rafael Santos", role: "Tecnologia & Inovação", bio: "Desenvolvedor com foco em gamificação educacional" }
  ];

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
                <BreadcrumbPage>Sobre Nós</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="relative">
            <SacredSymbol type="flowerOfLife" className="absolute top-0 right-0 w-96 h-96 opacity-5" />
            
            <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
              Nossa Missão e História
            </h1>
            
            <div className="max-w-3xl">
              <p className="text-xl text-muted-foreground mb-8">
                A Unitas nasceu da compreensão profunda de que o conhecimento espiritual precisa ser revitalizado para o mundo contemporâneo, preservando sua essência enquanto se torna acessível aos buscadores modernos.
              </p>
            </div>
          </div>
          
          {/* Visão e Missão */}
          <section className="my-16">
            <h2 className="font-heading text-3xl mb-8">Nossa Visão</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-heading text-2xl">Unidade na Diversidade</h3>
                <p className="text-muted-foreground">
                  Acreditamos que as diferentes tradições espirituais são expressões culturais diversas da mesma verdade essencial. Nossa plataforma busca revelar os pontos de conexão entre estas tradições, promovendo um entendimento integral e unificado do conhecimento espiritual.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="font-heading text-2xl">Aprendizado Transformador</h3>
                <p className="text-muted-foreground">
                  Conhecimento sem aplicação é incompleto. Projetamos cada aspecto da Unitas para garantir que o aprendizado se traduza em transformação pessoal real, através de práticas integradas, exercícios de reflexão e aplicações concretas no dia-a-dia.
                </p>
              </div>
            </div>
          </section>
          
          {/* Manifesto */}
          <section className="my-16 p-10 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg">
            <h2 className="font-heading text-3xl mb-6 text-center">O Caminho da Unidade</h2>
            <p className="text-center italic text-lg mb-8">Nosso Manifesto</p>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-muted-foreground">
                Num mundo de fragmentação, buscamos integração. Na era da informação superficial, cultivamos conhecimento profundo. Diante da pressa constante, promovemos contemplação consciente.
              </p>
              
              <p className="text-muted-foreground">
                Acreditamos que os textos sagrados e as tradições espirituais de todas as culturas contêm chaves preciosas para nossa evolução individual e coletiva, mas que estas chaves precisam ser reinterpretadas para o contexto contemporâneo sem perder sua essência.
              </p>
              
              <p className="text-muted-foreground">
                Na Unitas, comprometemo-nos a honrar a integridade de cada tradição enquanto revelamos os fios dourados que as conectam. Utilizamos tecnologia não como substituta da experiência espiritual, mas como ferramenta para torná-la mais acessível, envolvente e aplicável.
              </p>
              
              <p className="text-muted-foreground">
                Convidamos cada buscador a transcender fronteiras artificiais entre tradições, entre teoria e prática, entre o espiritual e o cotidiano — redescobrindo a unidade fundamental que conecta todos os caminhos de sabedoria.
              </p>
            </div>
          </section>
          
          {/* Equipe */}
          <section className="my-16">
            <h2 className="font-heading text-3xl mb-8">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 mb-4 flex items-center justify-center">
                    <span className="text-xl text-primary">{member.name[0]}</span>
                  </div>
                  <h3 className="font-heading text-xl mb-2">{member.name}</h3>
                  <p className="text-primary/80 text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Call-to-action */}
          <section className="my-16 text-center">
            <h2 className="font-heading text-3xl mb-6">Junte-se a Esta Jornada</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Estamos apenas começando a construir esta visão de uma plataforma que integra sabedoria ancestral e tecnologia moderna. Faça parte desta comunidade de buscadores e contribua para a preservação e revitalização do conhecimento espiritual.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Começar Agora</Button>
              <Button variant="outline" size="lg">Entrar em Contato</Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
