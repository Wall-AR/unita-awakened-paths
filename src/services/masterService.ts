import { Master } from "@/types/master";
import { masterGuides } from "@/data/mastersData.expanded";

/**
 * Retrieves all masters (guides).
 * @returns {Promise<Master[]>} A promise that resolves to an array of all masters.
 */
export const getMasters = async (): Promise<Master[]> => {
  return Promise.resolve(masterGuides);
};

/**
 * Retrieves a specific master by their ID.
 * @param {string} id - The ID of the master to retrieve.
 * @returns {Promise<Master | undefined>} A promise that resolves to the master object if found, or undefined otherwise.
 */
export const getMasterById = async (id: string): Promise<Master | undefined> => {
  const master = masterGuides.find((m) => m.id === id);
  return Promise.resolve(master || undefined);
};

/**
 * Retrieves all masters belonging to a specific category.
 * @param {string} category - The category to filter masters by (e.g., "S", "A", "B", "C").
 * @returns {Promise<Master[]>} A promise that resolves to an array of masters for the given category.
 */
export const getMastersByCategory = async (category: string): Promise<Master[]> => {
  const filteredMasters = masterGuides.filter((m) => m.category === category);
  return Promise.resolve(filteredMasters);
};
