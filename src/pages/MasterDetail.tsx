import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMasterById } from "@/services/masterService";
import { getCourses } from "@/services/courseService"; // Fetch all and filter
import { getMissions } from "@/services/missionService"; // Fetch all and filter by masterId
import type { Master, Course, Mission } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";

const MasterDetail = () => {
  const { masterId } = useParams<{ masterId: string }>();

  const { data: master, isLoading: isLoadingMaster, error: errorMaster } = useQuery<Master | undefined, Error>({
    queryKey: ['master', masterId],
    queryFn: () => getMasterById(masterId!),
    enabled: !!masterId,
  });

  // Fetch all courses and filter by this master
  const { data: allCourses, isLoading: isLoadingCourses, error: errorCourses } = useQuery<Course[], Error>({
    queryKey: ['courses'],
    queryFn: getCourses,
    enabled: !!master, 
  });

  // Fetch all missions and filter by this master
  const { data: allMissions, isLoading: isLoadingMissions, error: errorMissions } = useQuery<Mission[], Error>({
    queryKey: ['missions'],
    queryFn: getMissions, // Assuming getMissionsByMasterId might not exist or for simplicity
    enabled: !!master,
  });

  if (isLoadingMaster || isLoadingCourses || isLoadingMissions) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Icon icon="svg-spinners:blocks-shuffle-3" className="h-12 w-12" />
      </div>
    );
  }

  if (errorMaster || !master) {
    return <div className="text-center text-red-500">Error loading master details or master not found.</div>;
  }
  if (errorCourses) {
    return <div className="text-center text-red-500">Error loading courses.</div>;
  }
  if (errorMissions) {
    return <div className="text-center text-red-500">Error loading missions.</div>;
  }

  // Filter courses where this master is one of the mainMasterIds
  const masterCourses = allCourses?.filter(course => course.mainMasterIds?.includes(master.id)) || [];
  
  // Filter missions associated with this master (assuming missions have a masterId or similar field)
  // For now, let's assume missionsData.ts has missions that can be filtered if they have a property like `masterId`
  // Or if the Master object itself has a list of mission IDs.
  // Using a placeholder filter for now:
  const masterMissions = allMissions?.filter(mission => mission.masterId === master.id) || [];


  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Mestres", href: "/masters" },
    { label: master.name, href: `/masters/${master.id}` },
  ];
  
  // Mock Tier for master
  const masterTiers = ["Gratuito", "Tier 1", "Tier 2", "Tier 3"];
  const randomTierIndex = Math.floor(Math.random() * masterTiers.length);
  const mockMasterTier = masterTiers[randomTierIndex];


  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <header className="my-8 flex flex-col items-center md:flex-row md:items-start gap-8">
          <Avatar className="h-32 w-32 border-4 border-primary/50">
            <AvatarImage src={master.image || '/images/placeholder-master.png'} alt={master.name} />
            <AvatarFallback>{master.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">{master.name}</h1>
            <p className="mt-1 text-xl text-muted-foreground">{master.title}</p>
            <p className="mt-1 text-md text-primary">{master.category} - {master.tradition}</p>
            <Badge className="mt-2" variant={mockMasterTier === "Gratuito" ? "default" : "destructive"}>
              {mockMasterTier === "Gratuito" ? "Acesso Gratuito" : `Requer ${mockMasterTier}`}
            </Badge>
            {master.quote && (
                <blockquote className="mt-4 border-l-4 pl-4 italic text-muted-foreground">
                    "{master.quote}"
                </blockquote>
            )}
          </div>
        </header>
        
        {master.description && (
          <section className="mb-12 p-6 bg-card rounded-lg shadow">
            <h2 className="mb-3 text-2xl font-semibold">Sobre {master.name}</h2>
            <p className="text-muted-foreground whitespace-pre-line">{master.description}</p>
          </section>
        )}

        {master.teachings && master.teachings.length > 0 && (
            <section className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold">Principais Ensinamentos</h2>
                <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
                    {master.teachings.map((teaching, index) => (
                        <li key={index}>{teaching}</li>
                    ))}
                </ul>
            </section>
        )}


        <section id="master-courses" className="mb-12">
          <h2 className="mb-6 text-3xl font-semibold">Cursos Ministrados</h2>
          {masterCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {masterCourses.map((course) => (
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
            <p>Nenhum curso diretamente associado a este mestre encontrado.</p>
          )}
        </section>

        <section id="master-missions" className="mb-12">
          <h2 className="mb-6 text-3xl font-semibold">Missões Guiadas</h2>
          {masterMissions.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {masterMissions.map((mission) => (
                <Card key={mission.id}>
                  <CardHeader>
                    <CardTitle>{mission.title}</CardTitle>
                     <Badge variant={Math.random() > 0.3 ? "outline" : "destructive"} className="mt-1">
                      {Math.random() > 0.3 ? "Tier 1+" : "Tier 3"}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{mission.description?.substring(0, 150)}...</p>
                    {/* Consider showing mission type or difficulty */}
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Link to={`/missions/${mission.id}`}>
                      <Button variant="outline" className="w-full">Ver Missão</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p>Nenhuma missão diretamente guiada por este mestre encontrada.</p>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
};

export default MasterDetail;
