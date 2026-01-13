import { useState } from "react";
import plano from "../images/1.jpg";
import Periscopio from "./Periscopio";
import { periscopios } from "./periscopiosData";
import RackView from "./RackView";

export default function MapView() {
  const [periscopioActivo, setPeriscopioActivo] = useState(null);
  const [bocaActiva, setBocaActiva] = useState(null);

  // 🧭 CAPTURADOR DE COORDENADAS
  const handlePlanoClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    console.log(
      `Coordenadas -> x: ${x.toFixed(2)}%, y: ${y.toFixed(2)}%`
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* PLANO */}
      <div
        style={{ position: "relative", flex: 1 }}
        onClick={handlePlanoClick}
      >
        <img
          src={plano}
          alt="Plano"
          style={{ width: "100%", display: "block" }}
        />

        {periscopios.map((p) => (
          <Periscopio
            key={p.id}
            data={p}
            activo={periscopioActivo?.id === p.id}
            onClick={(e) => {
              e.stopPropagation(); // 🔒 evita capturar click del plano
              setPeriscopioActivo(p);
              setBocaActiva(null);
            }}
          />
        ))}
      </div>

      {/* PANEL DERECHO (ÚNICO) */}
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
