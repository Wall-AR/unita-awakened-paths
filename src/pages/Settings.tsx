
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Settings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Notifications settings
  const [emailUpdates, setEmailUpdates] = useState(user?.preferences?.emailUpdates || true);
  const [notifications, setNotifications] = useState(user?.preferences?.notifications || true);
  
  // Appearance settings
  const [theme, setTheme] = useState(user?.preferences?.theme || 'light');
  const [language, setLanguage] = useState(user?.preferences?.language || 'pt-BR');

  const handleSaveNotifications = async () => {
    setIsSubmitting(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, this would update the user's settings in the backend
    toast({
      title: "Configurações salvas",
      description: "Suas preferências de notificação foram atualizadas",
    });
    
    setIsSubmitting(false);
  };

  const handleSaveAppearance = async () => {
    setIsSubmitting(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, this would update the user's settings in the backend
    toast({
      title: "Configurações salvas",
      description: "Suas preferências de aparência foram atualizadas",
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-heading mb-8">Configurações</h1>
            
            <Tabs defaultValue="notifications">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="notifications">Notificações</TabsTrigger>
                <TabsTrigger value="appearance">Aparência</TabsTrigger>
              </TabsList>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferências de Notificação</CardTitle>
                    <CardDescription>
                      Configure como você deseja receber notificações da plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="email-updates">Atualizações por email</Label>
                        <p className="text-sm text-muted-foreground">
                          Receba novidades sobre cursos, atualizações e ofertas especiais
                        </p>
                      </div>
                      <Switch
                        id="email-updates"
                        checked={emailUpdates}
                        onCheckedChange={setEmailUpdates}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="notifications">Notificações no site</Label>
                        <p className="text-sm text-muted-foreground">
                          Receba notificações durante a navegação na plataforma
                        </p>
                      </div>
                      <Switch
                        id="notifications"
                        checked={notifications}
                        onCheckedChange={setNotifications}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="ml-auto" 
                      onClick={handleSaveNotifications}
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
                          Salvar preferências
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="appearance">
                <Card>
                  <CardHeader>
                    <CardTitle>Aparência e Idioma</CardTitle>
                    <CardDescription>
                      Personalize como a plataforma aparece para você
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Tema</Label>
                      <Select value={theme} onValueChange={setTheme}>
                        <SelectTrigger id="theme" className="w-full md:w-[200px]">
                          <SelectValue placeholder="Selecione um tema" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Claro</SelectItem>
                          <SelectItem value="dark">Escuro</SelectItem>
                          <SelectItem value="system">Sistema</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="language">Idioma</Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger id="language" className="w-full md:w-[200px]">
                          <SelectValue placeholder="Selecione um idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                          <SelectItem value="en-US">English (US)</SelectItem>
                          <SelectItem value="es-ES">Español</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="ml-auto" 
                      onClick={handleSaveAppearance}
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
                          Salvar preferências
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
