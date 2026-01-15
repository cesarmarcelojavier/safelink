// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  //const [empresa, setEmpresa] = useState(null);
  const [empresa, setEmpresa] = useState(
    JSON.parse(localStorage.getItem("empresa")) || null
  );
  const [loading, setLoading] = useState(true);

  // 🔁 restaurar sesión si existe
  useEffect(() => {
    const storedEmpresa = localStorage.getItem("empresa");
    if (storedEmpresa) {
      setEmpresa(JSON.parse(storedEmpresa));
    }
    setLoading(false);
  }, []);

  const login = (empresaSeleccionada) => {
    localStorage.setItem("empresa", JSON.stringify(empresaSeleccionada));
    setEmpresa(empresaSeleccionada);
  };

  const logout = () => {
    localStorage.removeItem("empresa");
    setEmpresa(null);
  };

  if (loading) return null; // ⏳ evita parpadeos visuales

  return (
    <AuthContext.Provider value={{ empresa, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
