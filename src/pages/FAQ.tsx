
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Sobre a Plataforma",
      questions: [
        {
          question: "O que é a Unitas?",
          answer: "A Unitas é uma plataforma de aprendizado espiritual gamificada que apresenta tradições místicas e espirituais de forma acessível e interativa, revelando suas conexões e aplicações práticas para o mundo moderno."
        },
        {
          question: "Qual é a filosofia por trás da Unitas?",
          answer: "Acreditamos que as diversas tradições espirituais são expressões culturais diferentes da mesma verdade essencial. Nossa filosofia está baseada na integração de conhecimentos, respeito à autenticidade de cada tradição e aplicação prática da sabedoria para transformação pessoal."
        },
        {
          question: "A Unitas está associada a alguma religião específica?",
          answer: "Não. A Unitas é uma plataforma independente que respeita e apresenta diversas tradições espirituais sem afiliação a nenhuma religião específica. Nosso objetivo é mostrar a sabedoria universal que transcende fronteiras religiosas e culturais."
        }
      ]
    },
    {
      title: "Conteúdos e Cursos",
      questions: [
        {
          question: "Como os cursos são estruturados?",
          answer: "Cada curso é dividido em módulos temáticos (5-7 por curso), com 3-5 lições por módulo, complementadas por práticas aplicadas e avaliações interativas. Os cursos progridem desde o nível introdutório (gratuito) até níveis avançados e iniciáticos."
        },
        {
          question: "Quão profundo é o conteúdo oferecido?",
          answer: "Oferecemos cinco níveis de profundidade, desde o introdutório até o iniciático. Nosso conteúdo é rigoroso academicamente, autêntico às tradições originais, mas apresentado de forma acessível e aplicável à vida contemporânea."
        },
        {
          question: "Que tradições espirituais são abordadas na plataforma?",
          answer: "A Unitas abrange tradições ocidentais e orientais, incluindo: cristianismo esotérico, hermetismo, cabala, gnosticismo, budismo, vedanta, taoísmo, sufismo e tradições xamânicas, entre outras."
        }
      ]
    },
    {
      title: "Sistema de Gamificação",
      questions: [
        {
          question: "Como funciona o sistema de níveis e progressão?",
          answer: "Você ganha XP (pontos de experiência) ao completar lições, práticas e missões. Existem 100 níveis de progressão geral, além de níveis específicos por tradição espiritual estudada. Níveis-chave (10, 25, 50, 75, 100) desbloqueiam recursos e conteúdos especiais."
        },
        {
          question: "O que são os Mestres Guias?",
          answer: "Mestres Guias são personificações de figuras históricas e arquetípicas das tradições espirituais que servem como seus mentores na plataforma. Cada mestre oferece missões alinhadas com seus ensinamentos e tem um estilo único de comunicação. Seu relacionamento com cada mestre evolui conforme você completa suas missões."
        },
        {
          question: "Como funciona o Sistema de Atributos Espirituais?",
          answer: "O SAE monitora cinco atributos fundamentais: Sabedoria, Compaixão, Harmonia, Integridade e Respeito. Estes evoluem com base em suas atividades na plataforma e avaliações da comunidade, criando um perfil espiritual único que influencia recomendações e desbloqueios de conteúdo."
        }
      ]
    },
    {
      title: "Comunidade e Social",
      questions: [
        {
          question: "O que são os Círculos de Estudo?",
          answer: "Círculos de Estudo são grupos de 5-12 usuários com interesses alinhados que estudam e praticam juntos. Podem ser focados em cursos específicos, tradições espirituais ou práticas particulares, oferecendo um ambiente de apoio mútuo e aprofundamento."
        },
        {
          question: "Como a comunidade é moderada para manter um ambiente construtivo?",
          answer: "Temos diretrizes claras de comunicação respeitosa, moderadores treinados, e um sistema de reputação que incentiva contribuições construtivas. Nosso sistema de qualificação espiritual também encoraja o desenvolvimento de atributos como respeito e compaixão."
        }
      ]
    },
    {
      title: "Assinaturas e Pagamentos",
      questions: [
        {
          question: "Qual conteúdo é gratuito e qual é pago?",
          answer: "O nível 1 (introdutório) de todos os cursos é gratuito, assim como porções do nível 2. Também oferecemos acesso gratuito a funções básicas do fórum e missões diárias limitadas. O conteúdo mais avançado, ferramentas especiais e participação integral na comunidade requerem assinatura."
        },
        {
          question: "Quais são as opções de assinatura?",
          answer: "Oferecemos três planos: Buscador ($8.99/mês), Iniciado ($14.99/mês) e Adepto ($19.99/mês), com diferentes níveis de acesso a conteúdos, mestres guias e ferramentas. Todos os planos têm desconto para compromisso anual."
        },
        {
          question: "Existe algum programa para pessoas com limitações financeiras?",
          answer: "Sim, oferecemos um programa de bolsas para usuários que não podem pagar pela assinatura. Também temos um sistema de créditos que pode ser ganho através de contribuições significativas para a comunidade."
        }
      ]
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
                <BreadcrumbPage>Perguntas Frequentes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Perguntas Frequentes
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Encontre respostas para as dúvidas mais comuns sobre a plataforma Unitas, nossos cursos, sistema de progressão e comunidade.
          </p>

          {faqCategories.map((category, index) => (
            <section key={index} className="mb-12">
              <h2 className="font-heading text-2xl mb-6">{category.title}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`} className="border border-border/50 rounded-lg mb-4 px-6 bg-card/30 backdrop-blur-sm">
                    <AccordionTrigger className="text-lg font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}

          {/* Contato para mais perguntas */}
          <div className="mt-12 p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 text-center">
            <h3 className="font-heading text-2xl mb-4">Ainda tem perguntas?</h3>
            <p className="mb-6 text-muted-foreground">
              Nossa equipe está disponível para esclarecer qualquer dúvida adicional que você possa ter sobre a plataforma.
            </p>
            <Button>Entre em Contato</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
