import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/userActions";
import { RiUserSettingsLine } from "react-icons/ri";
import { setUserDropdown } from "../../../store/actions/headerActions";
import { RiUser3Line, RiMailLine, RiLogoutCircleRLine } from "react-icons/ri";
import styles from "./UserDropdown.module.scss";

const UserDropdown = () => {
  const user = useSelector(({ user }) => user.user);
  const userDropdown = useSelector(({ header }) => header.userDropdown);

  const dispatch = useDispatch();

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHead} variant={userDropdown ? "accent" : "main"} onClick={() => dispatch(setUserDropdown(!userDropdown))}>
        <RiUserSettingsLine />
      </div>

      {userDropdown ? (
        <div className={styles.dropdownBody}>
          <li>
            <p>
              <RiUser3Line /> {user.name}
            </p>
          </li>
          <li>
            <p>
              <RiMailLine />
              {user.email}
            </p>
          </li>
          <li>
            <p onClick={() => dispatch(logout())}>
              <RiLogoutCircleRLine />
              Logout
            </p>
          </li>
        </div>
      ) : null}
    </div>
  );
};

export default UserDropdown;
