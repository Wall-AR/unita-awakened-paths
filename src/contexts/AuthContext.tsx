
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';

/**
 * @interface AuthContextType
 * @description Defines the shape of the authentication context provided to consumers.
 */
interface AuthContextType {
  /** The current authenticated user's profile, or null if not authenticated. */
  user: UserProfile | null;
  /** 
   * Attempts to log in a user with the given credentials.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {Promise<void>} A promise that resolves on successful login or rejects on failure.
   */
  login: (email: string, password: string) => Promise<void>;
  /** 
   * Attempts to register a new user with the given details.
   * @param {string} email - The new user's email.
   * @param {string} password - The new user's password.
   * @param {string} username - The new user's chosen username.
   * @returns {Promise<void>} A promise that resolves on successful registration or rejects on failure.
   */
  register: (email: string, password: string, username: string) => Promise<void>;
  /** Logs out the current user. */
  logout: () => void;
  /** 
   * Initiates the password reset process for the given email.
   * @param {string} email - The user's email for password reset.
   * @returns {Promise<void>} A promise that resolves on successful initiation or rejects on failure.
   */
  forgotPassword: (email: string) => Promise<void>;
  /** Indicates if an authentication operation is currently in progress. */
  isLoading: boolean;
  /** Stores any error that occurred during an authentication operation. */
  authError: Error | null;
  /** A boolean flag indicating if the user is currently authenticated. */
  isAuthenticated: boolean;
}

/**
 * @const AuthContext
 * @description React context for managing authentication state and operations.
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Local storage keys
const USER_STORAGE_KEY = 'unitas_user';

const MOCK_USER_1: UserProfile = {
  id: "user-123-test",
  username: "testuser",
  email: "test@example.com",
  displayName: "Test User",
  joinedDate: new Date("2023-01-15T10:00:00Z"),
  level: 5,
  xp: 1250,
  attributes: { wisdom: 10, compassion: 8, harmony: 7, integrity: 9, inspiration: 6 },
  unlocks: { titles: ["Explorer", "Adept"], masters: ["hermes"], specialContent: [] }, // Assuming 'hermes' is a valid masterId
  preferences: { theme: 'dark', notifications: true, emailUpdates: false, language: 'en-US', profileVisibility: 'private', twoFactorEnabled: false, activityLogging: true }
};

const MOCK_USER_2: UserProfile = {
  id: "user-456-demo",
  username: "demouser",
  email: "demo@example.com",
  displayName: "Demo User",
  joinedDate: new Date("2022-11-20T14:30:00Z"),
  level: 2,
  xp: 300,
  attributes: { wisdom: 5, compassion: 5, harmony: 5, integrity: 5, inspiration: 5 },
  unlocks: { titles: ["Seeker"], masters: [], specialContent: [] },
  preferences: { theme: 'light', notifications: false, emailUpdates: true, language: 'pt-BR', profileVisibility: 'public', twoFactorEnabled: false, activityLogging: false }
};

/**
 * @component AuthProvider
 * @description Provides authentication state and functions to its children components.
 * Manages user sessions, login, registration, logout, and password reset functionalities.
 * @param {{ children: React.ReactNode }} props - The child components to be wrapped by the provider.
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<Error | null>(null);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let foundUser: UserProfile | null = null;

      if (email === MOCK_USER_1.email && password === "password123") {
        foundUser = MOCK_USER_1;
      } else if (email === MOCK_USER_2.email && password === "password456") {
        foundUser = MOCK_USER_2;
      }

      if (foundUser) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(foundUser));
        setUser(foundUser);
      } else {
        throw new Error("Invalid email or password.");
      }
    } catch (error) {
      console.error('Login failed:', error);
      setAuthError(error as Error);
      throw error; // Re-throw so UI can handle if needed
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, username: string) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Current behavior: creates a new mock user based on input
      const mockUser: UserProfile = {
        id: Date.now().toString(),
        username: username,
        email: email,
        displayName: username,
        joinedDate: new Date(),
        level: 1,
        xp: 0,
        attributes: {
          wisdom: 1,
          compassion: 1,
          harmony: 1,
          integrity: 1,
          inspiration: 1
        },
        unlocks: {
          titles: ["Novato"],
          masters: ["hermes"],
          specialContent: []
        },
        preferences: {
          theme: 'light',
          notifications: true,
          emailUpdates: true,
          language: 'pt-BR',
          profileVisibility: 'public',
          twoFactorEnabled: false,
          activityLogging: true
        }
      };
      
      // Store user in local storage
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Registration failed:', error);
      setAuthError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Implement actual password reset logic
      // This is a mock implementation
      console.log('Password reset initiated for:', email);
      // Simulate success, no user change, but clear any previous error
    } catch (error) {
      console.error('Password reset failed:', error);
      setAuthError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    setUser(null);
    setAuthError(null); // Clear any errors on logout
  };

  return (
    <AuthContext.Provider value={{ 
        user, 
        login, 
        register, 
        logout, 
        forgotPassword, 
        isLoading, 
        authError, 
        isAuthenticated: !!user 
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
