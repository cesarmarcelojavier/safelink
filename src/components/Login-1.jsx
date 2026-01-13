import { useState } from "react";
import { clientes, usuarios } from "../data/mockData";

function Login() {
  const [clienteId, setClienteId] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!clienteId || !usuario || !password) {
      setError("Completa todos los campos");
      return;
    }

    const usuariosCliente = usuarios[clienteId];

    if (
      usuariosCliente &&
      usuariosCliente[usuario] &&
      usuariosCliente[usuario].password === password
    ) {
      const session = {
        clienteId,
        clienteNombre: clientes.find(c => c.id === clienteId)?.nombre,
        usuario,
        rol: usuariosCliente[usuario].rol
      };

      console.log("LOGIN OK ✅", session);

      // Más adelante: guardar en localStorage y redirigir
      alert("Login exitoso. Mirá la consola 👀");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "80px auto" }}>
      <h2>SafeLink</h2>
      <p>Acceso a infraestructura</p>

      <form onSubmit={handleLogin}>
        <label>Cliente</label>
        <select
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
        >
          <option value="">Seleccionar cliente</option>
          {clientes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>

        <br /><br />

        <label>Usuario</label>
        <input
          type="text"
          value={usuario}
          disabled={!clienteId}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <br /><br />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          disabled={!clienteId}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={!clienteId}>
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
