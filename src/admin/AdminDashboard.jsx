import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-card">
        <h2>Nueva Empresa</h2>
        <p>Crear una nueva empresa desde el sistema</p>
      </div>

      <div className="admin-card">
        <h2>Modificar Empresa</h2>
        <p>Editar empresas existentes</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
