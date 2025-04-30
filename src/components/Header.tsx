
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Início
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
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/paths" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Caminhos
              </Link>
              <Link 
                to="/courses" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link 
                to="/masters" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mestres
              </Link>
              <Link 
                to="/community" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comunidade
              </Link>
              
              <div className="pt-2 border-t border-border/30 flex flex-col space-y-2">
                {user ? (
                  <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full">Dashboard</Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-primary/50 hover:border-primary">
                        Entrar
                      </Button>
                    </Link>
                    <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full">Começar</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
