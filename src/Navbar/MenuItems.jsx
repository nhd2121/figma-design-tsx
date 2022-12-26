import Dropdown from "./Dropdown.jsx";
import "./Navbar.scss";
import "./MenuItem.scss";
import { ChevronDown, ChevronUp } from "@carbon/icons-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function MenuItems({ items, depthLevel }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className="menu-items"
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      onClick={() => setDropdown(false)}
    >
      {items.submenu ? (
        <>
          <NavLink
            to={`${items.url}`}
            className={`btn-item left-option ${
              depthLevel > 0 ? "dropdown-btn-item" : ""
            }`}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {items.title}{" "}
            {dropdown ? (
              <ChevronUp className="icon-left-menu" />
            ) : (
              <ChevronDown className="icon-left-menu" />
            )}
            {depthLevel > 0 ? "" : <span className="arrow" />}
          </NavLink>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link
          to={`${items.url}`}
          className="left-option-menu btn-item"
          type="button"
        >
          {items.title}
        </Link>
      )}
    </li>
  );
}
