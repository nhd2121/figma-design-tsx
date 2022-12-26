import { UserAvatar } from "@carbon/icons-react";
import "./UserAvatarLogo.scss";
import { useState } from "react";
import UserAvatarLogoDropdown from "./UserAvatarLogoDropdown";
import "./UserAvatarLogo.scss";

export default function UserAvatarLogo() {
  const [dropdown, setDropdown] = useState(false);

  const setStatusDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <div className="avatar-logo-menu">
      <button
        className="avatar-logo"
        type="button"
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => {
          setStatusDropdown();
        }}
      >
        <UserAvatar className="icon-right-menu" />
      </button>
      <UserAvatarLogoDropdown dropdown={dropdown} />
    </div>
  );
}
