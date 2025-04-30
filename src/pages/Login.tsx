
import { LoginForm } from '@/components/auth/LoginForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SacredSymbol } from '@/components/SacredSymbol';

const Login = () => {
  return (
    <div className="min-h-screen bg-background/95 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background to-secondary/20 flex flex-col items-center justify-center px-4">
      <div className="mb-6">
        <SacredSymbol className="h-16 w-16 text-primary" />
      </div>
      <Card className="w-full max-w-md border-primary/20 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-heading text-center">Bem-vindo de volta</CardTitle>
          <CardDescription className="text-center">
            Entre com suas credenciais para acessar sua jornada espiritual
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
