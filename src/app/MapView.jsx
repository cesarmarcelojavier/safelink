import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Periscopio from "./Periscopio";
import RackView from "./RackView";

export default function MapView() {
  const { empresa } = useAuth();
  if (!empresa) {
    return null;
  }



  const [periscopioActivo, setPeriscopioActivo] = useState(null);
  const [bocaActiva, setBocaActiva] = useState(null);

  // 🗺️ plano dinámico según empresa
  const planoSrc = `/data/${empresa}/plano.jpg`;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* PLANO */}
      <div style={{ position: "relative", flex: 1 }}>
        <img
          src={planoSrc}
          alt={`Plano ${empresa}`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />

        {/* Los periscopios los conectamos en el paso 2 */}
      </div>

      {/* PANEL DERECHO */}
      <div style={{ width: 360, borderLeft: "1px solid #ddd" }}>
        <RackView
          periscopio={periscopioActivo}
          boca={bocaActiva}
          onSelectBoca={setBocaActiva}
        />
      </div>
    </div>
  );
}
