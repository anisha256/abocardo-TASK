import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = styled.div`
  top: 0;
  width: 100%;
  height: 60px;
  color: white;
  background-color: lightcoral;
  display: grid;
  grid-template-columns: 60px 1fr 2fr 1.5fr 60px;
  font-family: sans-serif;
  position: sticky;
  -webkit-box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.09);
  @media screen and (max-width: 1080px) {
    height: 45px;
    grid-template-columns: 45px 3fr 2fr 3fr 45px;
  }
`;
const NavLeft = styled.div`
  display: grid;
  grid-column: 2/3;
  justify-content: start;
  align-items: center;
`;
const NavCenter = styled.div`
  display: flex;
  grid-column: 4/5;
  align-items: center;
  justify-content: space-around;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
  a.active {
    color: red;
  }
  a.hover {
    color: red;
  }
  @media screen and (max-width: 998px) {
    display: none;
  }
`;
const Hambuger = styled.div`
  display: none;
  @media screen and (max-width: 998px) {
    display: flex;
    grid-column: 4/5;
    align-items: center;
    justify-content: flex-end;
    color: white;
    cursor: pointer;
  }
`;
const MobileMenu = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 45px;
  right: 0;
  width: 100%;
  padding: 20px;
  border-top: 1px solid white;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
    margin-bottom: 20px;
  }
  a.active {
    color: red;
  }
  a.hover {
    color: red;
  }
  background-color: rgba(230, 126, 126, 0.27);
  /* background-color: pink; */
`;

const Navbar = () => {
  const [showMediaIcon, setSetMediaIcon] = useState(false);

  return (
    <>
      <Nav>
        <NavLeft>
          <h2>
            <span>R</span>eact
            <span>T</span>ask
          </h2>
        </NavLeft>
        <NavCenter>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/generate">Generate</NavLink>
        </NavCenter>
        <Hambuger>
          <GiHamburgerMenu onClick={() => setSetMediaIcon(!showMediaIcon)} />
          {showMediaIcon && (
            <MobileMenu>
              <NavLink to="/">Home</NavLink>

              <NavLink to="/about">About</NavLink>

              <NavLink to="/generate">Generate</NavLink>
            </MobileMenu>
          )}
        </Hambuger>
      </Nav>
    </>
  );
};

export default Navbar;
