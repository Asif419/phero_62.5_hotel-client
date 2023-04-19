import React from 'react';
import './Header.css'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import headerImage from './../../../assets/hotel.jpg'

const Header = () => {
  return (
    <Container className='position-relative rounded mt-3' style=
      {
        {
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '30vh',
          backgroundPosition: 'center',
        }
      }
    >
      <div className='p-2 text-white fs-5 d-flex gap-3 fw-bold'>
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
          to='/book'
        >
          Book
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
        <NavLink
          className=
          {
            ({ isActive }) =>
              isActive ? 'default active text-decoration-none'
                : 'default inActive text-decoration-none'
          }
          to='/register'
        >
          Sign up
        </NavLink>
      </div>
      <div className='position-absolute top-50 start-50 text-white'>
        <h3>Welcome to BD</h3>
      </div>
    </Container >
  );
};

export default Header;

