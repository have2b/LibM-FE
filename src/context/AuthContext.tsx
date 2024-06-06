import axiosInstace from "@/api/axiosInstance";
import { User } from "@/models";
import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface AuthContextProps {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      axiosInstace
        .get("users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data.user);
        });
    }
  }, [token]);

  const login = useCallback((username: string, password: string) => {
    axiosInstace.post("auth/login", { username, password }).then((res) => {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      axiosInstace
        .get("users/profile", {
          headers: { Authorization: `Bearer ${res.data.token}` },
        })
        .then((res) => {
          setUser(res.data.user);
          window.location.href = "/";
        });
    });
  }, []);

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const authContextValue: AuthContextProps = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
    }),
    [user, token, login],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
