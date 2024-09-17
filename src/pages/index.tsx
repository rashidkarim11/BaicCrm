import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type IndexPageProps = {
  isAuthenticated: boolean;
};
export function IndexPage({ isAuthenticated }: IndexPageProps) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return null;
}
