import { useState } from "react";
import { empresas } from "../data/empresas";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useAuth();
  const [empresaId, setEmpresaId] = useState("");

  const handleIngresar = () => {
    const empresa = empresas.find(e => e.id === Number(empresaId));
    if (empresa) login(empresa);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">SafeLink</h1>
        <p className="login-subtitle">Acceso a infraestructura</p>

        <select
          className="login-select"
          value={empresaId}
          onChange={(e) => setEmpresaId(e.target.value)}
        >
          <option value="">Seleccionar empresa…</option>
          {empresas.map(e => (
            <option key={e.id} value={e.id}>
              {e.nombre}
            </option>
          ))}
        </select>

        <button
          className="login-button"
          disabled={!empresaId}
          onClick={handleIngresar}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}
