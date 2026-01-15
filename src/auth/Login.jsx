import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import  empresas  from "../data/empresas";

export default function Login() {
  const { login } = useAuth();

  const [empresaSeleccionada, setEmpresaSeleccionada] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   // if (!empresaSeleccionada) return;

    // 🔓 Login libre (mock)
    const empresa = empresas.find(
      (e) => e.id === empresaSeleccionada
    );
    if (!empresa) return;
    login(empresa);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* LADO IZQUIERDO */}
        <div className="login-left">
          <h1>SafeLink</h1>
          <h2>Smart Security & IT </h2>
          <p>
            Gestión visual de infraestructura, cableado de redes y seguridad integral.
          </p>
        </div>

        {/* LADO DERECHO */}
        <div className="login-right">
          <form onSubmit={handleSubmit}>
            <label>Empresa</label>
            <select
              value={empresaSeleccionada}
              onChange={(e) => setEmpresaSeleccionada(e.target.value)}
              required
            >
              <option value="">Seleccionar empresa</option>
              {empresas.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.nombre}
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
