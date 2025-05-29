
import React from "react";
import { Course } from "@/types/course";
import AccessBadge from "@/components/ui/AccessBadge"; // Import AccessBadge

interface CourseHeaderProps {
  course: Course;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ course }) => {
  return (
    <div className="bg-background/80 backdrop-blur-sm border-b border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0 h-24 w-24 md:h-32 md:w-32 rounded-xl border border-border/50 bg-card/30 flex items-center justify-center text-4xl md:text-5xl">
            {course.icon}
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-3 items-center">
              <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                {course.tradition}
              </span>
              <span className="text-xs px-2 py-1 bg-secondary/20 rounded-full">
                {course.level}
              </span>
              {course.isNew && (
                <span className="text-xs px-2 py-1 bg-green-500/20 text-green-500 rounded-full">
                  Novo
                </span>
              )}
              {course.isFeatured && (
                <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-500 rounded-full">
                  Destaque
                </span>
              )}
              <AccessBadge 
                contentType="course"
                accessLevel={course.accessLevel}
                isFeaturedFree={course.isFeaturedFree}
                oneTimePurchasePrice={course.oneTimePurchasePrice}
              />
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading">{course.title}</h1>
            
            {course.accessLevel === 'purchase' && course.oneTimePurchasePrice && (
              <p className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mt-2">
                R$ {course.oneTimePurchasePrice.toFixed(2)}
              </p>
            )}

            <p className="mt-3 text-muted-foreground md:text-lg">
              {course.description}
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary">⏱️</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">📚</span>
                <span>{course.lessons} lições</span>
              </div>
              {course.modules && (
                <div className="flex items-center gap-2">
                  <span className="text-primary">📑</span>
                  <span>{course.modules} módulos</span>
                </div>
              )}
              {/* The specific star icon for free/premium is removed as AccessBadge handles this */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
