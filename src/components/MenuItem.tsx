import { ComponentType, createElement } from "react";
import { Link } from "react-router-dom";

interface MenuItemType {
  label: string;
  path?: string;
  icon?: ComponentType<{ className?: string }>;
  children?: MenuItemType[];
}

interface MenuItemProps {
  key: number
  item: MenuItemType;
  isCollapsed: boolean;
  activePath: string;
  isSubMenu: boolean;
}

const MenuItem = ({ key, item, isCollapsed, activePath, isSubMenu }: MenuItemProps) => {
  const isActive = activePath === item.path;

  return (
    <Link
      key={key}
      to={item.path ?? '/'}
      className={`w-full text-theme-secondary hover-theme transition-colors duration-500 
              ${isCollapsed
          ? "flex flex-col items-center justify-center px-2 py-3 gap-1"
          : "flex items-center gap-3 px-4 py-3 text-left"} 
              ${isActive ? "bg-theme-surface-secondary border-r-2 border-theme-primary" : ""}
              ${isSubMenu && !isCollapsed ? "pl-8" : ""}`}
    >
      <span style={{ color: "var(--color-text-secondary)" }}>
        {item.icon &&
          createElement(item.icon, {
            className: isCollapsed ? "w-7 h-7" : "w-5 h-5",
          })}
      </span>
      <span
        className={`font-medium text-theme-secondary transition-all duration-300 
              ${isCollapsed ? "text-[10px] opacity-100" : "opacity-100 delay-300"}`}
      >
        {item.label}
      </span>
    </Link>
  )
}

export default MenuItem;
export type { MenuItemType };