
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Início
          </Link>
          <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link to="/paths" className="text-sm font-medium transition-colors hover:text-primary">
            Caminhos
          </Link>
          <Link to="/courses" className="text-sm font-medium transition-colors hover:text-primary">
            Cursos
          </Link>
          <Link to="/masters" className="text-sm font-medium transition-colors hover:text-primary">
            Mestres
          </Link>
          <Link to="/community" className="text-sm font-medium transition-colors hover:text-primary">
            Comunidade
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="hidden md:flex border-primary/50 hover:border-primary">
                Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm" className="hidden md:flex border-primary/50 hover:border-primary">
                  Entrar
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Começar
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
