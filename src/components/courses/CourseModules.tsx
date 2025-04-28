
import React, { useState } from "react";
import { Course } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Lock, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

interface CourseModulesProps {
  course: Course;
}

const CourseModules: React.FC<CourseModulesProps> = ({ course }) => {
  // Mock data para exibição - será substituído por dados reais da API
  const mockModules = [
    {
      id: "mod-1",
      title: "Fundamentos do Hermetismo",
      description: "Uma introdução aos conceitos básicos do hermetismo",
      isFree: true,
      isCompleted: false,
      lessons: [
        { id: "les-1", title: "Origens e História do Hermetismo", duration: "15 min", isCompleted: false },
        { id: "les-2", title: "Quem foi Hermes Trismegisto?", duration: "20 min", isCompleted: false },
        { id: "les-3", title: "O Caibalion e sua Importância", duration: "25 min", isCompleted: false },
      ],
      practice: { title: "Meditação sobre a Tábua de Esmeralda", duration: "15 min" },
      quiz: { title: "Conceitos Básicos do Hermetismo", questions: 10 }
    },
    {
      id: "mod-2",
      title: "O Princípio do Mentalismo",
      description: "Explorando o primeiro princípio hermético",
      isFree: true,
      isCompleted: false,
      lessons: [
        { id: "les-4", title: "O TODO é MENTE; O Universo é Mental", duration: "20 min", isCompleted: false },
        { id: "les-5", title: "Realidade como Projeção Mental", duration: "25 min", isCompleted: false },
        { id: "les-6", title: "Aplicações Práticas do Mentalismo", duration: "30 min", isCompleted: false },
      ],
      practice: { title: "Exercício de Criação Mental", duration: "20 min" },
      quiz: { title: "Compreendendo o Mentalismo", questions: 8 }
    },
    {
      id: "mod-3",
      title: "O Princípio da Correspondência",
      description: "Como é acima, é abaixo; como é abaixo, é acima",
      isFree: false,
      isCompleted: false,
      lessons: [
        { id: "les-7", title: "Como é acima, é abaixo; como é abaixo, é acima", duration: "25 min", isCompleted: false },
        { id: "les-8", title: "Macrocosmo e Microcosmo", duration: "20 min", isCompleted: false },
        { id: "les-9", title: "Reconhecendo Padrões Universais", duration: "25 min", isCompleted: false },
      ],
      practice: { title: "Identificação de Correspondências na Natureza", duration: "30 min" },
      quiz: { title: "Aplicando o Princípio da Correspondência", questions: 10 }
    },
  ];

  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    "mod-1": true
  });

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6">
      {mockModules.map((module) => (
        <Collapsible
          key={module.id}
          open={openModules[module.id]}
          onOpenChange={() => toggleModule(module.id)}
          className="border border-border/50 rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger asChild>
            <div className="p-4 cursor-pointer bg-card/30 hover:bg-card/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  {module.isCompleted ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : module.isFree ? (
                    <div className="h-5 w-5 rounded-full border border-primary/50"></div>
                  ) : (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  )}
                  
                  <div>
                    <h3 className="font-medium">{module.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{module.description}</p>
                  </div>
                </div>
                
                {openModules[module.id] ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="border-t border-border/50">
            <div className="p-4 space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Lições</h4>
                {module.lessons.map((lesson, idx) => (
                  <div 
                    key={lesson.id}
                    className={`flex justify-between items-center p-2 rounded-md text-sm hover:bg-card/30 ${
                      !module.isFree && "opacity-70"
                    }`}
                  >
                    <div className="flex gap-2 items-center">
                      <span className="text-muted-foreground">{idx+1}.</span>
                      <span>{lesson.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                  </div>
                ))}
              </div>
              
              {module.practice && (
                <div>
                  <h4 className="text-sm font-medium">Prática</h4>
                  <div className={`flex justify-between items-center p-2 rounded-md text-sm hover:bg-card/30 ${
                    !module.isFree && "opacity-70"
                  }`}>
                    <div className="flex gap-2 items-center">
                      <span className="text-primary">🧘</span>
                      <span>{module.practice.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{module.practice.duration}</span>
                  </div>
                </div>
              )}
              
              {module.quiz && (
                <div>
                  <h4 className="text-sm font-medium">Avaliação</h4>
                  <div className={`flex justify-between items-center p-2 rounded-md text-sm hover:bg-card/30 ${
                    !module.isFree && "opacity-70"
                  }`}>
                    <div className="flex gap-2 items-center">
                      <span className="text-primary">📝</span>
                      <span>{module.quiz.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{module.quiz.questions} questões</span>
                  </div>
                </div>
              )}
              
              {!module.isFree && (
                <div className="mt-4 p-3 bg-card/30 rounded-md text-center">
                  <p className="text-sm">Este módulo está disponível apenas para assinantes Premium</p>
                </div>
              )}
              
              {module.isFree && (
                <div className="flex justify-end mt-4">
                  <Button>Iniciar Módulo</Button>
                </div>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default CourseModules;
