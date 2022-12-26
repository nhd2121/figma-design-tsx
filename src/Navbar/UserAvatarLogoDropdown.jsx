import { Logout, LogoGithub } from "@carbon/icons-react";
import "./UserAvatarLogoDropdown.scss";

export default function UserAvatarLogoDropdown({ dropdown }) {
  return (
    <div className={`dropdown-avatar-logo ${dropdown ? "show" : ""}`}>
      <div className="user-infor-and-role">
        <div className="role">Administrator</div>
        <div className="user-avatar">
          <LogoGithub />
        </div>
      </div>
      <div className="list-option">
        <div className="list-option-sub">Sub-menu item</div>
        <div className="list-option-sub">Sub-menu item</div>
        <div className="list-option-sub">Sub-menu item</div>
      </div>
      <div className="label">
        <div className="label-name">Label</div>
        <div className="log-out-icon">
          <Logout />
        </div>
      </div>
    </div>
  );
}
