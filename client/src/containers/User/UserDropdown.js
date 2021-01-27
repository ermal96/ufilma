import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userActions";
import { RiUserSettingsLine } from "react-icons/ri";
import { setUserDropdown } from "../../store/actions/headerActions";
import { RiUser3Line, RiMailLine, RiLogoutCircleRLine } from "react-icons/ri";

const UDropdown = styled.div`
  display: flex;
  align-items: center;
`;

const UDropdownHead = styled.div`
  cursor: pointer;
  line-height: 0;

  svg {
    font-size: 2.5rem;
    border-radius: 50px;
    @media (max-width: 767px) {
      font-size: 3rem;
    }

    color: ${(props) =>
      props.state ? props.theme.colors.secondary : props.theme.colors.light};
  }
`;

const UDropdownBody = styled.ul`
  z-index: 10;
  margin: 0;
  padding: 0;
  position: absolute;
  border-bottom-left-radius: 5px;
  min-width: 26.2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.light};

  text-align: left;
  right: 0;
  top: ${({ theme }) => theme.constants.headerHeight + "rem"};

  @media (max-width: 767px) {
    width: 100%;
  }
  li {
    list-style: none;
    padding: 1rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
    p {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      margin-left: 1.5rem;
      font-size: 1.2rem;
      color: inherit;

      svg {
        font-size: 1.6rem;
        margin-right: 1rem;
      }
    }
  }
`;

const UserDropdown = () => {
  const user = useSelector(({ user }) => user.user);
  const userDropdown = useSelector(({ header }) => header.userDropdown);

  const dispatch = useDispatch();

  return (
    <UDropdown>
      <UDropdownHead
        state={userDropdown}
        onClick={() => dispatch(setUserDropdown(!userDropdown))}
      >
        <RiUserSettingsLine />
      </UDropdownHead>

      {userDropdown ? (
        <UDropdownBody>
          <li>
            <p>
              {" "}
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
        </UDropdownBody>
      ) : null}
    </UDropdown>
  );
};

export default UserDropdown;
