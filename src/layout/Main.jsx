import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Outlet></Outlet>
    </Container>
  );
};

export default Main;