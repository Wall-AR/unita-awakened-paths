
import React, { createContext, useContext, useState } from 'react';
import { UserProfile } from '@/types/user';

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual authentication logic
      const mockUser: UserProfile = {
        id: "1",
        username: "test_user",
        email: email,
        displayName: "Test User",
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
          titles: [],
          masters: [],
          specialContent: []
        },
        preferences: {
          theme: 'light',
          notifications: true,
          emailUpdates: true,
          language: 'pt-BR'
        }
      };
      setUser(mockUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
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
