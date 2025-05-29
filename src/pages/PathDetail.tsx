import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPathById } from "@/services/pathService";
import { getCourses } from "@/services/courseService"; // Fetch all and filter
import { getMasters } from "@/services/masterService"; // Fetch all and filter
import type { Path, Course, Master } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"; // For potential future use
import { Icon } from "@iconify/react"; // For path icon

const PathDetail = () => {
  const { pathId } = useParams<{ pathId: string }>();

  const { data: path, isLoading: isLoadingPath, error: errorPath } = useQuery<Path | undefined, Error>({
    queryKey: ['path', pathId],
    queryFn: ()_> getPathById(pathId!),
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
        <Breadcrumb items={breadcrumbItems} />

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
              {pathCourses.map((course) => (
                <Card key={course.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{course.name}</CardTitle>
                    <Badge variant={Math.random() > 0.5 ? "default" : "secondary"} className="absolute right-4 top-4">
                      {Math.random() > 0.5 ? "Gratuito" : "Premium"}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{course.description?.substring(0, 100)}...</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Link to={`/courses/${course.id}`}>
                      <Button variant="outline" className="w-full">Ver Curso</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p>Nenhum curso encontrado para este caminho.</p>
          )}
        </section>

        <section id="path-masters" className="mb-12">
          <h2 className="mb-6 text-3xl font-semibold">Mestres deste Caminho</h2>
          {pathMasters.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {pathMasters.map((master) => (
                <Card key={master.id} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-primary">
                      <img src={master.image || '/images/placeholder-master.png'} alt={master.name} className="h-full w-full object-cover" />
                    </div>
                    <CardTitle>{master.name}</CardTitle>
                     <Badge variant={Math.random() > 0.3 ? "outline" : "destructive"} className="mt-1">
                      {Math.random() > 0.3 ? "Tier 1+" : "Tier 3"}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{master.title}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                     {/* Link to MasterDetail would go here if it exists */}
                    <Button variant="ghost" size="sm">Ver Mestre</Button>
                  </div>
                </Card>
              ))}
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
