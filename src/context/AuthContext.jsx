// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [empresa, setEmpresa] = useState(
    JSON.parse(localStorage.getItem("empresa")) || null
  );

  const login = (empresaSeleccionada) => {
    localStorage.setItem("empresa", JSON.stringify(empresaSeleccionada));
    setEmpresa(empresaSeleccionada);
  };

  const logout = () => {
    localStorage.removeItem("empresa");
    setEmpresa(null);
  };

  return (
    <AuthContext.Provider value={{ empresa, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
