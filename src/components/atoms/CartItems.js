import React from 'react'


const CartItems = ({data, deleteFromCart}) => {

  const {id, name, price,quantity} = data;

  return (
   
    <div className="cart-item">
        <h4>{name}</h4>
        <h5>${price} x {quantity} = ${price * quantity}</h5>
        <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
        <button onClick={() => deleteFromCart(id)}>Eliminar todos</button>
    </div>
  )
}

export default CartItems
