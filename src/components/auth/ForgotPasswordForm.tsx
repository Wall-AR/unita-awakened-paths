
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { forgotPassword, isLoading } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
      toast({
        title: "Email enviado",
        description: "Verifique seu email para instruções de recuperação de senha",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar o email de recuperação",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const loading = isLoading || isSubmitting;

  return (
    <>
      {isSubmitted ? (
        <div className="text-center space-y-4">
          <div className="mb-4 p-3 bg-primary/10 text-primary rounded-md">
            Enviamos instruções de recuperação de senha para:
            <div className="font-medium mt-1">{email}</div>
          </div>
          <p className="text-sm text-muted-foreground">
            Não recebeu o email? Verifique sua caixa de spam ou
          </p>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setIsSubmitted(false)}
          >
            Tentar novamente
          </Button>
          <div className="mt-6">
            <Link to="/login" className="text-primary hover:underline text-sm">
              Voltar para o login
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-primary/20"
              disabled={loading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : 'Recuperar senha'}
          </Button>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Lembrou sua senha?{' '}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Voltar para login
              </Link>
            </p>
          </div>
        </form>
      )}
    </>
  );
}
