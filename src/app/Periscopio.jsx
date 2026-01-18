export default function Periscopio({ x, y, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: "#00d1ff",
        cursor: "pointer",
        boxShadow: "0 0 6px rgba(0, 209, 255, 0.8)",
      }}
      title="Periscopio"
    />
  );
}
