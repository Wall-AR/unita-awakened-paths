import { useQuery } from "@tanstack/react-query";
import { getCourses } from "@/services/courseService";
import type { Course } from "@/types";
import Header from "@/components/Header"; // Changed to default import
import Footer from "@/components/Footer"; // Changed to default import
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Corrected import for shadcn/ui
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
// import { Badge } from "@/components/ui/badge"; // Replaced by AccessBadge where appropriate
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import AccessBadge from "@/components/ui/AccessBadge"; 
import { useAuth } from "@/contexts/AuthContext"; // Added
import { canAccessContent } from "@/lib/permissions"; // Added
import { Lock } from "lucide-react"; // Added

// Helper to mock enrollment and progress
interface EnrolledCourse extends Course {
  userProgress: number;
  isEnrolled: boolean; 
  hasAccess: boolean; // Added to store access status
}

const MyCourses = () => {
  const { user } = useAuth(); // Get user
  const navigate = useNavigate(); // For navigation

  const { data: allCourses, isLoading, error } = useQuery<Course[], Error>({
    queryKey: ['courses'],
    queryFn: getCourses,
  });

  // Mocking enrollment and progress, now considering access
  const enrolledCourses: EnrolledCourse[] = allCourses
    ? allCourses.map((course, index) => {
        const isMockEnrolled = index < 2 || course.accessLevel === 'free' || !!course.isFeaturedFree;
        const hasAccess = canAccessContent(user?.subscriptionTier, course, 'course');
        return {
          ...course,
          isEnrolled: isMockEnrolled,
          userProgress: isMockEnrolled ? Math.floor(Math.random() * 100) : 0,
          hasAccess: hasAccess, 
        };
      }).filter(course => course.isEnrolled)
    : [];

  const ongoingCourses = enrolledCourses.filter(course => course.userProgress > 0 && course.userProgress < 100);
  const completedCourses = enrolledCourses.filter(course => course.userProgress === 100);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Icon icon="svg-spinners:blocks-shuffle-3" className="h-12 w-12" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        Error loading your courses: {error.message}
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Meus Cursos", href: "/my-courses" },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Meus Cursos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold my-6">Meus Cursos</h1>

        {enrolledCourses.length === 0 && !isLoading && (
          <div className="text-center py-10 bg-card p-8 rounded-lg shadow">
            <Icon icon="ph:books-light" className="mx-auto text-6xl text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Você ainda não está inscrito em nenhum curso.</h2>
            <p className="text-muted-foreground mb-6">
              Explore nossa biblioteca de cursos e comece sua jornada de aprendizado hoje mesmo!
            </p>
            <Button asChild>
              <Link to="/courses">Explorar Cursos</Link>
            </Button>
          </div>
        )}

        {ongoingCourses.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Cursos em Andamento</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ongoingCourses.map(course => {
                const cardClasses = `flex flex-col ${!course.hasAccess ? 'opacity-60 cursor-not-allowed' : ''}`;
                const handleCardInteraction = () => {
                  if (!course.hasAccess) {
                    alert("Seu acesso a este curso expirou ou seu plano não o inclui mais. Verifique seus planos.");
                    // navigate('/pricing'); // Or specific page
                  } else {
                    navigate(`/courses/${course.id}`);
                  }
                };

                return (
                  <Card key={course.id} className={cardClasses}>
                    <div className="relative">
                      {course.image && (
                        <img src={course.image} alt={course.title} className="rounded-t-lg h-48 w-full object-cover"/>
                      )}
                      {!course.hasAccess && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
                          <Lock className="h-10 w-10 text-white/80" />
                        </div>
                      )}
                    </div>
                    <CardHeader onClick={!course.hasAccess ? handleCardInteraction : undefined} className={course.hasAccess ? 'cursor-pointer' : ''}>
                      <div className="flex justify-between items-start">
                        <CardTitle>{course.title}</CardTitle>
                        <AccessBadge 
                          contentType="course"
                          accessLevel={course.accessLevel}
                          isFeaturedFree={course.isFeaturedFree}
                          oneTimePurchasePrice={course.oneTimePurchasePrice}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow" onClick={!course.hasAccess ? handleCardInteraction : undefined} >
                      <p className="text-sm text-muted-foreground mb-3">
                        {course.description ? `${course.description.substring(0, 100)}...` : 'Sem descrição.'}
                      </p>
                      {course.hasAccess ? (
                        <>
                          <Progress value={course.userProgress} className="h-2 mb-1" />
                          <p className="text-xs text-muted-foreground text-right">{course.userProgress}% completo</p>
                        </>
                      ) : (
                        <p className="text-xs text-destructive text-center font-semibold">Acesso Requerido</p>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button onClick={handleCardInteraction} className="w-full" variant={course.hasAccess ? "outline" : "destructive"} disabled={!course.hasAccess && false /* Enable to allow click to pricing */}>
                        {course.hasAccess ? 'Continuar Curso' : 'Ver Planos'}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {completedCourses.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-6">Cursos Concluídos</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completedCourses.map(course => {
                // For completed courses, access might still be relevant if they want to review
                const cardClasses = `flex flex-col transition-opacity ${!course.hasAccess ? 'opacity-60 cursor-not-allowed' : 'opacity-85 hover:opacity-100'}`;
                 const handleCardInteraction = () => {
                  if (!course.hasAccess) {
                    alert("Seu acesso a este curso expirou ou seu plano não o inclui mais para revisão. Verifique seus planos.");
                    // navigate('/pricing'); 
                  } else {
                    navigate(`/courses/${course.id}`);
                  }
                };

                return (
                  <Card key={course.id} className={cardClasses}>
                     <div className="relative">
                        {course.image && (
                          <img src={course.image} alt={course.title} className="rounded-t-lg h-48 w-full object-cover"/>
                        )}
                        {!course.hasAccess && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
                            <Lock className="h-10 w-10 text-white/80" />
                          </div>
                        )}
                      </div>
                    <CardHeader onClick={!course.hasAccess ? handleCardInteraction : undefined} className={course.hasAccess ? 'cursor-pointer' : ''}>
                      <div className="flex justify-between items-start">
                        <CardTitle>{course.title}</CardTitle>
                        <AccessBadge 
                          contentType="course"
                          accessLevel={course.accessLevel}
                          isFeaturedFree={course.isFeaturedFree}
                          oneTimePurchasePrice={course.oneTimePurchasePrice}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow" onClick={!course.hasAccess ? handleCardInteraction : undefined}>
                       <p className="text-sm text-muted-foreground mb-3">
                        {course.description ? `${course.description.substring(0, 100)}...` : 'Sem descrição.'}
                      </p>
                      <Progress value={100} className="h-2 mb-1" />
                      <p className="text-xs text-muted-foreground text-right">100% completo</p>
                       {!course.hasAccess && <p className="text-xs text-destructive text-center font-semibold mt-2">Revisão Requer Assinatura</p>}
                    </CardContent>
                    <CardFooter>
                      <Button onClick={handleCardInteraction} className="w-full" variant="default" disabled={!course.hasAccess && false}>
                        {course.hasAccess ? 'Revisar Curso' : 'Ver Planos'}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default MyCourses;
