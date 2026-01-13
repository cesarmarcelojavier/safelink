function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h4>Capas</h4>

      <label><input type="checkbox" defaultChecked /> Datos</label>
      <label><input type="checkbox" defaultChecked /> Telefonía</label>
      <label><input type="checkbox" /> CCTV</label>
      <label><input type="checkbox" /> Libre</label>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 200,
    background: "#f3f4f6",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
};

export default Sidebar;
