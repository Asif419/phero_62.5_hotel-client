import React from 'react';
import { Container } from 'react-bootstrap';

import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <NavLink>Hello</NavLink>
      <div
        className="background-image d-flex align-items-start justify-content-start rounded"
      >
        <nav className='nav-link ps-4 pt-4 gap-3 text-white fw-bold fs-5 flex d-flex text-decoration-none'>
          <NavLink to='/' className={
            ({ isActive }) => isActive ? "active " : " "}>
            Home
          </NavLink>
          <NavLink to='/login' className={({ isActive }) =>
            isActive ? "active " : " "
          }>
            Login
          </NavLink>
          <NavLink to='/register' className={({ isActive }) =>
            isActive ? "active " : " "
          }>
            Sign up
          </NavLink>
        </nav>
      </div>
    </Container>
  );
};

export default Header;