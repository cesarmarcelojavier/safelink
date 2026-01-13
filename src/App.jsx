import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./app/AppLayout";

function App() {
  return (
    <AuthProvider>
      <AppLayout />
    </AuthProvider>
  );
}

export default App;
