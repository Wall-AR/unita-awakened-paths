
import React from "react";
import { Course } from "@/types/course";
import { Card, CardContent } from "@/components/ui/card";

interface CourseInformationProps {
  course: Course;
}

const CourseInformation: React.FC<CourseInformationProps> = ({ course }) => {
  // Obtendo mestres associados (mock - seria substituído por dados reais)
  const masters = course.mainMasters || [];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-heading mb-2">Sobre este Curso</h3>
          <p className="text-muted-foreground">{course.description}</p>
          
          {course.skills && course.skills.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">O que você aprenderá</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.skills.map((skill, index) => (
                  <li key={index} className="flex gap-2 items-center text-sm">
                    <span className="text-primary">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {course.prerequisites && course.prerequisites.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Pré-requisitos</h4>
              <ul className="space-y-1">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex gap-2 items-center text-sm text-muted-foreground">
                    <span>•</span>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {course.material && (
            <div>
              <h4 className="font-medium mb-2">Material de Estudo</h4>
              <p className="text-sm text-muted-foreground">{course.material}</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {masters.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-heading mb-4">Mestres Guias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {masters.map((master, index) => (
                <div key={index} className="flex gap-3 items-center p-3 rounded-lg border border-border/50">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                    {/* Placeholder para ícone ou imagem do mestre */}
                    🧙
                  </div>
                  <div>
                    <h4 className="font-medium">{master}</h4>
                    <p className="text-xs text-muted-foreground">Mestre Guia</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-heading mb-4">Caminho Espiritual</h3>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">
              {/* Ícone da tradição */}
              {course.icon}
            </div>
            <div>
              <h4 className="font-medium">{course.path}</h4>
              <p className="text-xs text-muted-foreground">{course.tradition}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseInformation;
