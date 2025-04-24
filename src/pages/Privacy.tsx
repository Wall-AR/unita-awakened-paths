
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Privacy = () => {
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
                <BreadcrumbPage>Política de Privacidade</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Política de Privacidade
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Última atualização: 20 de Abril de 2025
          </p>

          <div className="prose prose-invert max-w-3xl">
            <h2>1. Introdução</h2>
            <p>
              Na Unitas, respeitamos sua privacidade e estamos comprometidos com a proteção de seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações ao utilizar nossa plataforma.
            </p>
            
            <h2>2. Informações que Coletamos</h2>
            <p>
              Coletamos os seguintes tipos de informações:
            </p>
            <ul>
              <li>
                <strong>Informações de cadastro:</strong> nome, email, senha, data de nascimento
              </li>
              <li>
                <strong>Dados de perfil:</strong> foto, biografia, interesses espirituais
              </li>
              <li>
                <strong>Dados de uso:</strong> cursos acessados, progresso de aprendizado, participação em fóruns
              </li>
              <li>
                <strong>Informações de pagamento:</strong> dados de cartão de crédito, histórico de transações
              </li>
              <li>
                <strong>Dados técnicos:</strong> endereço IP, tipo de navegador, dispositivo utilizado
              </li>
            </ul>
            
            <h2>3. Como Usamos Suas Informações</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul>
              <li>Fornecer e personalizar nossos serviços</li>
              <li>Processar assinaturas e pagamentos</li>
              <li>Rastrear seu progresso de aprendizado</li>
              <li>Recomendar conteúdo relevante para você</li>
              <li>Facilitar interações com a comunidade</li>
              <li>Enviar comunicações sobre nossos serviços</li>
              <li>Melhorar nossa plataforma e desenvolver novos recursos</li>
              <li>Detectar e prevenir fraudes e abusos</li>
            </ul>
            
            <h2>4. Compartilhamento de Informações</h2>
            <p>
              Podemos compartilhar suas informações com:
            </p>
            <ul>
              <li>Provedores de serviços que nos auxiliam (processadores de pagamento, hospedagem em nuvem)</li>
              <li>Outros usuários (para conteúdo que você compartilha publicamente)</li>
              <li>Autoridades legais (quando exigido por lei)</li>
            </ul>
            <p>
              Não vendemos seus dados pessoais a terceiros.
            </p>
            
            <h2>5. Segurança de Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger suas informações, incluindo criptografia, controles de acesso e auditorias regulares. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de seus dados.
            </p>
            
            <h2>6. Seus Direitos e Escolhas</h2>
            <p>
              Você tem o direito de:
            </p>
            <ul>
              <li>Acessar e receber uma cópia de seus dados</li>
              <li>Retificar informações imprecisas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Restringir ou opor-se ao processamento de seus dados</li>
              <li>Portar seus dados para outro serviço</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato conosco através de privacy@unitas.org.
            </p>
            
            <h2>7. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pelo tempo necessário para fornecer nossos serviços ou cumprir obrigações legais. Quando sua conta é excluída, seus dados pessoais são removidos ou anonimizados, exceto quando temos obrigações legais de mantê-los.
            </p>
            
            <h2>8. Cookies e Tecnologias Similares</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>
            
            <h2>9. Transferências Internacionais</h2>
            <p>
              Podemos processar seus dados em países diferentes daquele em que você reside. Implementamos salvaguardas apropriadas para proteger seus dados em transferências internacionais, de acordo com as leis de proteção de dados aplicáveis.
            </p>
            
            <h2>10. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos você sobre alterações significativas através de um aviso na plataforma ou por email.
            </p>
            
            <h2>11. Contato</h2>
            <p>
              Se tiver dúvidas sobre esta Política de Privacidade, entre em contato com nosso Encarregado de Proteção de Dados em privacy@unitas.org.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
