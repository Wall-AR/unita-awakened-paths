
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Loader2, Save, Award, ChevronRight } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [username, setUsername] = useState(user?.username || '');
  const [email] = useState(user?.email || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, this would update the user's profile in the backend
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram atualizadas com sucesso",
    });
    
    setIsSubmitting(false);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-heading mb-8">Perfil do Usuário</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"> {/* Added items-start for alignment */}
              <div className="col-span-1 space-y-8"> {/* Wrapper div for left column cards */}
                <Card>
                  <CardHeader>
                    <CardTitle>Seu Avatar</CardTitle>
                  <CardDescription>Como você aparece na comunidade</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-6">
                  <Avatar className="h-32 w-32 mb-4 border-4 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary text-4xl">
                      {getUserInitials(displayName || username)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="font-heading font-medium text-xl">{displayName || username}</p>
                    <p className="text-muted-foreground text-sm">{email}</p>
                  </div>
                </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" disabled>Alterar Imagem</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Minhas Conquistas</CardTitle>
                    <CardDescription>Acompanhe seu progresso e medalhas.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <Link to="/profile/achievements">
                        <Award className="mr-2 h-5 w-5 text-primary" />
                        Ver Conquistas
                        <ChevronRight className="ml-auto h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="col-span-1 lg:col-span-2">
                <form onSubmit={handleSubmit}>
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                    <CardDescription>
                      Atualize seus dados pessoais e como você aparece na plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="displayName">Nome de Exibição</Label>
                      <Input
                        id="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="border-primary/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="username">Nome de usuário</Label>
                      <Input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border-primary/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        value={email}
                        disabled
                        className="border-primary/20 bg-muted/50"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="ml-auto" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Salvando...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Salvar alterações
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
