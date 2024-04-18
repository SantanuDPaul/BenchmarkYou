import React from 'react';
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
          <MDBNavbarBrand href='#'>BenchmarkYourself</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}