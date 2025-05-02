
import { RegisterForm } from '@/components/auth/RegisterForm';
import AuthLayout from '@/components/auth/AuthLayout';

const Register = () => {
  return (
    <AuthLayout 
      title="Junte-se a nós"
      description="Crie sua conta para iniciar sua jornada espiritual"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
