import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import Periscopio from "./Periscopio";
import RackView from "./RackView";

export default function MapView() {
  const { empresa } = useAuth();

  const [periscopios, setPeriscopios] = useState([]);
  const [periscopioActivo, setPeriscopioActivo] = useState(null);
  const [bocaActiva, setBocaActiva] = useState(null);

  const imgRef = useRef(null);
  const [imgSize, setImgSize] = useState(null);

  if (!empresa) return null;

  const planoSrc = `/data/${empresa.id}/plano.jpg`;

  // cargar periscopios
  useEffect(() => {
    fetch(`/data/${empresa.id}/periscopios.json`)
      .then((r) => r.json())
      .then(setPeriscopios)
      .catch(() => setPeriscopios([]));
  }, [empresa]);

  // medir imagen REAL renderizada
  const handleImgLoad = () => {
    const img = imgRef.current;
    if (!img) return;

    const ratio = img.naturalWidth / img.naturalHeight;
    const container = img.parentElement.getBoundingClientRect();

    let width = container.width;
    let height = width / ratio;

    if (height > container.height) {
      height = container.height;
      width = height * ratio;
    }

    setImgSize({ width, height });
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#000" }}>
      <div
        style={{
          flex: 1,
          background: "#111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* WRAPPER EXACTO */}
        {imgSize && (
          <div
            style={{
              position: "absolute",
              width: imgSize.width,
              height: imgSize.height,
            }}
          >
            {periscopios.map((p) => (
              <Periscopio
                key={p.id}
                x={`${p.x}%`}
                y={`${p.y}%`}
                onClick={() => setPeriscopioActivo(p)}
              />
            ))}
          </div>
        )}

        <img
          ref={imgRef}
          src={planoSrc}
          alt=""
          onLoad={handleImgLoad}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div style={{ width: 360, borderLeft: "1px solid #333" }}>
        <RackView
          periscopio={periscopioActivo}
          boca={bocaActiva}
          onSelectBoca={setBocaActiva}
        />
      </div>
    </div>
  );
}