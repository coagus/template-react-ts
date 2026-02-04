import { createElement } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";
import type { MenuItemType } from "./MenuItem";

interface SubMenuProps {
  item: MenuItemType & { children: NonNullable<MenuItemType["children"]> };
  isCollapsed: boolean;
  activePath: string;
  isOpen: boolean;
  onToggle: () => void;
}

const SubMenu = ({ item, isCollapsed, activePath, isOpen, onToggle }: SubMenuProps) => {

  const id = `submenu-${item.label.replace(/\s/g, "-").toLowerCase()}`;
  const panelId = `${id}-panel`;

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={id}
        className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-theme-secondary hover-theme transition-colors duration-200 focus:outline-none"
      >
        <span
          className={`w-full text-theme-secondary hover-theme transition-colors duration-500 ${
            isCollapsed
              ? "flex flex-col items-center justify-center px-2 py-3 gap-1"
              : "flex items-center gap-3 text-left"
          }`}
        >
          <span style={{ color: "var(--color-text-secondary)" }}>
            {item.icon &&
              createElement(item.icon, {
                className: isCollapsed ? "w-7 h-7" : "w-5 h-5",
              })}
          </span>
          <span
            className={`font-medium text-theme-secondary transition-all duration-300 ${
              isCollapsed ? "text-[10px] opacity-100" : "opacity-100 delay-300"
            }`}
          >
            {item.label}
          </span>
        </span>
        {isCollapsed
          ? null
          : isOpen ? (
              <ChevronRightIcon className="h-4 w-4 shrink-0 transition-transform duration-200 text-theme-secondary" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 text-theme-secondary" />
            )}
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {item.children.map((child, index) => (
          <MenuItem
            key={index}
            item={child}
            isCollapsed={isCollapsed}
            activePath={activePath}    
            isSubMenu={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
