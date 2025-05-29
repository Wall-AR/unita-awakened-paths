import { useQuery } from "@tanstack/react-query";
import { getCourses } from "@/services/courseService";
import type { Course } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// Helper to mock enrollment and progress
interface EnrolledCourse extends Course {
  userProgress: number;
  isEnrolled: boolean; // Explicitly track enrollment
}

const MyCourses = () => {
  const { data: allCourses, isLoading, error } = useQuery<Course[], Error>({
    queryKey: ['courses'],
    queryFn: getCourses,
  });

  // Mocking enrollment and progress
  const enrolledCourses: EnrolledCourse[] = allCourses
    ? allCourses.map((course, index) => {
        // Mock enrollment: enroll in first 3 courses, or if a course is marked as 'Gratuito' in description (example)
        const isMockEnrolled = index < 2 || course.name.toLowerCase().includes("gratuito") || (course.level && course.level.toLowerCase() === 'iniciante');
        
        return {
          ...course,
          isEnrolled: isMockEnrolled,
          userProgress: isMockEnrolled ? Math.floor(Math.random() * 100) : 0,
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
        <Breadcrumb items={breadcrumbItems} />
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
              {ongoingCourses.map(course => (
                <Card key={course.id} className="flex flex-col">
                  {course.image && (
                    <img src={course.image} alt={course.name} className="rounded-t-lg h-48 w-full object-cover"/>
                  )}
                  <CardHeader>
                    <CardTitle>{course.name}</CardTitle>
                    {/* Mock premium badge based on description or some other logic */}
                    {!course.description?.toLowerCase().includes("gratuito") && Math.random() > 0.5 && (
                        <Badge variant="destructive" className="absolute top-4 right-4">Premium</Badge>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-3">
                      {course.description ? `${course.description.substring(0, 100)}...` : 'Sem descrição.'}
                    </p>
                    <Progress value={course.userProgress} className="h-2 mb-1" />
                    <p className="text-xs text-muted-foreground text-right">{course.userProgress}% completo</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant="outline">
                      <Link to={`/courses/${course.id}`}>Continuar Curso</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}

        {completedCourses.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-6">Cursos Concluídos</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completedCourses.map(course => (
                <Card key={course.id} className="flex flex-col opacity-75 hover:opacity-100 transition-opacity">
                   {course.image && (
                    <img src={course.image} alt={course.name} className="rounded-t-lg h-48 w-full object-cover"/>
                  )}
                  <CardHeader>
                    <CardTitle>{course.name}</CardTitle>
                     {!course.description?.toLowerCase().includes("gratuito") && Math.random() > 0.5 && (
                        <Badge variant="destructive" className="absolute top-4 right-4">Premium</Badge>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <p className="text-sm text-muted-foreground mb-3">
                      {course.description ? `${course.description.substring(0, 100)}...` : 'Sem descrição.'}
                    </p>
                    <Progress value={100} className="h-2 mb-1" />
                    <p className="text-xs text-muted-foreground text-right">100% completo</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant="default">
                      <Link to={`/courses/${course.id}`}>Revisar Curso</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default MyCourses;
