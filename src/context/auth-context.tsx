import { createContext, useContext, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  login: (email: string, password: string) => {},
  logout: () => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(false);
    const isLoggedIn = localStorage.getItem("auth");

    if (isLoggedIn) setIsAuthenticated(true);
  }, []);

  const login = (email: string, password: string) => {
    // Simulate login
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("auth", "");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
