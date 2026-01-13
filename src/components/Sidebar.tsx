import {
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";

interface MenuItem {
  label: string;
  icon?: ReactElement;
  collapsedIcon?: ReactElement;
  onClick?: () => void;
}

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const menuItems: MenuItem[] = [
    {
      label: "Dashboard",
      icon: <ChartBarIcon className="w-5 h-5" />,
      collapsedIcon: <ChartBarIcon className="w-7 h-7" />,
      onClick: () => console.log("Dashboard"),
    },
    {
      label: "Usuarios",
      icon: <UsersIcon className="w-5 h-5" />,
      collapsedIcon: <UsersIcon className="w-7 h-7" />,
      onClick: () => console.log("Usuarios"),
    },
    {
      label: "Configuración",
      icon: <Cog6ToothIcon className="w-5 h-5" />,
      collapsedIcon: <Cog6ToothIcon className="w-7 h-7" />,
      onClick: () => console.log("Configuración"),
    },
    {
      label: "Reportes",
      icon: <DocumentChartBarIcon className="w-5 h-5" />,
      collapsedIcon: <DocumentChartBarIcon className="w-7 h-7" />,
      onClick: () => console.log("Reportes"),
    },
  ];

  return (
    <aside
      className={`bg-white border-r border-gray-200 h-full overflow-y-auto transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div>
        <div className="p-3 flex items-center gap-2">
          <BuildingStorefrontIcon
            className={`transition-all duration-300 ${
              isCollapsed ? "w-8 h-8 mx-auto" : "w-7 h-7"
            }`}
          />
          <h2
            className={`text-2xl font-bold text-gray-900 transition-all duration-300 ${
              isCollapsed
                ? "opacity-0 w-0 overflow-hidden"
                : "opacity-100 delay-300"
            }`}
          >
            Negocio Virtual
          </h2>
        </div>

        

        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`w-full text-gray-700 hover:bg-gray-100 transition-colors duration-500 ${
                isCollapsed
                  ? "flex flex-col items-center justify-center px-2 py-3 gap-1"
                  : "flex items-center gap-3 px-4 py-3 text-left"
              }`}
            >
              {isCollapsed ? item.collapsedIcon : item.icon}
              <span
                className={`font-medium transition-all duration-300 ${
                  isCollapsed
                    ? "text-[10px] opacity-100"
                    : "opacity-100 delay-300"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
