import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPathById } from "@/services/pathService";
import { useAuth } from "@/contexts/AuthContext"; // Added
import { canAccessContent } from "@/lib/permissions"; // Added
import { Lock } from "lucide-react"; // Added
import { getCourses } from "@/services/courseService"; // Fetch all and filter
import { getMasters } from "@/services/masterService"; // Fetch all and filter
import type { Path, Course, Master } from "@/types";
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge"; // Replaced by AccessBadge where appropriate
import { Progress } from "@/components/ui/progress"; // For potential future use
import { Icon } from "@iconify/react"; // For path icon
import AccessBadge from "@/components/ui/AccessBadge"; // Import the new badge

const PathDetail = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { user } = useAuth(); // Get user
  const navigate = useNavigate(); // For navigation

  const { data: path, isLoading: isLoadingPath, error: errorPath } = useQuery<Path | undefined, Error>({
    queryKey: ['path', pathId],
    queryFn: () => getPathById(pathId!),
    enabled: !!pathId,
  });

  const { data: allCourses, isLoading: isLoadingCourses, error: errorCourses } = useQuery<Course[], Error>({
    queryKey: ['courses'],
    queryFn: getCourses,
    enabled: !!path, // Only fetch courses if path data is available
  });

  const { data: allMasters, isLoading: isLoadingMasters, error: errorMasters } = useQuery<Master[], Error>({
    queryKey: ['masters'],
    queryFn: getMasters,
    enabled: !!path, // Only fetch masters if path data is available
  });

  if (isLoadingPath || isLoadingCourses || isLoadingMasters) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Icon icon="svg-spinners:blocks-shuffle-3" className="h-12 w-12" />
      </div>
    );
  }

  if (errorPath || !path) {
    return <div className="text-center text-red-500">Error loading path details or path not found.</div>;
  }
  if (errorCourses) {
    return <div className="text-center text-red-500">Error loading courses.</div>;
  }
  if (errorMasters) {
    return <div className="text-center text-red-500">Error loading masters.</div>;
  }

  const pathCourses = allCourses?.filter(course => path.courseIds?.includes(course.id)) || [];
  const pathMasters = allMasters?.filter(master => path.masterIds?.includes(master.id)) || [];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Paths", href: "/paths" },
    { label: path.name, href: `/paths/${path.id}` },
  ];

  // Mock progress
  const userProgress = Math.floor(Math.random() * 60) + 20; // Random progress between 20 and 80

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
              <BreadcrumbLink asChild>
                <Link to="/paths">Caminhos</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{path.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="my-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full p-3" style={{ background: path.gradient?.from, backgroundImage: `linear-gradient(to right, ${path.gradient?.from}, ${path.gradient?.to})` }}>
            {path.icon && <Icon icon={path.icon} className="h-10 w-10 text-white" />}
          </div>
          <h1 className="text-4xl font-bold">{path.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{path.description}</p>
          <Button size="lg" className="mt-6">
            {userProgress > 0 && userProgress < 100 ? "Continuar Caminho" : "Iniciar Caminho"}
          </Button>
           {userProgress > 0 && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Seu Progresso: {userProgress}%</p>
              <Progress value={userProgress} className="mt-1 h-2 w-full max-w-md mx-auto" />
            </div>
          )}
        </header>

        <section id="path-courses" className="mb-12">
          <h2 className="mb-6 text-3xl font-semibold">Cursos neste Caminho</h2>
          {pathCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pathCourses.map((course) => {
                const hasAccess = canAccessContent(user?.subscriptionTier, course, 'course');
                const cardClasses = `flex flex-col ${!hasAccess ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg'}`;
                
                const handleCourseClick = (e: React.MouseEvent) => {
                  if (!hasAccess) {
                    e.preventDefault();
                    alert("Você não tem acesso a este curso. Considere fazer um upgrade no seu plano ou adquirir o curso.");
                  } else {
                    navigate(`/courses/${course.id}`);
                  }
                };

                return (
                  <Card key={course.id} className={cardClasses}>
                    <div className="relative h-40 bg-muted/30 rounded-t-lg flex items-center justify-center">
                      {/* Placeholder for course image or icon */}
                      {course.icon && <Icon icon={course.icon} className="h-16 w-16 text-muted-foreground" />}
                       {!hasAccess && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
                          <Lock className="h-10 w-10 text-white/80" />
                        </div>
                      )}
                    </div>
                    <CardHeader onClick={!hasAccess ? handleCourseClick : undefined} className={hasAccess ? 'cursor-pointer' : ''}>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <AccessBadge 
                          contentType="course"
                          accessLevel={course.accessLevel}
                          isFeaturedFree={course.isFeaturedFree}
                          oneTimePurchasePrice={course.oneTimePurchasePrice}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow" onClick={!hasAccess ? handleCourseClick : undefined} >
                      <p className="text-sm text-muted-foreground line-clamp-3">{course.description}</p>
                    </CardContent>
                    <div className="p-4 pt-0">
                      <Button onClick={handleCourseClick} variant="outline" className="w-full" disabled={!hasAccess && false}>
                        {hasAccess ? 'Ver Curso' : 'Acesso Requerido'}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <p>Nenhum curso encontrado para este caminho.</p>
          )}
        </section>

        <section id="path-masters" className="mb-12">
          <h2 className="mb-6 text-3xl font-semibold">Mestres deste Caminho</h2>
          {pathMasters.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {pathMasters.map((master) => {
                const hasAccess = canAccessContent(user?.subscriptionTier, master, 'master');
                const cardClasses = `text-center ${!hasAccess ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg'}`;
                
                const handleMasterClick = (e: React.MouseEvent) => {
                  if (!hasAccess) {
                    e.preventDefault();
                    alert("Você não tem acesso a este mestre. Considere fazer um upgrade no seu plano.");
                  } else {
                    // Assuming a master detail page exists at /masters/:masterId
                    navigate(`/masters/${master.id}`); 
                  }
                };

                return (
                  <Card key={master.id} className={cardClasses} onClick={handleMasterClick}>
                    <CardHeader>
                      <div className="relative mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-primary">
                        <img src={master.image || '/images/placeholder-master.png'} alt={master.name} className="h-full w-full object-cover" />
                        {!hasAccess && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-full">
                            <Lock className="h-8 w-8 text-white/80" />
                          </div>
                        )}
                      </div>
                      <CardTitle>{master.name}</CardTitle>
                      <div className="mt-1">
                        <AccessBadge
                          contentType="master"
                          requiredTier={master.requiredTier}
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{master.category} - {master.tradition}</p>
                    </CardContent>
                    <div className="p-4 pt-0">
                      <Button variant="ghost" size="sm" className="w-full" disabled={!hasAccess && false}>
                        {hasAccess ? 'Ver Mestre' : 'Acesso Requerido'}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <p>Nenhum mestre encontrado para este caminho.</p>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
};

export default PathDetail;
