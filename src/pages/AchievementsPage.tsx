import { Header } from "@/components/Header"; 
import { Footer } from "@/components/Footer"; 
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Corrected import for shadcn/ui
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge as UiBadge } from "@/components/ui/badge"; // Renamed to avoid conflict
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@iconify/react";
import { format } from 'date-fns';
import { Link } from "react-router-dom";
// import { useAuth } from "@/contexts/AuthContext"; // Can be used for user context

// Mock Data Structures
interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string; // Iconify string
  points?: number;
  earned: boolean;
  dateEarned?: string; // ISO date string
  category: 'Exploração' | 'Aprendizado' | 'Comunidade' | 'Maestria';
}

interface Title {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
}

interface UserBadge { // Renamed to avoid conflict with ui/badge
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  rarity: 'Comum' | 'Raro' | 'Épico';
}

// Mock Data
const mockAchievements: Achievement[] = [
  { id: 'ach1', name: 'Primeiros Passos', description: 'Complete seu primeiro curso.', icon: 'ph:footprints-bold', points: 10, earned: true, dateEarned: '2023-05-10T10:00:00Z', category: 'Aprendizado' },
  { id: 'ach2', name: 'Explorador de Caminhos', description: 'Visite 3 caminhos diferentes.', icon: 'ph:compass-tool-bold', points: 20, earned: true, dateEarned: '2023-06-15T14:30:00Z', category: 'Exploração' },
  { id: 'ach3', name: 'Amigo da Comunidade', description: 'Faça seu primeiro post na comunidade.', icon: 'ph:users-three-bold', points: 15, earned: false, category: 'Comunidade' },
  { id: 'ach4', name: 'Mestre Iniciante', description: 'Alcance o nível 5 em qualquer caminho.', icon: 'ph:student-bold', points: 50, earned: true, dateEarned: '2023-08-01T18:00:00Z', category: 'Maestria' },
  { id: 'ach5', name: 'Curioso', description: 'Explore 5 artigos do blog.', icon: 'ph:newspaper-clipping-bold', points: 10, earned: true, dateEarned: '2023-07-20T11:00:00Z', category: 'Aprendizado'},
  { id: 'ach6', name: 'Determinado', description: 'Complete 3 missões de um mestre.', icon: 'ph:flag-checkered-bold', points: 30, earned: false, category: 'Maestria' },
  { id: 'ach7', name: 'Sábio Conselheiro', description: 'Receba 10 curtidas em posts na comunidade.', icon: 'ph:hands-clapping-bold', points: 25, earned: false, category: 'Comunidade' },
  { id: 'ach8', name: 'Peregrino', description: 'Complete todas as missões de um caminho.', icon: 'ph:mountains-bold', points: 100, earned: false, category: 'Exploração' },
];

const mockTitles: Title[] = [
  { id: 'title1', name: 'Neófito', description: 'Iniciou sua jornada de conhecimento.', icon: 'ph:sparkle-bold', earned: true },
  { id: 'title2', name: 'Estudante', description: 'Dedicado ao aprendizado contínuo.', icon: 'ph:book-open-text-bold', earned: true },
  { id: 'title3', name: 'Explorador', description: 'Aventureiro dos caminhos da sabedoria.', icon: 'ph:map-trifold-bold', earned: false },
  { id: 'title4', name: 'Guardião do Conhecimento', description: 'Comprometido com a preservação da sabedoria.', icon: 'ph:books-bold', earned: false},
];

const mockUserBadges: UserBadge[] = [
  { id: 'badge1', name: 'Participante Ativo', description: 'Contribuiu na comunidade.', icon: 'ph:chat-circle-dots-bold', earned: true, rarity: 'Comum' },
  { id: 'badge2', name: 'Mestre de Missões', description: 'Completou 10 missões.', icon: 'ph:scroll-bold', earned: false, rarity: 'Raro' },
  { id: 'badge3', name: 'Lenda da Unitas', description: 'Alcançou o nível máximo.', icon: 'ph:crown-simple-bold', earned: false, rarity: 'Épico' },
  { id: 'badge4', name: 'Pioneiro', description: 'Juntou-se à Unitas no primeiro mês.', icon: 'ph:rocket-launch-bold', earned: true, rarity: 'Raro' },
];


const AchievementsPage = () => {
  // const { user } = useAuth(); // Example: if user data is needed

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Perfil", href: "/profile" }, // Assuming a general profile page exists
    { label: "Conquistas", href: "/profile/achievements" },
  ];

  const renderRarityBadge = (rarity: UserBadge['rarity']) => {
    let colorClass = "";
    switch(rarity) {
      case 'Comum': colorClass = "bg-gray-500"; break;
      case 'Raro': colorClass = "bg-blue-500"; break;
      case 'Épico': colorClass = "bg-purple-600"; break;
      default: colorClass = "bg-gray-400";
    }
    return <UiBadge className={`${colorClass} text-white`}>{rarity}</UiBadge>;
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/profile">Perfil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Conquistas</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <header className="my-6">
          <h1 className="text-3xl font-bold">Minhas Conquistas</h1>
          <p className="text-muted-foreground">Veja seu progresso, conquistas, títulos e medalhas.</p>
        </header>

        {/* Optional: User Stats Summary Card */}
        <Card className="mb-8 bg-card/50">
          <CardHeader>
            <CardTitle>Resumo do Progresso</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-around items-center">
            <div className="text-center">
              <Icon icon="ph:medal-bold" className="text-4xl text-primary mx-auto mb-1" />
              <p className="text-xl font-semibold">{mockAchievements.filter(a => a.earned).length} / {mockAchievements.length}</p>
              <p className="text-sm text-muted-foreground">Conquistas</p>
            </div>
            <div className="text-center">
              <Icon icon="ph:identification-badge-bold" className="text-4xl text-primary mx-auto mb-1" />
              <p className="text-xl font-semibold">{mockTitles.filter(t => t.earned).length} / {mockTitles.length}</p>
              <p className="text-sm text-muted-foreground">Títulos</p>
            </div>
            <div className="text-center">
              <Icon icon="ph:shield-checkered-bold" className="text-4xl text-primary mx-auto mb-1" />
              <p className="text-xl font-semibold">{mockUserBadges.filter(b => b.earned).length} / {mockUserBadges.length}</p>
              <p className="text-sm text-muted-foreground">Medalhas</p>
            </div>
             <div className="text-center">
              <Icon icon="ph:star-four-bold" className="text-4xl text-yellow-400 mx-auto mb-1" />
              <p className="text-xl font-semibold">{mockAchievements.filter(a => a.earned).reduce((sum, a) => sum + (a.points || 0), 0)}</p>
              <p className="text-sm text-muted-foreground">Pontos Totais</p>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="achievements" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            <TabsTrigger value="titles">Títulos</TabsTrigger>
            <TabsTrigger value="badges">Medalhas</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements">
            <ScrollArea className="h-[600px] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockAchievements.sort((a,b) => Number(b.earned) - Number(a.earned) || (a.name.localeCompare(b.name))).map(ach => (
                  <Card key={ach.id} className={`transition-opacity ${ach.earned ? 'opacity-100 border-primary/50' : 'opacity-60'}`}>
                    <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                      <Icon icon={ach.icon} className={`text-3xl ${ach.earned ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div>
                        <CardTitle className="text-lg">{ach.name}</CardTitle>
                        <CardDescription>{ach.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        {ach.points && <span>{ach.points} Pontos</span>}
                        <UiBadge variant={ach.earned ? "default" : "outline"}>{ach.category}</UiBadge>
                      </div>
                      {ach.earned && ach.dateEarned && (
                        <p className="text-xs text-green-500 mt-2">
                          Conquistado em: {format(new Date(ach.dateEarned), 'dd/MM/yyyy')}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="titles">
            <ScrollArea className="h-[500px] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockTitles.sort((a,b) => Number(b.earned) - Number(a.earned) || (a.name.localeCompare(b.name))).map(title => (
                  <Card key={title.id} className={`transition-opacity ${title.earned ? 'opacity-100 border-secondary/50' : 'opacity-60'}`}>
                    <CardHeader className="flex flex-row items-center gap-4">
                       <Icon icon={title.icon} className={`text-3xl ${title.earned ? 'text-secondary' : 'text-muted-foreground'}`} />
                      <div>
                        <CardTitle>{title.name}</CardTitle>
                        <CardDescription>{title.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                        {title.earned ? <UiBadge variant="secondary">Conquistado</UiBadge> : <UiBadge variant="outline">Não Conquistado</UiBadge>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="badges">
            <ScrollArea className="h-[500px] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockUserBadges.sort((a,b) => Number(b.earned) - Number(a.earned) || (a.name.localeCompare(b.name))).map(badge => (
                  <Card key={badge.id} className={`transition-opacity ${badge.earned ? 'opacity-100 border-accent/50' : 'opacity-60'}`}>
                    <CardHeader className="text-center">
                      <Icon icon={badge.icon} className={`text-5xl mx-auto mb-2 ${badge.earned ? 'text-accent' : 'text-muted-foreground'}`} />
                      <CardTitle>{badge.name}</CardTitle>
                       {renderRarityBadge(badge.rarity)}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-3">{badge.description}</p>
                      {badge.earned ? <UiBadge className="w-full justify-center bg-accent hover:bg-accent/90">Conquistada</UiBadge> : <UiBadge variant="outline" className="w-full justify-center">Não Conquistada</UiBadge>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
};

export default AchievementsPage;
