import { UserProfile } from '@/types/user';
import { Course, Lesson } from '@/types/course';
import { Master } from '@/types/master';
import { Mission } from '@/types/mission';

export type SubscriptionTier = 'free' | 'seeker' | 'initiate' | 'adept';
export type ContentAccessLevel = Course['accessLevel']; // Includes 'purchase'
export type ContentRequiredTier = Master['requiredTier'] | Mission['requiredTier'] | Lesson['accessLevel'];


// Defines the hierarchy of tiers. Higher index means higher tier.
const TIER_HIERARCHY: SubscriptionTier[] = ['free', 'seeker', 'initiate', 'adept'];

/**
 * Checks if a user's subscription tier is sufficient to access content
 * with a specific required tier or access level.
 *
 * @param userTier The user's current subscription tier.
 * @param contentTier The tier required by the content.
 * @returns True if the user has access, false otherwise.
 */
export const hasRequiredTier = (
  userTier: SubscriptionTier | undefined,
  contentTier: ContentRequiredTier | undefined
): boolean => {
  if (!userTier || !contentTier) return false; // Or handle as needed, e.g. default to false if undefined
  if (contentTier === 'free') return true; // Free content is always accessible

  const userTierIndex = TIER_HIERARCHY.indexOf(userTier);
  const contentTierIndex = TIER_HIERARCHY.indexOf(contentTier as SubscriptionTier); // Cast, as 'purchase' is handled separately

  if (userTierIndex === -1 || contentTierIndex === -1) {
    // Should not happen if types are correct, but good to handle
    return false; 
  }

  return userTierIndex >= contentTierIndex;
};

/**
 * Determines if a user can access a specific piece of content (Course, Master, Mission, Lesson).
 * 
 * @param userSubscriptionTier The user's current subscription tier.
 * @param content The content item (Course, Master, Mission, or Lesson).
 * @param contentType The type of content ('course', 'master', 'mission', 'lesson').
 * @returns True if access is granted, false otherwise.
 */
export const canAccessContent = (
  userSubscriptionTier: SubscriptionTier | undefined,
  content: Course | Master | Mission | Lesson,
  contentType: 'course' | 'master' | 'mission' | 'lesson'
): boolean => {
  if (!userSubscriptionTier) return false; // No user tier, no access to non-free

  if (contentType === 'course') {
    const course = content as Course;
    if (course.accessLevel === 'free') return true;
    if (course.accessLevel === 'purchase') {
      // Mock logic: For now, assume 'purchase' courses are only accessible by 'adept' tier
      // or if a specific 'purchasedCourses' array existed on the user profile.
      return userSubscriptionTier === 'adept'; 
    }
    return hasRequiredTier(userSubscriptionTier, course.accessLevel);
  } else if (contentType === 'master') {
    const master = content as Master;
    if (master.requiredTier === 'free') return true;
    return hasRequiredTier(userSubscriptionTier, master.requiredTier);
  } else if (contentType === 'mission') {
    const mission = content as Mission;
    if (mission.requiredTier === 'free') return true;
    return hasRequiredTier(userSubscriptionTier, mission.requiredTier);
  } else if (contentType === 'lesson') {
    const lesson = content as Lesson;
    // Lesson access depends on its own accessLevel AND the course's overall accessLevel.
    // If the course is free, all its lessons are accessible.
    // If the lesson itself is free, it's accessible.
    // Otherwise, user tier must meet lesson tier (which is usually same or higher than course tier).
    // For this function, we assume the parent course access has already been checked for course-level pages.
    // This function is more for individual lesson items within an already accessed (or partially accessed) course.
    if (lesson.accessLevel === 'free') return true;
    return hasRequiredTier(userSubscriptionTier, lesson.accessLevel);
  }

  return false;
};

/**
 * Determines if a specific lesson within a course is accessible to the user.
 * This considers both the course's access level and the lesson's specific access level.
 * 
 * @param userSubscriptionTier The user's current subscription tier.
 * @param course The course the lesson belongs to.
 * @param lesson The lesson to check access for.
 * @returns True if the lesson content should be accessible, false otherwise.
 */
export const canAccessLessonContent = (
  userSubscriptionTier: SubscriptionTier | undefined,
  course: Course,
  lesson: Lesson
): boolean => {
  if (!userSubscriptionTier) return lesson.accessLevel === 'free'; // Only free lessons if no user tier

  // If the course itself is free, all its lessons are accessible regardless of individual lesson settings
  if (course.accessLevel === 'free') return true;
  
  // If the lesson is explicitly marked as free, it's accessible
  if (lesson.accessLevel === 'free') return true;

  // For 'purchase' courses, if not free, assume only accessible if user has adept or purchased (mocked as adept)
  if (course.accessLevel === 'purchase') {
      return userSubscriptionTier === 'adept'; 
  }
  
  // Otherwise, user's tier must be sufficient for the lesson's specific access level
  // AND generally for the course's access level too (though usually lesson.accessLevel >= course.accessLevel for non-free lessons)
  return hasRequiredTier(userSubscriptionTier, lesson.accessLevel) && hasRequiredTier(userSubscriptionTier, course.accessLevel);
};
