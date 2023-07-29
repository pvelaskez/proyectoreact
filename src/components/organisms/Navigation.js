
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Navigation = () => {
  return (
<>
<Navbar>
    <nav>
        <Link href="">Home</Link>
        <Link href=''>Productos</Link>
        <Link href=''>About Us</Link>
        <Link href=''>Servicios</Link>
        <Link href=''>Contacto</Link>
    </nav>
</Navbar>
</>
   
  )
}

export default Navigation

const Navbar = styled.div`
background-color: White;


`