import { Path, SpecializationPath } from "@/types/path";
import { paths } from "@/data/pathsData";
import { specializationPaths } from "@/data/specializationsData";

/**
 * Retrieves all main learning paths.
 * @returns {Promise<Path[]>} A promise that resolves to an array of all main paths.
 */
export const getPaths = async (): Promise<Path[]> => {
  return Promise.resolve(paths);
};

/**
 * Retrieves a specific main learning path by its ID.
 * @param {string} id - The ID of the path to retrieve.
 * @returns {Promise<Path | undefined>} A promise that resolves to the path object if found, or undefined otherwise.
 */
export const getPathById = async (id: string): Promise<Path | undefined> => {
  const path = paths.find((p) => p.id === id);
  return Promise.resolve(path || undefined);
};

/**
 * Retrieves all specialization paths.
 * @returns {Promise<SpecializationPath[]>} A promise that resolves to an array of all specialization paths.
 */
export const getSpecializationPaths = async (): Promise<SpecializationPath[]> => {
  return Promise.resolve(specializationPaths);
};

/**
 * Retrieves a specific specialization path by its ID.
 * @param {string} id - The ID of the specialization path to retrieve.
 * @returns {Promise<SpecializationPath | undefined>} A promise that resolves to the specialization path object if found, or undefined otherwise.
 */
export const getSpecializationPathById = async (id: string): Promise<SpecializationPath | undefined> => {
  const specPath = specializationPaths.find((sp) => sp.id === id);
  return Promise.resolve(specPath || undefined);
};
