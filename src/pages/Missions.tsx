
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { missions } from "@/data/missionsData";
import { masterGuides } from "@/data/mastersData.expanded";
import { 
  BookOpen, Clock, CheckCircle, Star, 
  AlarmClock, Medal, Lightbulb, Flame, Hand, 
  HeartHandshake, Compass, BrainCircuit 
} from "lucide-react";

const Missions = () => {
  // Encontrando os mestres relacionados
  const getMaster = (masterId: string) => {
    return masterGuides.find(master => master.id === masterId);
  };

  // Ícones por tipo de missão
  const missionTypeIcons: Record<string, React.ReactNode> = {
    'study': <BookOpen className="h-4 w-4" />,
    'practice': <Flame className="h-4 w-4" />,
    'service': <HeartHandshake className="h-4 w-4" />,
    'creativity': <Lightbulb className="h-4 w-4" />,
    'self-knowledge': <BrainCircuit className="h-4 w-4" />,
    'multiple': <Compass className="h-4 w-4" />,
  };

  // Cores por nível
  const levelColors: Record<string, string> = {
    'beginner': 'bg-green-500/20 text-green-200',
    'intermediate': 'bg-blue-500/20 text-blue-200',
    'advanced': 'bg-purple-500/20 text-purple-200'
  };

  // Funções de formatação
  const formatLevel = (level: string) => {
    switch (level) {
      case 'beginner': return 'Iniciante';
      case 'intermediate': return 'Intermediário';
      case 'advanced': return 'Avançado';
      default: return level;
    }
  };

  const formatType = (type: string) => {
    switch (type) {
      case 'study': return 'Estudo';
      case 'practice': return 'Prática';
      case 'service': return 'Serviço';
      case 'creativity': return 'Criatividade';
      case 'self-knowledge': return 'Autoconhecimento';
      case 'multiple': return 'Múltiplo';
      default: return type;
    }
  };

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
                <BreadcrumbPage>Missões</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Missões dos Mestres
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Desafios práticos designados pelos mestres para aplicar os ensinamentos em sua vida.
          </p>

          {/* Introdução */}
          <section className="mb-16 p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <h2 className="font-heading text-2xl mb-4">O Sistema de Missões</h2>
            <p className="text-muted-foreground mb-6">
              Na Unitas, as missões são uma ponte entre o conhecimento teórico e a aplicação prática. 
              Cada mestre atribui missões alinhadas com sua tradição e ensinamentos específicos, 
              permitindo que você experimente diferentes aspectos da sabedoria espiritual em sua vida cotidiana.
            </p>
            <p className="text-muted-foreground">
              Ao completar missões, você não apenas ganha pontos de experiência e recompensas, 
              mas também desenvolve atributos espirituais e aprofunda seu relacionamento com os mestres, 
              desbloqueando novos níveis de conhecimento e orientação.
            </p>
          </section>

          {/* Missões Diárias */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl mb-6 flex items-center">
              <AlarmClock className="h-5 w-5 mr-2" />
              Missões Disponíveis
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missions.map((mission, index) => {
                const master = getMaster(mission.masterId);
                return (
                  <Card key={index} className="bg-card/30 backdrop-blur-sm border border-border/50 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={levelColors[mission.level]}>
                              {formatLevel(mission.level)}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              {missionTypeIcons[mission.type]}
                              {formatType(mission.type)}
                            </Badge>
                          </div>
                          <h3 className="font-heading text-xl">{mission.title}</h3>
                        </div>
                        {master && (
                          <div className="text-4xl">{master.icon}</div>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4">{mission.description}</p>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{mission.duration}</span>
                        </div>
                        {master && (
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1" />
                            <span>Mestre: {master.name}</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <Medal className="h-4 w-4 mr-1" />
                          <span>{mission.rewards.xp} XP</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {mission.rewards.attributes && Object.entries(mission.rewards.attributes).map(([attr, val], i) => (
                            <Badge key={i} variant="outline" className="bg-primary/10">
                              +{val} {attr}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="default" size="sm">
                          Iniciar Missão
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
          
          {/* Missões em Progresso */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl mb-6 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Seu Progresso
            </h2>
            
            <Card className="bg-card/30 backdrop-blur-sm border border-border/50 p-8">
              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground mb-4">
                  Você ainda não tem missões em andamento.
                </p>
                <Button>
                  Explorar Todas as Missões
                </Button>
              </div>
            </Card>
          </section>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="font-heading text-3xl mb-6">Comece Sua Jornada Prática</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              As missões são a ponte entre conhecimento e sabedoria vivida.
              Registre-se hoje para receber sua primeira missão de um mestre guia.
            </p>
            <Button size="lg">Criar Conta Gratuita</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Missions;
