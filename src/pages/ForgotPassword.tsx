
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SacredSymbol from '@/components/SacredSymbol';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-background/95 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background to-secondary/20 flex flex-col items-center justify-center px-4">
      <Link to="/" className="mb-6">
        <SacredSymbol className="h-16 w-16 text-primary" />
      </Link>
      <Card className="w-full max-w-md border-primary/20 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-heading text-center">Recuperar Senha</CardTitle>
          <CardDescription className="text-center">
            Digite seu email para receber as instruções de recuperação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
