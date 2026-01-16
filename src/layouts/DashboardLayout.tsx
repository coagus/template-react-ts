import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Detectar tamaño de pantalla y colapsar automáticamente en md o menor
  useEffect(() => {
    const checkScreenSize = () => {
      // md breakpoint en Tailwind es 768px
      const isMdOrSmaller = window.innerWidth < 1200;
      setIsSidebarCollapsed(isMdOrSmaller);
    };

    // Verificar al montar el componente
    checkScreenSize();

    // Agregar listener para cambios de tamaño
    window.addEventListener("resize", checkScreenSize);

    // Limpiar listener al desmontar
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="h-screen bg-theme-background flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} />

      {/* Contenido Principal con Header */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />

        <Container title="Dashboard" path="home / dashboard / index">
          <h1>Dashboard</h1>
        </Container>
      </div>
    </div>
  );
};

export default DashboardLayout;
