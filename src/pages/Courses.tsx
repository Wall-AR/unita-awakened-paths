import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Filter, Clock, BookOpen, Award, Lock } from "lucide-react"; // Added Lock
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "@/services/courseService"; 
import { Course } from "@/types/course";
import AccessBadge from "@/components/ui/AccessBadge"; 
import { useAuth } from "@/contexts/AuthContext"; // Added useAuth
import { canAccessContent } from "@/lib/permissions"; // Added canAccessContent

/**
 * @page Courses
 * @description This page displays a list of all available courses, including a featured course
 * and filtering options. It fetches course data using the `courseService`.
 */
const Courses = () => {
  const { user } = useAuth(); // Get user from AuthContext
  const navigate = useNavigate(); // For redirecting if access denied on click

  const { data: allCourses, isLoading: isLoadingAllCourses, error: errorAllCourses } = useQuery<Course[], Error>({ 
    queryKey: ['courses'], 
    queryFn: getCourses 
  });

  // For this example, we'll filter from allCourses for featured/other
  const featuredCourse = allCourses?.find(course => course.isFeatured);
  const otherCourses = allCourses?.filter(course => !course.isFeatured);


  if (isLoadingAllCourses) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <div className="container mx-auto px-4 py-8 text-center">Loading courses...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (errorAllCourses) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <div className="container mx-auto px-4 py-8 text-center text-red-500">Error loading courses: {errorAllCourses.message}</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="text-sm transition-colors hover:text-foreground">Início</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbPage>Cursos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading text-4xl md:text-5xl mt-8 mb-6 gold-text">
            Cursos Transformadores
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Uma jornada através dos textos sagrados e ensinamentos místicos, revelando sua sabedoria para o mundo moderno.
          </p>

          {/* Introdução */}
          <section className="mb-16 p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <h2 className="font-heading text-2xl mb-4">Conhecimento em Ação</h2>
            <p className="text-muted-foreground mb-6">
              Nossos cursos são mais do que simples apresentações de informações — são jornadas transformadoras 
              projetadas para integrar conhecimento antigo em sua vida moderna. Cada curso combina estudo teórico, 
              práticas experienciais e aplicações diárias.
            </p>
            <p className="text-muted-foreground">
              Todos os cursos incluem níveis gratuitos para experimentação, progredindo para conteúdo mais profundo 
              e prático nos níveis premium. Avance no seu próprio ritmo, acompanhado por mestres guias que personalizam 
              a experiência de acordo com seu caminho específico.
            </p>
          </section>

          {/* Filtros e Busca */}
          <div className="mb-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                className="w-full pl-10 pr-3 py-2 rounded-md bg-background/50 border border-border/50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filtrar
              </Button>
              <select className="px-3 py-2 rounded-md bg-background/50 border border-border/50 focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Todos os Níveis</option>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </div>
          </div>

          {/* Curso em Destaque */}
          {featuredCourse && (() => {
            const hasAccess = canAccessContent(user?.subscriptionTier, featuredCourse, 'course');
            const cardClasses = `bg-card/30 backdrop-blur-sm border border-border/50 overflow-hidden ${!hasAccess ? 'opacity-60 cursor-not-allowed' : 'hover:border-primary/30'}`;
            
            const handleCardClick = (e: React.MouseEvent) => {
              if (!hasAccess) {
                e.preventDefault();
                // Optionally, show a modal or toast here
                // navigate('/pricing'); // Or to a specific "upgrade" page
                alert("Você não tem acesso a este curso. Considere fazer um upgrade no seu plano.");
              }
            };

            return (
            <section className="mb-16">
              <h2 className="font-heading text-2xl mb-6">Em Destaque</h2>
              <Card className={cardClasses} onClick={handleCardClick}>
                <div className="md:flex">
                  <div className="md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-primary/20 via-secondary/10 to-background relative">
                    {!hasAccess && <div className="absolute inset-0 bg-black/30 flex items-center justify-center"><Lock className="h-12 w-12 text-white/70" /></div>}
                    <div className="h-full w-full flex items-center justify-center p-12">
                      <span className="text-7xl">{featuredCourse.icon}</span>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="mb-4 flex flex-wrap gap-2 items-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-xs">{featuredCourse.tradition}</span>
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-xs">{featuredCourse.level}</span> 
                      <AccessBadge 
                        contentType="course"
                        accessLevel={featuredCourse.accessLevel}
                        isFeaturedFree={featuredCourse.isFeaturedFree}
                        oneTimePurchasePrice={featuredCourse.oneTimePurchasePrice}
                      />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl mb-3">{featuredCourse.title}</h3>
                    <p className="text-muted-foreground mb-6">{featuredCourse.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{featuredCourse.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{featuredCourse.lessons} lições</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Certificado</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col xs:flex-row gap-4">
                      <Button asChild disabled={!hasAccess}>
                        <Link to={hasAccess ? `/courses/${featuredCourse.id}` : '#'}>
                          {hasAccess ? 'Iniciar Curso' : 'Acesso Requerido'}
                        </Link>
                      </Button>
                      <Button variant="outline" asChild disabled={!hasAccess}>
                        <Link to={hasAccess ? `/courses/${featuredCourse.id}` : '#'}>Detalhes</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          )})}

          {/* Lista de Cursos */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl mb-6">Cursos Disponíveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCourses?.map((course) => {
                const hasAccess = canAccessContent(user?.subscriptionTier, course, 'course');
                const cardClasses = `overflow-hidden bg-card/30 backdrop-blur-sm border border-border/50 transition-all duration-300 ${!hasAccess ? 'opacity-60 cursor-not-allowed' : 'hover:border-primary/30'}`;
                
                const handleCardClick = (e: React.MouseEvent) => {
                  if (!hasAccess) {
                    e.preventDefault();
                    alert("Você não tem acesso a este curso. Considere fazer um upgrade no seu plano.");
                    // navigate('/pricing'); 
                  } else {
                    navigate(`/courses/${course.id}`);
                  }
                };

                return (
                <Card key={course.id} className={cardClasses} onClick={handleCardClick}>
                  <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/5 to-background flex items-center justify-center relative">
                    {!hasAccess && <div className="absolute inset-0 bg-black/30 flex items-center justify-center"><Lock className="h-10 w-10 text-white/70" /></div>}
                    <span className="text-5xl">{course.icon}</span>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2 items-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-xs">{course.tradition}</span>
                      {course.isNew && (
                        <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-50 text-xs">Novo</span>
                      )}
                       <AccessBadge 
                        contentType="course"
                        accessLevel={course.accessLevel}
                        isFeaturedFree={course.isFeaturedFree}
                        oneTimePurchasePrice={course.oneTimePurchasePrice}
                      />
                    </div>
                    <h3 className="font-heading text-xl mb-3">{course.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>{course.lessons} lições</span>
                      </div>
                    </div>
                    
                    <Button variant="secondary" size="sm" className="w-full" disabled={!hasAccess}>
                      {hasAccess ? 'Ver Curso' : 'Acesso Requerido'}
                    </Button>
                  </div>
                </Card>
              )})}
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="font-heading text-3xl mb-6">Comece Sua Jornada de Aprendizado</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Todos os cursos incluem um nível introdutório gratuito. Registre-se agora e comece a 
              explorar a sabedoria ancestral através de nossa abordagem transformadora e interativa.
            </p>
            <Button size="lg" asChild>
              <Link to="/register">Criar Conta Gratuita</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
