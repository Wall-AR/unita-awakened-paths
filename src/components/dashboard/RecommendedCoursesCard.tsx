
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const RecommendedCoursesCard = () => {
  // Mock data - será substituído por dados reais do usuário
  const recommendedCourses = [
    {
      id: "caibalion",
      title: "O Caibalion: Os Sete Princípios Herméticos",
      tradition: "Hermetismo",
      level: "Iniciante/Intermediário",
      relevance: "Alinhado com seu caminho atual"
    },
    {
      id: "biblia-revelada",
      title: "A Bíblia Revelada: Para Além do Véu",
      tradition: "Cristianismo Esotérico",
      level: "Iniciante/Intermediário",
      relevance: "Popular entre filósofos"
    },
    {
      id: "simbolos-universais",
      title: "Símbolos Universais: A Linguagem do Inconsciente Coletivo",
      tradition: "Psicologia Analítica",
      level: "Intermediário",
      relevance: "Relacionado aos seus interesses"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cursos Recomendados</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendedCourses.map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <div className="p-3 border border-border/50 rounded-lg hover:border-primary/30 transition-all duration-200">
                <div className="flex justify-between">
                  <h3 className="font-medium text-sm">{course.title}</h3>
                  <span className="text-xs px-2 py-0.5 bg-secondary/30 rounded-full">
                    {course.level}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{course.tradition}</span>
                  <span className="text-xs text-primary">{course.relevance}</span>
                </div>
              </div>
            </Link>
          ))}
          
          <div className="text-center pt-2">
            <Link 
              to="/courses" 
              className="text-sm text-primary hover:underline"
            >
              Ver todos os cursos →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedCoursesCard;
