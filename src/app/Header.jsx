function Header() {
  return (
    <header style={styles.header}>
      <strong>SafeLink</strong>
      <span>Infraestructura · Demo</span>
    </header>
  );
}

const styles = {
  header: {
    height: 50,
    background: "#1f2937",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px"
  }
};


import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { empresa, logout } = useAuth();

  return (
    <div
      style={{
        height: 60,
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(15, 23, 42, 0.8)",
        color: "#fff",
        backdropFilter: "blur(10px)",
      }}
    >
      <div>
        <strong>SafeLink</strong>
        {empresa && (
          <span style={{ marginLeft: 12, opacity: 0.7 }}>
            {empresa.nombre}
          </span>
        )}
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
  );
}
