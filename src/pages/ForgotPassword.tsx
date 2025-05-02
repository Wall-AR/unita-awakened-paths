
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';
import AuthLayout from '@/components/auth/AuthLayout';

const ForgotPassword = () => {
  return (
    <AuthLayout 
      title="Recuperar Senha"
      description="Digite seu email para receber as instruções de recuperação"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
