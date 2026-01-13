import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { empresas } from "../data/empresas";

export default function Login() {
  const { login } = useAuth();

  const [empresaSeleccionada, setEmpresaSeleccionada] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!empresaSeleccionada) return;

    // 🔐 login simple (mock)
    login(empresaSeleccionada);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* PANEL IZQUIERDO */}
        <div className="login-left">
          <h1>SafeLink</h1>
          <h2>Seguridad electrónica</h2>
          <p>
            Gestión visual de infraestructura, cableado estructural y seguridad.
          </p>
        </div>

        {/* PANEL DERECHO */}
        <div className="login-right">
          <form onSubmit={handleSubmit}>
            <label>Empresa</label>
            <select
              value={empresaSeleccionada}
              onChange={(e) => setEmpresaSeleccionada(e.target.value)}
              required
            >
              <option value="">Seleccionar empresa</option>
              {empresas.map((emp) => (
                <option key={emp.id} value={emp.nombre}>
                  {emp.nombre}
                </option>
              ))}
            </select>

            <label>Usuario</label>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
