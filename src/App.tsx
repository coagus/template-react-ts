import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import { UsersProvider } from "./contexts/UsersProvider";
import { useAuth } from "./hooks/useAuth";
import LoginLayout from "./layouts/LoginLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import Configuracion from "./pages/Configuracion";
import Reportes from "./pages/Reportes";
import Componentes from "./pages/Componentes";

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginLayout />;
  }

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="configuracion" element={<Configuracion />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="componentes" element={<Componentes />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UsersProvider>
          <AppContent />
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
