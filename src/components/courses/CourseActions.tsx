
import React from "react";
import { Course } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CourseActionsProps {
  course: Course;
}

const CourseActions: React.FC<CourseActionsProps> = ({ course }) => {
  // Determina se o usuário está inscrito (mock)
  const isEnrolled = false;
  
  // Determina o progresso se inscrito (mock)
  const progress = {
    percent: 0,
    completedLessons: 0,
    totalLessons: course.lessons
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        {isEnrolled ? (
          <div className="space-y-4">
            <h3 className="text-xl font-heading">Seu Progresso</h3>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>{progress.completedLessons}/{progress.totalLessons} lições</span>
                <span>{progress.percent}% completo</span>
              </div>
              <div className="w-full h-2 bg-secondary/30 rounded-full">
                <div 
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${progress.percent}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full">Continuar Curso</Button>
              <Button variant="outline" className="w-full">Ver Certificado</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              {course.isFree ? (
                <h3 className="text-xl font-heading text-green-500">Curso Gratuito</h3>
              ) : course.premium ? (
                <h3 className="text-xl font-heading gold-text">Curso Premium</h3>
              ) : (
                <h3 className="text-xl font-heading text-amber-500">Parcialmente Gratuito</h3>
              )}
              
              <p className="text-sm text-muted-foreground mt-1">
                {course.isFree 
                  ? "Acesso completo a todo o conteúdo" 
                  : course.premium 
                    ? "Disponível para assinantes Premium" 
                    : "Primeiros módulos gratuitos"
                }
              </p>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full">Inscrever-se no Curso</Button>
              {!course.isFree && (
                <Button variant="outline" className="w-full">Acessar Versão Gratuita</Button>
              )}
            </div>
            
            <div className="mt-4 text-xs text-center text-muted-foreground">
              Acesso vitalício a todas as atualizações do curso
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseActions;
