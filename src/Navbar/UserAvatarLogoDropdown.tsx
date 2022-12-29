import { Logout, LogoGithub } from "@carbon/icons-react";
import "./UserAvatarLogoDropdown.scss";

type Props = {
  dropdown: any
}

export default function UserAvatarLogoDropdown(props: Props) {
  return (
    <div className={`dropdown-avatar-logo ${props.dropdown ? "show" : ""}`}>
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
