
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseModules from "@/components/courses/CourseModules";
import CourseInformation from "@/components/courses/CourseInformation";
import CourseActions from "@/components/courses/CourseActions";
import RelatedCourses from "@/components/courses/RelatedCourses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button"; // Added Button
import { Lock } from "lucide-react"; // Added Lock
import { useQuery } from "@tanstack/react-query";
import { getCourseById } from "@/services/courseService";
import { Course } from "@/types/course";
import { useAuth } from "@/contexts/AuthContext"; // Added
import { canAccessContent } from "@/lib/permissions"; // Added

/**
 * @page CourseDetail
 * @description Displays detailed information about a specific course, including its modules,
 * general information, and actions related to the course. It fetches course data based on the ID
 * from the URL parameters.
 */
const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState("modules");
  const { user } = useAuth(); // Get user

  const { data: course, isLoading, error } = useQuery<Course | undefined, Error>({
    queryKey: ['course', courseId],
    queryFn: () => getCourseById(courseId!), 
    enabled: !!courseId, 
  });

  const hasFullCourseAccess = course ? canAccessContent(user?.subscriptionTier, course, 'course') : false;
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 pb-12">
          <div className="container mx-auto px-4 py-12 text-center">Loading course details...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 pb-12">
          <div className="container mx-auto px-4 py-12 text-center text-red-500">Error loading course: {error.message}</div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 pb-12">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-heading mb-6">Curso não encontrado</h1>
            <p>O curso que você está procurando não existe ou foi removido.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 pb-12">
        <CourseHeader course={course} />
        
        <div className="container mx-auto px-4 py-8">
          {!hasFullCourseAccess && course.accessLevel !== 'free' && (
            <div className="mb-8 p-6 bg-destructive/10 border border-destructive/30 rounded-lg text-center">
              <Lock className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-destructive mb-3">Acesso Restrito</h2>
              <p className="text-destructive/90 mb-1">
                Você precisa do <span className="font-bold">{course.accessLevel === 'purchase' ? 'curso comprado' : `Plano ${course.accessLevel.charAt(0).toUpperCase() + course.accessLevel.slice(1)}`}</span> ou superior para acessar o conteúdo completo deste curso.
              </p>
              {course.accessLevel !== 'purchase' && (
                 <p className="text-destructive/80 mb-4 text-sm">Algumas lições iniciais podem estar disponíveis gratuitamente.</p>
              )}
              <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                Ver Planos de Assinatura {/* Or link to purchase if accessLevel is 'purchase' */}
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Ensure CourseModules is aware of hasFullCourseAccess or uses useAuth itself */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="modules">Módulos</TabsTrigger>
                  <TabsTrigger value="info">Informações</TabsTrigger>
                  <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                </TabsList>
                
                <TabsContent value="modules">
                  <CourseModules course={course} />
                </TabsContent>
                
                <TabsContent value="info">
                  <CourseInformation course={course} />
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="p-6 border border-border/50 rounded-lg">
                    <h3 className="text-xl font-heading mb-4">Avaliações dos Estudantes</h3>
                    <p className="text-muted-foreground">
                      Esta funcionalidade estará disponível em breve.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              {/* Pass hasFullCourseAccess or let CourseActions use useAuth */}
              <CourseActions course={course} hasFullAccess={hasFullCourseAccess} /> 
              <RelatedCourses courseId={course.id} tradition={course.tradition} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
