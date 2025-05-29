import { Course } from "@/types/course";
import { courses } from "@/data/coursesData";

/**
 * Retrieves all courses.
 * @returns {Promise<Course[]>} A promise that resolves to an array of all courses.
 */
export const getCourses = async (): Promise<Course[]> => {
  return Promise.resolve(courses);
};

/**
 * Retrieves a specific course by its ID.
 * @param {string} id - The ID of the course to retrieve.
 * @returns {Promise<Course | undefined>} A promise that resolves to the course object if found, or undefined otherwise.
 */
export const getCourseById = async (id: string): Promise<Course | undefined> => {
  const course = courses.find((c) => c.id === id);
  return Promise.resolve(course || undefined);
};

/**
 * Retrieves all courses belonging to a specific path.
 * @param {string} pathName - The name of the path to filter courses by.
 * @returns {Promise<Course[]>} A promise that resolves to an array of courses for the given path.
 */
export const getCoursesByPath = async (pathName: string): Promise<Course[]> => {
  const filteredCourses = courses.filter((c) => c.pathName === pathName);
  return Promise.resolve(filteredCourses);
};

/**
 * Retrieves all featured courses.
 * @returns {Promise<Course[]>} A promise that resolves to an array of featured courses.
 */
export const getFeaturedCourses = async (): Promise<Course[]> => {
  const featured = courses.filter((c) => c.isFeatured === true);
  return Promise.resolve(featured);
};
