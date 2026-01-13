import patcheraImg from "../images/p1.jpg";
import sw1Img from "../images/sw1.jpg";
import sw2Img from "../images/sw2.jpg";

const switchImages = {
  sw1: sw1Img,
  sw2: sw2Img
};

export default function RackView({ periscopio, boca, onSelectBoca }) {
  if (!periscopio) {
    return <p style={{ padding: 16 }}>Seleccioná un periscopio</p>;
  }

  // 👉 VISTA DETALLE BOCA
  if (boca) {
    return (
      <div style={{ padding: 16 }}>
        <h3>
          Periscopio {periscopio.id}
        </h3>

        <h4>
          Boca {boca.id} · {boca.tipo.toUpperCase()}
        </h4>

        <p>
          Patchera {boca.patchera} – Boca {boca.bocaPatchera}
        </p>

        <img
          src={patcheraImg}
          alt="Patchera"
          style={{ width: "100%", marginBottom: 12 }}
        />

        <p>
          Switch {boca.switch} – Puerto {boca.puertoSwitch}
        </p>

        <img
          src={switchImages[boca.switchImg]}
          alt="Switch"
          style={{ width: "100%" }}
        />

        <button
          style={{ marginTop: 16 }}
          onClick={() => onSelectBoca(null)}
        >
          ← Volver
        </button>
      </div>
    );
  }

  // 👉 VISTA PERISCOPIO
  return (
    <div style={{ padding: 16 }}>
      <h3>Periscopio {periscopio.id}</h3>

      {periscopio.bocas.map((b) => (
        <div
          key={b.id}
          onClick={() => onSelectBoca(b)}
          style={{
            border: "1px solid #ddd",
            borderRadius: 6,
            padding: 10,
            marginBottom: 10,
            cursor: "pointer"
          }}
        >
          <strong>Boca {b.id}</strong><br />
          Tipo: {b.tipo}
        </div>
      ))}
    </div>
  );
}
