
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/30 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Muitos caminhos, uma verdade. Uma plataforma para o renascimento do conhecimento esotérico na era moderna.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-4">Explorar</h4>
            <ul className="space-y-2">
              <li><Link to="/paths" className="text-sm text-muted-foreground hover:text-primary transition-colors">Caminhos</Link></li>
              <li><Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cursos</Link></li>
              <li><Link to="/masters" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mestres</Link></li>
              <li><Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">Comunidade</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">Perguntas Frequentes</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-4">Entre em contato</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Assine nossa newsletter para receber atualizações sobre novos cursos e conteúdos.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="bg-background/50 border border-border/50 rounded px-3 py-2 text-sm flex-1"
                />
                <button className="bg-primary hover:bg-primary/90 text-white rounded px-3 py-2 text-sm">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Unitas. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-primary">Termos</Link>
            <Link to="/privacy" className="hover:text-primary">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
