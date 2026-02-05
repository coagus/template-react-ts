import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
import type { MenuItemType } from "./MenuItem";

interface MenuProps {
  menuItems: MenuItemType[];
  isCollapsed: boolean;
}

const Menu = ({ menuItems, isCollapsed }: MenuProps) => {
  const location = useLocation();
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number>(-1);

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenuIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <nav>
      {menuItems.map((item, index) =>
        item.children ? (
          <SubMenu
            key={index}
            item={item as MenuItemType & { children: NonNullable<MenuItemType["children"]> }}
            isCollapsed={isCollapsed}
            activePath={location.pathname}
            isOpen={openSubMenuIndex === index}
            onToggle={() => handleSubMenuToggle(index)}
          />
        ) : (
          <MenuItem
            key={index}
            item={item}
            isCollapsed={isCollapsed}
            activePath={location.pathname}
            isSubMenu={false}
          />
        )
      )}
    </nav>
  );
};

export type { MenuItemType };
export default Menu;