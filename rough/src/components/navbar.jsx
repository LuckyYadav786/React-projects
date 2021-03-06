import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  gap: 60px;
  background: grey;
  margin: 1%;
  padding: 1.2%;
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Link to="/"> home </Link>
            <Link to="/about"> about </Link>
            <Link to="/contact"> contact </Link>
            <Link to="/Login"> login </Link>
            <Link to="/users"> users </Link>
        </NavbarWrapper>
    )
}
export default Navbar;