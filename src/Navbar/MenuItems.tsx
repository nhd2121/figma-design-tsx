import Dropdown from "./Dropdown";
import "./Navbar.scss";
import "./MenuItem.scss";
import { ChevronDown, ChevronUp } from "@carbon/icons-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function MenuItems(props: any) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className="menu-items"
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      onClick={() => setDropdown(false)}
    >
      {props.items.submenu ? (
        <>
          <NavLink
            to={`${props.items.url}`}
            className={`btn-item left-option ${
              props.depthLevel > 0 ? "dropdown-btn-item" : ""
            }`}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {props.items.title}{" "}
            {dropdown ? (
              <ChevronUp className="icon-left-menu" />
            ) : (
              <ChevronDown className="icon-left-menu" />
            )}
            {props.depthLevel > 0 ? "" : <span className="arrow" />}
          </NavLink>
          <Dropdown
            submenus={props.items.submenu}
            dropdown={dropdown}
            depthLevel={props.depthLevel || 0}
          />
        </>
      ) : (
        <Link
          to={`${props.items.url}`}
          className="left-option-menu btn-item"
          type="button"
        >
          {props.items.title}
        </Link>
      )}
    </li>
  );
}
