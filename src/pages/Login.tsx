
import { LoginForm } from '@/components/auth/LoginForm';
import AuthLayout from '@/components/auth/AuthLayout';

const Login = () => {
  return (
    <AuthLayout 
      title="Bem-vindo de volta"
      description="Entre com suas credenciais para acessar sua jornada espiritual"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
