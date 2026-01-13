import { useAuth } from "../context/AuthContext";
import Login from "../auth/Login";
import MapView from "./MapView";

export default function AppLayout() {
  const { empresa } = useAuth();

  if (!empresa) {
    return <Login />;
  }

  return <MapView />;
}
