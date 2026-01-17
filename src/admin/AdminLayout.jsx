import { useAuth } from "../context/AuthContext";

export default function AdminLayout() {
  const { logout } = useAuth();

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* HEADER */}
      <header
        style={{
          height: 60,
          background: "#0b3c5d",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <h3>SafeLink – Consola de Administración</h3>

        <button onClick={logout}>Logout</button>
      </header>

      {/* CONTENIDO */}
      <main style={{ flex: 1, background: "#fff" }}>
        {/* por ahora vacío */}
      </main>
    </div>
  );
}
