import React from 'react';
import { Nav, NavIcon } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
