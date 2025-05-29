
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
import { useQuery } from "@tanstack/react-query";
import { getCourseById } from "@/services/courseService";
import { Course } from "@/types/course";

/**
 * @page CourseDetail
 * @description Displays detailed information about a specific course, including its modules,
 * general information, and actions related to the course. It fetches course data based on the ID
 * from the URL parameters.
 */
const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState("modules");

  const { data: course, isLoading, error } = useQuery<Course | undefined, Error>({
    queryKey: ['course', courseId],
    queryFn: () => getCourseById(courseId!), // Non-null assertion as courseId should be present
    enabled: !!courseId, // Only run query if courseId is available
  });
  
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
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
              <CourseActions course={course} />
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
