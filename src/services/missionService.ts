import { Mission } from "@/types/mission";
import { missions } from "@/data/missionsData";
import { paths } from "@/data/pathsData"; // Used for getMissionsByPath
// import { courses } from "@/data/coursesData"; // Potentially for relating missions to courses if needed in future - commented out as not used

/**
 * Retrieves all missions.
 * @returns {Promise<Mission[]>} A promise that resolves to an array of all missions.
 */
export const getMissions = async (): Promise<Mission[]> => {
  return Promise.resolve(missions);
};

/**
 * Retrieves a specific mission by its ID.
 * @param {string} id - The ID of the mission to retrieve.
 * @returns {Promise<Mission | undefined>} A promise that resolves to the mission object if found, or undefined otherwise.
 */
export const getMissionById = async (id: string): Promise<Mission | undefined> => {
  const mission = missions.find((m) => m.id === id);
  return Promise.resolve(mission || undefined);
};

/**
 * Retrieves all missions associated with a specific master.
 * @param {string} masterId - The ID of the master.
 * @returns {Promise<Mission[]>} A promise that resolves to an array of missions for the given master.
 */
export const getMissionsByMasterId = async (masterId: string): Promise<Mission[]> => {
  const filteredMissions = missions.filter((m) => m.masterId === masterId);
  return Promise.resolve(filteredMissions);
};

/**
 * Retrieves all missions associated with a specific path name.
 * This is achieved by finding masters linked to the path, then their missions.
 * @param {string} pathName - The name of the path.
 * @returns {Promise<Mission[]>} A promise that resolves to an array of missions for the given path.
 */
export const getMissionsByPathName = async (pathName: string): Promise<Mission[]> => {
  // Find the path object by pathName
  const path = paths.find(p => p.name === pathName);
  if (!path || !path.masterIds) {
    return Promise.resolve([]);
  }
  // Filter missions whose masterId is in the path's masterIds list
  const filteredMissions = missions.filter(mission => 
    path.masterIds?.includes(mission.masterId)
  );
  return Promise.resolve(filteredMissions);
};
