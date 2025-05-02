
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save, Lock, Shield, Bell, Palette } from 'lucide-react';
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
import { Checkbox } from "@/components/ui/checkbox";
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
  
  // Notifications settings - fixed from true to boolean type
  const [emailUpdates, setEmailUpdates] = useState<boolean>(user?.preferences?.emailUpdates || true);
  const [notifications, setNotifications] = useState<boolean>(user?.preferences?.notifications || true);
  
  // Appearance settings - specify the exact type for theme
  const [theme, setTheme] = useState<"light" | "dark" | "system">(user?.preferences?.theme || 'light');
  const [language, setLanguage] = useState(user?.preferences?.language || 'pt-BR');

  // Security settings
  const [profileVisibility, setProfileVisibility] = useState<"public" | "private" | "followers">(
    user?.preferences?.profileVisibility || 'public'
  );
  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(
    user?.preferences?.twoFactorEnabled || false
  );
  const [activityLogging, setActivityLogging] = useState<boolean>(
    user?.preferences?.activityLogging || true
  );

  // Create handler functions instead of directly passing useState setters
  const handleEmailUpdatesChange = (checked: boolean) => {
    setEmailUpdates(checked);
  };

  const handleNotificationsChange = (checked: boolean) => {
    setNotifications(checked);
  };

  const handleThemeChange = (value: "light" | "dark" | "system") => {
    setTheme(value);
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const handleProfileVisibilityChange = (value: "public" | "private" | "followers") => {
    setProfileVisibility(value);
  };

  const handleTwoFactorChange = (checked: boolean) => {
    setTwoFactorEnabled(checked);
  };

  const handleActivityLoggingChange = (checked: boolean) => {
    setActivityLogging(checked);
  };

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

  const handleSaveSecurity = async () => {
    setIsSubmitting(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, this would update the user's settings in the backend
    toast({
      title: "Configurações salvas",
      description: "Suas configurações de segurança foram atualizadas",
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
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="notifications">
                  <Bell className="h-4 w-4 mr-2" />
                  Notificações
                </TabsTrigger>
                <TabsTrigger value="appearance">
                  <Palette className="h-4 w-4 mr-2" />
                  Aparência
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Shield className="h-4 w-4 mr-2" />
                  Segurança
                </TabsTrigger>
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
                        onCheckedChange={handleEmailUpdatesChange}
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
                        onCheckedChange={handleNotificationsChange}
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
                      <Select value={theme} onValueChange={handleThemeChange}>
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
                      <Select value={language} onValueChange={handleLanguageChange}>
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

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Segurança e Privacidade</CardTitle>
                    <CardDescription>
                      Gerencie suas configurações de segurança e privacidade
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="profile-visibility">Visibilidade do Perfil</Label>
                      <Select value={profileVisibility} onValueChange={handleProfileVisibilityChange}>
                        <SelectTrigger id="profile-visibility" className="w-full md:w-[200px]">
                          <SelectValue placeholder="Selecione a visibilidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Público</SelectItem>
                          <SelectItem value="followers">Apenas Seguidores</SelectItem>
                          <SelectItem value="private">Privado</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground mt-1">
                        Controle quem pode ver seu perfil e progresso
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="two-factor">Autenticação de Dois Fatores</Label>
                        <p className="text-sm text-muted-foreground">
                          Adicione uma camada extra de segurança à sua conta
                        </p>
                      </div>
                      <Switch
                        id="two-factor"
                        checked={twoFactorEnabled}
                        onCheckedChange={handleTwoFactorChange}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="activity-log">Registro de Atividades</Label>
                        <p className="text-sm text-muted-foreground">
                          Mantenha um histórico de acessos e atividades da sua conta
                        </p>
                      </div>
                      <Switch
                        id="activity-log"
                        checked={activityLogging}
                        onCheckedChange={handleActivityLoggingChange}
                      />
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="font-medium mb-2">Ações de Segurança</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <Lock className="mr-2 h-4 w-4" />
                          Alterar Senha
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                          Desativar Conta
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="ml-auto" 
                      onClick={handleSaveSecurity}
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
                          Salvar configurações
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
