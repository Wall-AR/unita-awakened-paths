
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { getMissions } from "@/services/missionService";
import { getMasters } from "@/services/masterService"; 
import { Mission } from "@/types/mission";
import { Master } from "@/types/master";
import AccessBadge from "@/components/ui/AccessBadge"; 
import { useAuth } from "@/contexts/AuthContext"; // Added
import { canAccessContent } from "@/lib/permissions"; // Added
import { 
  BookOpen, Clock, CheckCircle, Star, 
  AlarmClock, Medal, Lightbulb, Flame, Hand, 
  HeartHandshake, Compass, BrainCircuit, Lock // Added Lock
} from "lucide-react";

const Missions = () => {
  const { user } = useAuth(); // Get user

  const { data: missionsData, isLoading: isLoadingMissions, error: errorMissions } = useQuery<Mission[], Error>({
    queryKey: ['missions'],
    queryFn: getMissions
  });

  const { data: mastersData, isLoading: isLoadingMasters, error: errorMasters } = useQuery<Master[], Error>({
    queryKey: ['masters'],
    queryFn: getMasters // Fetch all masters to easily find them by ID
  });

  // Encontrando os mestres relacionados
  const getMaster = (masterId: string) => {
    return mastersData?.find(master => master.id === masterId);
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

  if (isLoadingMissions || isLoadingMasters) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <div className="container mx-auto px-4 py-8 text-center">Loading missions...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (errorMissions || errorMasters) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <div className="container mx-auto px-4 py-8 text-center text-red-500">
            {errorMissions && <p>Error loading missions: {errorMissions.message}</p>}
            {errorMasters && <p>Error loading masters: {errorMasters.message}</p>}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              {missionsData?.map((mission) => {
                const master = getMaster(mission.masterId);
                const hasAccess = canAccessContent(user?.subscriptionTier, mission, 'mission');
                const cardClasses = `bg-card/30 backdrop-blur-sm border border-border/50 overflow-hidden relative ${!hasAccess ? 'opacity-60 cursor-not-allowed' : 'hover:border-primary/30'}`;
                
                const handleMissionCardClick = (e: React.MouseEvent) => {
                  if (!hasAccess) {
                    e.preventDefault();
                    alert("Você não tem acesso a esta missão. Considere fazer um upgrade no seu plano.");
                    // navigate('/pricing');
                  } else {
                    // navigate(`/missions/${mission.id}`); // Or use Link component if not preventing default
                  }
                };

                return (
                  <Card key={mission.id} className={cardClasses} onClick={handleMissionCardClick}>
                    {!hasAccess && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10 rounded-lg">
                        <Lock className="h-10 w-10 text-white/70" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className={!hasAccess ? 'pointer-events-none' : ''}>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge className={`${levelColors[mission.level]} whitespace-nowrap`}>
                              {formatLevel(mission.level)}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1 whitespace-nowrap">
                              {missionTypeIcons[mission.type]}
                              {formatType(mission.type)}
                            </Badge>
                            <AccessBadge contentType="mission" requiredTier={mission.requiredTier} />
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
                          {mission.rewards.attributes && Object.entries(mission.rewards.attributes).map(([attr, val]) => (
                            <Badge key={attr} variant="outline" className="bg-primary/10">
                              +{val} {attr}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="default" size="sm" asChild={hasAccess} disabled={!hasAccess}>
                          {hasAccess ? (
                            <Link to={`/missions/${mission.id}`}>Iniciar Missão</Link>
                          ) : (
                            <span>Acesso Requerido</span>
                          )}
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
