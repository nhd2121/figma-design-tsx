import "./MenuItem.scss";
import "./Dropdown.scss";
import MenuItems from "./MenuItems";

export default function Dropdown(props: any) {
  const { submenus, depthLevel, dropdown } = props;
  const newDepthLevel = Number(depthLevel || 0) + 1;
  const dropdownClass = depthLevel >= 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass}  ${dropdown ? "show" : ""}`}>
      {submenus?.length > 0 &&
        submenus?.map((submenu: any, index: number) => (
          <MenuItems items={submenu} key={index} depthLevel={newDepthLevel} />
        ))}
    </ul>
  );
}
