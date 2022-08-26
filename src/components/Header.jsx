import styled from "styled-components";

import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 30%;
  }
`;

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
          alt="logo"
          className="logo"
        />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;
