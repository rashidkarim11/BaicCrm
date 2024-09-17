import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";

type AuthGuardProps = {
  children: React.ReactNode;
};

export function AuthGuard({ children }: AuthGuardProps) {
  let location = useLocation();
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) return <h2>Loading...</h2>;

  if (isAuthenticated) return <>{children}</>;

  return <Navigate to="/login" state={{ from: location }} replace />;
}
