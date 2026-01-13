// src/auth/Login.jsx
import { empresas } from "../data/empresas";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div style={{ padding: 40 }}>
      <h2>Seleccionar empresa</h2>

      {empresas.map((e) => (
        <button
          key={e.id}
          onClick={() => login(e)}
          style={{ display: "block", margin: "10px 0" }}
        >
          {e.nombre}
        </button>
      ))}
    </div>
  );
}
