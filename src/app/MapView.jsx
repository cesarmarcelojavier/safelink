import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Periscopio from "./Periscopio";
import RackView from "./RackView";

import planoA from "../data/empresaA/plano.jpg";
import planoB from "../data/empresaB/plano.jpg";

const planos = {
  A: planoA,
  B: planoB,
};

import { periscopiosA} from "../data/empresaA/periscopios";
import { periscopiosB} from "../data/empresaB/periscopios"; 

const periscopiosPorEmpresa = {
  A: periscopiosA,
  B: periscopiosB,
};



export default function MapView() {
  const { empresa } = useAuth();
  if (!empresa) {
    return null;
  }



  const [periscopioActivo, setPeriscopioActivo] = useState(null);
  const [bocaActiva, setBocaActiva] = useState(null);
 


  // 🗺️ plano dinámico según empresa
 // const planoSrc = `/data/${empresa}/plano.jpg`;
  const planoSrc = planos[empresa.id];
  const periscopios = periscopiosPorEmpresa[empresa.id] || [];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* PLANO */}
      <div style={{ position: "relative", flex: 1 }}>
        <img
          src={planoSrc}
          alt={`Plano ${empresa.nombre}`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />

        {/* Los periscopios los conectamos en el paso 2 */}
      </div>

      {periscopios.map((p) => (
  <Periscopio
    key={p.id}
    data={p}
    activo={periscopioActivo?.id === p.id}
    onClick={() => {
      setPeriscopioActivo(p);
      setBocaActiva(null);
    }}
  />
))}

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
