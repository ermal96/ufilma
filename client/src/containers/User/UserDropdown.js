import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userActions";
import { RiEmotionLine } from "react-icons/ri";
import { setUserDropdown } from "../../store/actions/headerActions";

const UDropdown = styled.div`
  position: relative;
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
  min-width: 20rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.constants.radiusMd + "rem"};
  padding: ${({ theme }) => theme.sizes.sm};
  text-align: right;
  right: 0;
  top: 5.5rem;

  li {
    list-style: none;
    margin: 2.5rem 0;
    position: relative;
    &:before {
      content: "";
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      border-radius: 50px;
      background: red;
      width: 1rem;
      height: 0.3rem;
      position: absolute;
    }
    p {
      cursor: pointer;
      margin-right: 2rem;
      font-size: 1.2rem;
      color: inherit;
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
        <RiEmotionLine />
      </UDropdownHead>

      {userDropdown ? (
        <UDropdownBody>
          <li>
            <p>{user.name}</p>
          </li>
          <li>
            <p>{user.email}</p>
          </li>
          <li>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </li>
        </UDropdownBody>
      ) : null}
    </UDropdown>
  );
};

export default UserDropdown;
