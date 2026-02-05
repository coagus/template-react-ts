import {
  BuildingStorefrontIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
  PencilIcon,
  Squares2X2Icon,
  UsersIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import type { MenuItemType } from "./MenuItem";
import Menu from "./Menu";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const menuItems: MenuItemType[] = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: ChartBarIcon,
    },
    {
      label: "Usuarios",
      path: "/usuarios",
      icon: UsersIcon,
    },
    {
      label: "Componentes",
      path: "/componentes",
      icon: Squares2X2Icon,
      
      children: [
        {
          label: "TextField",
          path: "/componentes/textfield",
          icon: PencilIcon,
        }
      ]
      
    },
    {
      label: "Configuración",
      path: "/configuracion",
      icon: Cog6ToothIcon,
    },
    {
      label: "Reportes",
      path: "/reportes",
      icon: DocumentChartBarIcon,
      
      children: [
        {
          label: "Reportes Generales",
          path: "/reportes/generales",
          icon: DocumentChartBarIcon,
        },
        {
          label: "Reportes Personalizados",
          path: "/reportes/personalizados",
          icon: DocumentChartBarIcon,
        }
      ],
    },
  ];

  return (
    <aside
      className={`bg-theme-surface border-r border-theme h-full overflow-y-auto transition-all duration-300 
        ${isCollapsed ? "w-20" : "w-64"}`}
    >
      <div>
        <Link to="/" className="flex items-center gap-2 p-3">
          <BuildingStorefrontIcon
            className={`transition-all duration-300 
              ${isCollapsed ? "w-8 h-8 mx-auto" : "w-7 h-7"}`}
            style={{ color: "var(--color-text-primary)" }}
          />
          <h2
            className={`text-2xl font-bold text-theme-primary transition-all duration-300 
              ${isCollapsed
                ? "opacity-0 w-0 overflow-hidden"
                : "opacity-100 delay-300"}`}
          >
            Negocio Virtual
          </h2>
        </Link>

        <Menu menuItems={menuItems} isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
};

export default Sidebar;
