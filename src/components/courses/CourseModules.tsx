import React, { useState } from "react";
import { Course, CourseModule as ModuleType, Lesson as LessonType } from "@/types/course";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Lock, ChevronDown, ChevronUp, CheckCircle, PlayCircle, BookOpen, Video, FileText, Mic2, Zap } from "lucide-react";
import AccessBadge from "@/components/ui/AccessBadge";
import { useAuth } from "@/contexts/AuthContext"; // Added
import { canAccessLessonContent } from "@/lib/permissions"; // Added

interface CourseModulesProps {
  course: Course;
}

const getLessonIcon = (contentType: LessonType['contentType']) => {
  switch (contentType) {
    case 'video': return <Video className="h-4 w-4 text-primary flex-shrink-0" />;
    case 'text': return <FileText className="h-4 w-4 text-primary flex-shrink-0" />;
    case 'audio': return <Mic2 className="h-4 w-4 text-primary flex-shrink-0" />;
    case 'interactive': return <Zap className="h-4 w-4 text-primary flex-shrink-0" />;
    default: return <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />;
  }
};

const CourseModules: React.FC<CourseModulesProps> = ({ course }) => {
  const initialOpenState: Record<string, boolean> = {};
  // Attempt to open the first module of the first level that has modules.
  if (course.structure?.levels?.length) {
    for (const level of course.structure.levels) {
      if (level.modules?.length) {
        initialOpenState[level.modules[0].id] = true;
        break; 
      }
    }
  }

  const [openModules, setOpenModules] = useState<Record<string, boolean>>(initialOpenState);

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const { user } = useAuth(); // Get user from context

  // Determine if a module is considered 'accessible for preview'.
  // A module is accessible for preview if the course itself is free,
  // or if any lesson within that module is marked as 'free' (meaning user can see at least one thing).
  // Or if the user has a high enough tier for the course itself.
  const isModuleHeaderAccessible = (module: ModuleType): boolean => {
    if (canAccessLessonContent(user?.subscriptionTier, course, module.lessons[0])) return true; // If first lesson is accessible, header is.
    // A module header is previewable if the course is free, or any lesson is free, or user has access to the course's base level
    if (course.accessLevel === 'free') return true;
    if (module.lessons.some(lesson => lesson.accessLevel === 'free')) return true;
    // Check if user has access to the course's primary access level, allowing module preview
    return hasRequiredTier(user?.subscriptionTier, course.accessLevel === 'purchase' ? 'adept' : course.accessLevel); // Simplified: purchase needs adept
  };
  
  // Helper from permissions.ts, adapted for direct use here or ensure it's imported
  const hasRequiredTier = (
    userTier: typeof user.subscriptionTier | undefined,
    contentTier: ModuleType['lessons'][0]['accessLevel'] | Course['accessLevel'] | undefined
  ): boolean => {
    const TIER_HIERARCHY: Array<typeof user.subscriptionTier> = ['free', 'seeker', 'initiate', 'adept'];
    if (!userTier || !contentTier) return false;
    if (contentTier === 'free') return true;
    if (contentTier === 'purchase') return userTier === 'adept'; // Simplified for purchase

    const userTierIndex = TIER_HIERARCHY.indexOf(userTier);
    const contentTierIndex = TIER_HIERARCHY.indexOf(contentTier as typeof user.subscriptionTier);

    if (userTierIndex === -1 || contentTierIndex === -1) return false;
    return userTierIndex >= contentTierIndex;
  };


  if (!course.structure || !course.structure.levels || course.structure.levels.length === 0) {
    return <p className="text-center text-muted-foreground py-8">O conteúdo programático detalhado deste curso ainda não está disponível.</p>;
  }

  return (
    <div className="space-y-4">
      {course.structure.levels.map((level) => (
        <div key={level.id} className="mb-6">
          <h2 className="text-xl font-semibold mb-3">{level.name}</h2>
          {level.description && <p className="text-sm text-muted-foreground mb-4">{level.description}</p>}
          
          {level.modules.length === 0 && <p className="text-sm text-muted-foreground">Nenhum módulo neste nível.</p>}

          {level.modules.map((module) => {
            const moduleActuallyAccessibleForHeader = isModuleHeaderAccessible(module);
            // Mock completion status for UI demo - replace with actual user progress
            const isModuleCompleted = Math.random() > 0.8; 

            return (
              <Collapsible
                key={module.id}
                open={openModules[module.id] || false}
                onOpenChange={() => toggleModule(module.id)}
                className="border border-border/50 rounded-lg overflow-hidden mb-4"
              >
                <CollapsibleTrigger asChild>
                  <div className="p-4 cursor-pointer bg-card/30 hover:bg-card/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3 items-center">
                        {isModuleCompleted ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : moduleActuallyAccessibleForHeader ? (
                           // Open circle or similar for accessible modules not yet completed
                          <div className="h-5 w-5 rounded-full border-2 border-primary/60 flex-shrink-0"></div>
                        ) : (
                          <Lock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <div className="text-left">
                          <h3 className="font-medium leading-tight">{module.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{module.description}</p>
                        </div>
                      </div>
                      {openModules[module.id] ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="border-t border-border/50">
                  <div className="p-4 space-y-3 bg-background">
                    {module.lessons.length > 0 && <h4 className="text-sm font-semibold mb-1 text-muted-foreground">Lições:</h4>}
                    {module.lessons.map((lesson, idx) => {
                      const lessonAccessible = canAccessLessonContent(user?.subscriptionTier, course, lesson);
                      const lessonCompleted = Math.random() > 0.9; // Mock completion for UI

                      return (
                        <div
                          key={lesson.id}
                          className={`flex justify-between items-center p-3 rounded-md text-sm transition-all ${
                            lessonAccessible ? 'hover:bg-muted/40 cursor-pointer' : 'opacity-50 cursor-not-allowed bg-muted/10'
                          }`}
                          onClick={() => {
                            if (lessonAccessible) console.log("Navigate to lesson:", lesson.id); // Placeholder
                            else alert("Acesso restrito a esta lição.");
                          }}
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            {lessonCompleted ? <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> : getLessonIcon(lesson.contentType)}
                            <span className="text-muted-foreground text-xs">{idx + 1}.</span>
                            <span className="flex-1 truncate" title={lesson.title}>{lesson.title}</span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {course.accessLevel !== 'free' && lesson.accessLevel === 'free' && (
                              <AccessBadge contentType="lesson" lessonAccessLevel={lesson.accessLevel} className="text-xs px-1.5 py-0.5" />
                            )}
                            <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                            {!lessonAccessible && <Lock className="h-3 w-3 text-muted-foreground" />}
                          </div>
                        </div>
                      );
                    })}
                    
                    {module.practice && (
                      <div className="mt-3">
                        <h4 className="text-sm font-semibold mb-1 text-muted-foreground">Prática:</h4>
                        <div className={`flex justify-between items-center p-3 rounded-md text-sm ${
                          !moduleActuallyAccessibleForHeader && "opacity-50 cursor-not-allowed bg-muted/10" // Simplified: module header access dictates practice/quiz preview
                        } ${moduleActuallyAccessibleForHeader && "hover:bg-muted/40 cursor-pointer"}`}>
                          <div className="flex items-center gap-3">
                            <PlayCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{module.practice.title}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{module.practice.recommendedDuration}</span>
                           {!moduleActuallyAccessibleForHeader && <Lock className="h-3 w-3 text-muted-foreground" />}
                        </div>
                      </div>
                    )}
                    
                    {module.quiz && (
                      <div className="mt-3">
                        <h4 className="text-sm font-semibold mb-1 text-muted-foreground">Avaliação:</h4>
                        <div className={`flex justify-between items-center p-3 rounded-md text-sm ${
                           !moduleActuallyAccessibleForHeader && "opacity-50 cursor-not-allowed bg-muted/10"
                        } ${moduleActuallyAccessibleForHeader && "hover:bg-muted/40 cursor-pointer"}`}>
                          <div className="flex items-center gap-3">
                             <PlayCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{module.quiz.title}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{module.quiz.questions.length} questões</span>
                           {!moduleActuallyAccessibleForHeader && <Lock className="h-3 w-3 text-muted-foreground" />}
                        </div>
                      </div>
                    )}
                    
                    {!moduleActuallyAccessibleForHeader && course.accessLevel !== 'free' && (
                       <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-md text-center">
                        <p className="text-sm text-amber-700 dark:text-amber-400 flex items-center justify-center gap-2">
                          <Lock className="h-4 w-4" />
                          Este módulo requer um plano superior ou compra avulsa para acesso completo.
                        </p>
                         {/* Button to upgrade, link to /pricing or specific course purchase page */}
                         {/* <Button size="sm" variant="link" className="mt-1 text-amber-600 dark:text-amber-500">Ver opções de acesso</Button> */}
                      </div>
                    )}
                    
                    {/* Placeholder for "Start Module" button, logic would depend on overall module accessibility and user progress */}
                    {/* {moduleActuallyAccessibleForHeader && (
                      <div className="flex justify-end mt-4">
                        <Button size="sm">Iniciar Módulo</Button>
                      </div>
                    )} */}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </div>
      ))}
    </div>
  );
};

export default CourseModules;
