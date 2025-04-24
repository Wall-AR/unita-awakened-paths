
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio do formulário
    setTimeout(() => {
      setFormSubmitted(true);
    }, 500);
  };

  const contactOptions = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email",
      description: "Para dúvidas gerais e suporte",
      contact: "contato@unitas.org",
      action: "Enviar Email",
      link: "mailto:contato@unitas.org"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Chat ao Vivo",
      description: "Disponível em dias úteis das 9h às 18h",
      contact: "Inicie uma conversa",
      action: "Abrir Chat",
      link: "#chat"
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      title: "FAQ",
      description: "Perguntas frequentes e respostas",
      contact: "Base de conhecimento",
      action: "Ver Perguntas",
      link: "/faq"
    }
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
                <BreadcrumbPage>Contato</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Entre em Contato
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Estamos aqui para responder suas dúvidas, receber seus comentários e ajudar em sua jornada espiritual.
          </p>

          {/* Opções de Contato */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{option.icon}</div>
                  <h3 className="font-heading text-xl mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                  <p className="font-medium mb-4">{option.contact}</p>
                  <Button variant="outline" asChild>
                    <Link to={option.link}>{option.action}</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Formulário de Contato */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 md:p-8">
            <h2 className="font-heading text-2xl mb-6">Envie-nos uma Mensagem</h2>
            
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                  <span className="text-primary text-2xl">✓</span>
                </div>
                <h3 className="font-heading text-xl mb-2">Mensagem Enviada!</h3>
                <p className="text-muted-foreground mb-6">
                  Agradecemos pelo seu contato. Nossa equipe responderá o mais breve possível.
                </p>
                <Button onClick={() => setFormSubmitted(false)}>Enviar Nova Mensagem</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                    <Input id="name" placeholder="Seu nome completo" className="bg-background/50" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" placeholder="seu.email@exemplo.com" className="bg-background/50" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Assunto</label>
                  <Select>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="support">Suporte Técnico</SelectItem>
                      <SelectItem value="feedback">Feedback e Sugestões</SelectItem>
                      <SelectItem value="courses">Dúvidas sobre Cursos</SelectItem>
                      <SelectItem value="billing">Assinaturas e Pagamentos</SelectItem>
                      <SelectItem value="partnership">Parcerias</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva sua dúvida ou mensagem em detalhes..." 
                    className="bg-background/50 min-h-[150px]" 
                    required 
                  />
                </div>
                
                <div className="flex items-start">
                  <Checkbox id="newsletter" className="mt-1" />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-muted-foreground">
                    Gostaria de receber nossa newsletter com conteúdos exclusivos sobre tradições espirituais.
                  </label>
                </div>
                
                <div>
                  <Button type="submit">Enviar Mensagem</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
