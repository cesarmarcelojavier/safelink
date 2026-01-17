import { useAuth } from "../context/AuthContext";
import Login from "../auth/Login";
import MapView from "./MapView";
import AdminLayout from "../admin/AdminLayout";

export default function AppLayout() {
  const { empresa, logout } = useAuth();

  console.log("AppLayout empresa:", empresa);

  if (!empresa) {
    return <Login />;
  }
  if (empresa.id ==="SafeLink") {
    return <AdminLayout />;
  }


  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER */}
      <div
        style={{
          height: 56,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(15, 23, 42, 0.85)",
          color: "#fff",
          backdropFilter: "blur(10px)",
        }}
      >
        <div>
          <strong>SafeLink</strong>
          <span style={{ marginLeft: 12, opacity: 0.7 }}>
            {empresa.nombre}
          </span>
        </div>

        <button
          onClick={logout}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            padding: "6px 14px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Cerrar sesión
        </button>
      </div>

      {/* CONTENIDO */}
      <div style={{ flex: 1 }}>
        <MapView />
      </div>
    </div>
  );
}
