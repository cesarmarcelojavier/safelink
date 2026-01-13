import RackView from "./RackView";
import { dispositivos } from "./rackData";

function InfoPanel() {
  return (
    <aside style={styles.panel}>
      <h4>Periscopio P-01</h4>

      <p><strong>Boca 7 · DATOS</strong></p>

      <RackView
        device={dispositivos.patchera_1}
        puertoActivo={1}
      />

      <RackView
        device={dispositivos.switch_2}
        puertoActivo={14}
      />
    </aside>
  );
}

const styles = {
  panel: {
    width: 260,
    background: "#f9fafb",
    padding: 16,
    borderLeft: "1px solid #e5e7eb",
    overflowY: "auto"
  }
};

export default InfoPanel;
