import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { empresa } = useAuth();

  if (!empresa) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
