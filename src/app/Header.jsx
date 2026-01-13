function Header() {
  return (
    <header style={styles.header}>
      <strong>SafeLink</strong>
      <span>Infraestructura · Demo</span>
    </header>
  );
}

const styles = {
  header: {
    height: 50,
    background: "#1f2937",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px"
  }
};

export default Header;
