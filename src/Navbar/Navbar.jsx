import topLogoNavbar from "../assets/top-logo-navbar.png";
import "./Navbar.scss";
import MenuItems from "./MenuItems.jsx";
import MenuItemRightSide from "./MenuItemRightSide.jsx";
import { menuItems } from "./ListMenuItems.js";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-side">
        <Link to="/">
          <img src={topLogoNavbar} className="logo left-option" alt="logo" />
        </Link>
        <nav>
          <ul className="items">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <MenuItemRightSide />
      </div>
    </div>
  );
}
