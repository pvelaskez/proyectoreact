
import styled from 'styled-components'
import React from 'react'
import Button from './Button'

const Card = (props) => {
  return (
    <>
    <Cards>
        <Image src= {props.data.img} alt=""/>
        <figcaption>
            <Producto>{props.data.title}</Producto>
        </figcaption>
                                                
            <Precio >{props.data.precio}</Precio><Peso>1 kg.</Peso>
        <Button />
    </Cards>
   
  
    </>
  )
}

export default Card

const Cards = styled.figure`
width: 200px;
height: 310px;
border: 1px solid transparent;
border-radius: 5px;
background-color: white;
margin-left: 0;
margin-right: 0;


`
//box-shadow: 2px 2px 10px

const Image = styled.img`
width: 100%;
height: 50%;
object-fit:cover;
`

const Producto = styled.h3`
line-height: 2;
margin-left: 1.5rem;
font-size: 1rem;
`
const Precio = styled.a
`
font-size: 1.2rem;
margin-right: 3.5rem;
margin-left: 1.7rem;
color: rgba(97, 149, 102);
border-radius: 5px;git

`
const Peso = styled.a
`
font-size: 0.9rem;
color: rgba(165, 166, 168);
background-color: rgb(233, 233, 233);
padding: 5px 19px;
border-radius: 5px;

`

