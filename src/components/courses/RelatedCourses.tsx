
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { courses } from "@/data/coursesData";

interface RelatedCoursesProps {
  courseId: string;
  tradition: string;
}

const RelatedCourses: React.FC<RelatedCoursesProps> = ({ courseId, tradition }) => {
  // Encontrar cursos relacionados pela mesma tradição
  const relatedCourses = courses
    .filter(course => course.tradition === tradition && course.id !== courseId)
    .slice(0, 3); // Limita a 3 cursos
  
  if (relatedCourses.length === 0) {
    return null; // Não mostrar nada se não houver cursos relacionados
  }
  
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-heading mb-4">Cursos Relacionados</h3>
        
        <div className="space-y-3">
          {relatedCourses.map(course => (
            <Link 
              key={course.id}
              to={`/courses/${course.id}`}
              className="block p-3 border border-border/50 rounded-lg hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center text-lg">
                  {course.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium line-clamp-1">{course.title}</h4>
                  <p className="text-xs text-muted-foreground">{course.level}</p>
                </div>
              </div>
            </Link>
          ))}
          
          <div className="text-center pt-2">
            <Link 
              to="/courses" 
              className="text-sm text-primary hover:underline"
            >
              Ver mais cursos de {tradition} →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedCourses;
