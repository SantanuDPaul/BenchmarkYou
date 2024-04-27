import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBNavbar fixed='top' light bgColor='light'>
        <MDBContainer fluid>
          <Link to='/' style={{ textDecoration: 'none' }}>
          <MDBNavbarBrand href='#'>BenchmarkYourself</MDBNavbarBrand>
        </Link>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}