
import React from "react";
import { Course } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AccessBadge from "@/components/ui/AccessBadge"; // Added
import { Lock } from "lucide-react"; // Added

interface CourseActionsProps {
  course: Course;
  hasFullAccess: boolean; // Added
}

const CourseActions: React.FC<CourseActionsProps> = ({ course, hasFullAccess }) => {
  // Determina se o usuário está inscrito (mock - replace with actual user progress)
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
            <div className="text-center mb-4">
               <AccessBadge 
                  contentType="course"
                  accessLevel={course.accessLevel}
                  isFeaturedFree={course.isFeaturedFree}
                  oneTimePurchasePrice={course.oneTimePurchasePrice}
                  className="text-base px-4 py-2" // Larger badge
                />
              
              {!hasFullAccess && course.accessLevel !== 'free' && (
                <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center">
                  <Lock className="h-3 w-3 mr-1" /> Acesso completo requer upgrade ou compra.
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              {hasFullAccess ? (
                <Button className="w-full">Inscrever-se no Curso</Button> // Or "Acessar Curso" if already purchased/subscribed
              ) : course.accessLevel === 'purchase' ? (
                <Button className="w-full">Comprar Curso (R${course.oneTimePurchasePrice?.toFixed(2)})</Button>
              ) : (
                <Button className="w-full">Ver Planos de Assinatura</Button>
              )}

              {/* Show "Access Free Lessons" if course is not free but user doesn't have full access, AND if there are any free lessons */}
              {!hasFullAccess && course.accessLevel !== 'free' && course.structure?.levels.some(l => l.modules.some(m => m.lessons.some(les => les.accessLevel === 'free'))) && (
                <Button variant="outline" className="w-full">Acessar Aulas Gratuitas</Button>
              )}
            </div>
            
            <div className="mt-4 text-xs text-center text-muted-foreground">
              {course.accessLevel === 'purchase' ? 'Acesso vitalício ao comprar.' : 'Acesso com assinatura ativa.'}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseActions;
