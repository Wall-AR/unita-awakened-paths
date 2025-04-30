
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Local storage keys
const USER_STORAGE_KEY = 'unitas_user';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Implement actual authentication logic
      const mockUser: UserProfile = {
        id: "1",
        username: email.split('@')[0],
        email: email,
        displayName: email.split('@')[0].replace(/[^a-zA-Z0-9]/g, ' '),
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
          language: 'pt-BR'
        }
      };
      
      // Store user in local storage
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, username: string) => {
    setIsLoading(true);
    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Implement actual registration logic
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
          language: 'pt-BR'
        }
      };
      
      // Store user in local storage
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    setIsLoading(true);
    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Implement actual password reset logic
      // This is a mock implementation
      console.log('Password reset initiated for:', email);
    } catch (error) {
      console.error('Password reset failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, forgotPassword, isLoading }}>
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
