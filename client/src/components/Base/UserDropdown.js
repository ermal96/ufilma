import React, { useState } from "react";
import styled from "styled-components";
import { CgUserlane } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userActions";

const UDropdown = styled.div`
  position: relative;
`;

const UDropdownHead = styled.div`
  font-size: 3rem;
  cursor: pointer;
  color: ${(props) => (props.state ? props.theme.colors.secondary : "unset")};

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const UDropdownBody = styled.ul`
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
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  return (
    <UDropdown>
      <UDropdownHead state={state} onClick={() => setState(!state)}>
        <CgUserlane />
      </UDropdownHead>

      {state ? (
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
