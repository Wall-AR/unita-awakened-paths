
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Terms = () => {
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
                <BreadcrumbPage>Termos de Uso</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Termos de Uso
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Última atualização: 20 de Abril de 2025
          </p>

          <div className="prose prose-invert max-w-3xl">
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar a plataforma Unitas, você concorda com estes Termos de Uso e com nossa Política de Privacidade. Se não concordar com estes termos, por favor, não utilize nossa plataforma.
            </p>
            
            <h2>2. Descrição do Serviço</h2>
            <p>
              A Unitas é uma plataforma educacional que oferece conteúdo e experiências relacionadas a tradições espirituais e filosóficas diversas. Nossos serviços incluem cursos, fóruns de discussão, ferramentas interativas e recursos educacionais.
            </p>
            
            <h2>3. Elegibilidade</h2>
            <p>
              Nossos serviços estão disponíveis para indivíduos maiores de 18 anos. Menores de idade podem utilizar a plataforma com supervisão e consentimento dos pais ou responsáveis legais.
            </p>
            
            <h2>4. Contas de Usuário</h2>
            <p>
              Para acessar determinadas funcionalidades da plataforma, é necessário criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.
            </p>
            
            <h2>5. Conduta do Usuário</h2>
            <p>
              Ao utilizar nossa plataforma, você concorda em:
            </p>
            <ul>
              <li>Não violar qualquer lei ou regulamento aplicável</li>
              <li>Respeitar os direitos de outros usuários e tratar todos com dignidade e respeito</li>
              <li>Não publicar conteúdo difamatório, obsceno, ameaçador ou que incite ódio</li>
              <li>Não coletar ou solicitar informações pessoais de outros usuários</li>
              <li>Não utilizar a plataforma para enviar spam ou conteúdo não solicitado</li>
              <li>Não tentar acessar áreas restritas da plataforma</li>
            </ul>
            
            <h2>6. Conteúdo e Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado na plataforma Unitas, incluindo textos, imagens, vídeos, áudios, design e código, é protegido por direitos autorais e pertence à Unitas ou a terceiros que licenciaram seu uso. Você não está autorizado a copiar, distribuir, modificar ou criar trabalhos derivados baseados em nosso conteúdo sem autorização expressa.
            </p>
            
            <h2>7. Assinaturas e Pagamentos</h2>
            <p>
              Determinados conteúdos e funcionalidades exigem assinatura paga. Os detalhes sobre preços, períodos de cobrança e políticas de cancelamento estão disponíveis na seção de Assinaturas da plataforma.
            </p>
            
            <h2>8. Política de Cancelamento e Reembolso</h2>
            <p>
              Oferecemos um período de garantia de 14 dias para todas as assinaturas. Se você não estiver satisfeito com nossos serviços, pode solicitar o cancelamento e reembolso integral dentro desse período.
            </p>
            
            <h2>9. Limitação de Responsabilidade</h2>
            <p>
              A Unitas fornece conteúdo educacional e informativo, não oferecendo aconselhamento médico, psicológico ou legal. Não nos responsabilizamos por decisões tomadas com base em nosso conteúdo. Nossa plataforma é fornecida "como está", sem garantias de qualquer tipo.
            </p>
            
            <h2>10. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor após sua publicação na plataforma. O uso continuado da plataforma após as alterações constitui aceitação dos novos termos.
            </p>
            
            <h2>11. Lei Aplicável</h2>
            <p>
              Estes termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
            </p>
            
            <h2>12. Contato</h2>
            <p>
              Se tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo email: legal@unitas.org.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
