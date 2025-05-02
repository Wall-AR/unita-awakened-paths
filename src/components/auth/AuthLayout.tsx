
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SacredSymbol from "@/components/SacredSymbol";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-background/95 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background to-secondary/20 flex flex-col items-center justify-center px-4">
      <Link to="/" className="mb-6">
        <SacredSymbol className="h-16 w-16 text-primary" />
      </Link>
      <Card className="w-full max-w-md border-primary/20 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-heading text-center">{title}</CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthLayout;
