import React from 'react';
import { Navbar,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  NavLink
} from 'reactstrap';

function Navigation() {
  return (
    <div className="navbar">
      <Navbar

        dark
        expand
        fixed=""
        light
      >
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
          <NavItem>
            <NavLink href="/home" id="logo">
              FPL Scout
            </NavLink>
          </NavItem>
            <NavItem>
              <NavLink href="/players/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
