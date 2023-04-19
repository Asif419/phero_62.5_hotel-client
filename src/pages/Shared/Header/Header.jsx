import React from 'react';
import './Header.css'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <div >
        <NavLink
          className=
          {
            ({ isActive }) =>
              isActive ? 'default active text-decoration-none'
                : 'default inActive text-decoration-none'
          }
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className=
          {
            ({ isActive }) =>
              isActive ? 'default active text-decoration-none'
                : 'default inActive text-decoration-none'
          }
          to='/login'
        >
          Login
        </NavLink>
      </div>
    </Container>
  );
};

export default Header;