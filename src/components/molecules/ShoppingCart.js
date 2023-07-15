
import { useReducer } from 'react';
import { TYPES } from '@/actions/shoppingActions';
import { shoppingReducer, shoppingInitialState } from '@/reducer/shoppingReducer';
import CartItems from '../atoms/CartItems';
import Product from '../atoms/Product';

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {products, cart} = state

    const   addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})
  
    const   deleteFromCart = (id) => {}
    const   clearCart = () => {}

  return (
    <>
    <h2>Carrito de Compra</h2>
    <h3>Productos</h3>
    <div className= "box grid-responsive">
      {products.map((product) => (
      <Product key={product.id} data={product} addToCart={addToCart}/>
        ))}
    </div>
    <h3>Carrito</h3>
    <div className="box">
      {
        cart.map((item, i) => (
        <CartItems key={i} data={item} deleteFromCart = {deleteFromCart }/>
        ))}
        

    </div>
    <button onClick={clearCart}>Limpiar Carrito</button>
    </>
    
  );
};

export default ShoppingCart