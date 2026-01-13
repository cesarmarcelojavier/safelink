export default function Periscopio({ data, onClick, activo }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: `${data.x}%`,
        top: `${data.y}%`,
        width: 28,
        height: 28,
        border: `2px solid ${activo ? "#003cff" : "#0078ff"}`,
        background: activo
          ? "rgba(0,60,255,0.35)"
          : "rgba(0,120,255,0.25)",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        borderRadius: 4,
        zIndex: 10
      }}
      title={data.id}
    />
  );
}
