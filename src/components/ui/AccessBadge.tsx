import React from 'react';
import { Badge } from '@/components/ui/badge'; // Assuming shadcn/ui Badge
import { Course } from '@/types/course';
import { Master } from '@/types/master';
import { Mission } from '@/types/mission';

type AccessLevel = Course['accessLevel']; // 'free' | 'seeker' | 'initiate' | 'adept' | 'purchase'
type Tier = Master['requiredTier'] | Mission['requiredTier']; // 'free' | 'seeker' | 'initiate' | 'adept'
type LessonAccessLevel = 'free' | 'seeker' | 'initiate' | 'adept';

interface AccessBadgeProps {
  accessLevel?: AccessLevel;
  requiredTier?: Tier;
  lessonAccessLevel?: LessonAccessLevel;
  isFeaturedFree?: boolean;
  oneTimePurchasePrice?: number;
  contentType: 'course' | 'master' | 'mission' | 'lesson';
  className?: string;
}

const AccessBadge: React.FC<AccessBadgeProps> = ({
  accessLevel,
  requiredTier,
  lessonAccessLevel,
  isFeaturedFree,
  oneTimePurchasePrice,
  contentType,
  className,
}) => {
  let text = '';
  let variant: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'premium' | 'purchase' = 'default';
  let title = '';

  if (contentType === 'course') {
    if (isFeaturedFree && accessLevel === 'free') {
      text = 'Destaque Gratuito';
      variant = 'success';
      title = 'Este curso é gratuito e está em destaque!';
    } else if (accessLevel === 'free') {
      text = 'Gratuito';
      variant = 'success';
      title = 'Este curso é de acesso gratuito.';
    } else if (accessLevel === 'seeker') {
      text = 'Plano Seeker';
      variant = 'premium'; // Using 'premium' for a distinct style, can be customized
      title = 'Acesso com o plano Seeker ou superior.';
    } else if (accessLevel === 'initiate') {
      text = 'Plano Initiate';
      variant = 'premium';
      title = 'Acesso com o plano Initiate ou superior.';
    } else if (accessLevel === 'adept') {
      text = 'Plano Adept';
      variant = 'premium';
      title = 'Acesso com o plano Adept.';
    } else if (accessLevel === 'purchase') {
      text = oneTimePurchasePrice ? `Compra Avulsa (R$${oneTimePurchasePrice.toFixed(2)})` : 'Compra Avulsa';
      variant = 'purchase'; // Custom variant for purchase
      title = 'Este curso está disponível para compra individual.';
    }
  } else if (contentType === 'master' && requiredTier) {
    title = `Acesso a este mestre requer o plano ${requiredTier.charAt(0).toUpperCase() + requiredTier.slice(1)}.`;
    if (requiredTier === 'free') {
      text = 'Acesso Livre';
      variant = 'success';
    } else {
      text = `Requer ${requiredTier.charAt(0).toUpperCase() + requiredTier.slice(1)}`;
      variant = 'destructive'; // Or another color like 'premium' based on design
    }
  } else if (contentType === 'mission' && requiredTier) {
    title = `Acesso a esta missão requer o plano ${requiredTier.charAt(0).toUpperCase() + requiredTier.slice(1)}.`;
    if (requiredTier === 'free') {
      text = 'Missão Livre';
      variant = 'success';
    } else {
      text = `Requer ${requiredTier.charAt(0).toUpperCase() + requiredTier.slice(1)}`;
      variant = 'destructive';
    }
  } else if (contentType === 'lesson' && lessonAccessLevel) {
    title = `Esta lição é de acesso ${lessonAccessLevel === 'free' ? 'gratuito' : `do plano ${lessonAccessLevel}`}.`;
    if (lessonAccessLevel === 'free') {
      text = 'Aula Gratuita';
      variant = 'success';
    } else {
      // For lessons within paid courses, we might not need a badge, or a subtle one
      // text = `Aula ${lessonAccessLevel.charAt(0).toUpperCase() + lessonAccessLevel.slice(1)}`;
      // variant = 'outline';
      return null; // Often, non-free lessons in a paid course don't need individual badges
    }
  }

  if (!text) return null;

  // Define custom styles for variants if not directly supported by Badge component
  const getVariantClass = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700';
      case 'premium':
        return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700';
      case 'purchase':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700';
      case 'destructive':
         return 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/50 dark:text-purple-300 dark:border-purple-700'; // Using purple for requiredTiers
      default:
        return '';
    }
  };
  
  // Note: The shadcn/ui Badge doesn't have 'success', 'premium', 'purchase' as default variants.
  // We'll use the className to apply custom styles for these.
  // For 'default', 'secondary', 'destructive', 'outline', it will use the built-in styles.
  
  const isCustomVariant = ['success', 'premium', 'purchase'].includes(variant) || (variant === 'destructive' && (contentType === 'master' || contentType === 'mission'));

  return (
    <Badge 
      // variant={isCustomVariant ? 'outline' : variant} // Use outline as base for custom styled ones
      className={`${isCustomVariant ? getVariantClass() : ''} ${className || ''}`}
      title={title}
    >
      {text}
    </Badge>
  );
};

export default AccessBadge;
