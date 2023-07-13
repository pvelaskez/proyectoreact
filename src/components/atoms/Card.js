
import styled from 'styled-components'
import React from 'react'
import Button from './Button'

const Card = (props) => {
  return (
    
    <Cards>
        <Image src= {props.data.img} alt=""/>
        <figcaption>
            <Producto>{props.data.title}</Producto>
        </figcaption>
                                                
            <Precio >{props.data.precio}</Precio><Peso>1 kg.</Peso>
        <Button />
    </Cards>
  )
}

export default Card

const Cards = styled.figure`
width: 180px;
height: 410px;
border: 2px solid white;
background-color: White;
margin-left: 0;
margin-right: 0;

`

const Image = styled.img`
width: 100%;
height: 40%;
object-fit:cover;
`

const Producto = styled.h3`
line-height: 8;
margin-left: 1rem;
font-size: 1rem;
`
const Precio = styled.a
`
font-size: 1.2rem;
margin-right: 2.5rem;
margin-left: 1rem;
color: rgba(97, 149, 102);
border-radius: 5px;

`
const Peso = styled.a
`
font-size: 0.9rem;
color: rgba(165, 166, 168);
background-color: rgb(233, 233, 233);
padding: 5px 19px;
border-radius: 5px;

`

