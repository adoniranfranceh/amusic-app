import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import * as SecureStore from 'expo-secure-store';
import { getCurrentUser } from '../services/auth';

type User = {
  id: string;
  name: string;
  email: string;
};

interface AuthContextProps {
  isAuthenticated: boolean;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  loading: boolean;
  loadingInitial: boolean;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const token =  '';

      if (!token) {
        setLoadingInitial(false);
        setLoading(false);
        return;
      }

      try {
        const user = await getCurrentUser();
        if (user) {
          setCurrentUser(user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setLoadingInitial(false);
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const logout = async () => {
    await SecureStore.deleteItemAsync('token');
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  if (loadingInitial) {
    return <></>;
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, setCurrentUser, loading, loadingInitial, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
