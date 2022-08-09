import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <Wrapper>
      <Logo to={"/"}>
        <h1>COV1D TRAVEL</h1>
      </Logo>
      {user ? (
        <NavLink to={"/profile"}>
          <UserIcon />
        </NavLink>
      ) : (
        <NavLink to={"/login"}>Login/Register</NavLink>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: var(--header-height);
  align-content: center;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: var(--page-horizontal-padding);
`;

const UserIcon = styled(FaUser)`
  font-size: 1.5em;
`;

const Logo = styled(NavLink)`
  text-decoration: none;
`;

export default Header;
