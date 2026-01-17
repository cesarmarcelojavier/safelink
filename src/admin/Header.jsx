import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout } = useAuth();

  return (
    <header
      style={{
        height: 60,
        background: "#0e2a3a",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <h2>SafeLink – Consola de Administración</h2>

      <button
        onClick={logout}
        style={{
          background: "transparent",
          color: "white",
          border: "1px solid white",
          padding: "6px 12px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
