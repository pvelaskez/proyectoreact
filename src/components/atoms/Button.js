import React from 'react'

const Button = () => {
  return (
    <>
    <button>Agregar</button>
    <style jsx>{`
    button {
        color: rgba(54, 120, 61);
        background-color:  rgba(173, 227, 115);
        padding: 10px 50px;
        border-radius: 5px;
        font-size: 1rem;
        border: 0;
        transition: 0.3s;
        margin-top: 10px;
        margin-left: 20px;
        font-weight: bold;
        
    }


    button:hover {
        background-color:  rgba(173, 227, 115, 0.6);
    }

    
    `}</style>
    </>
    
  )
}

export default Button