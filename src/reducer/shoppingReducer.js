
import { TYPES } from "@/actions/shoppingActions";

export const shoppingInitialState = {
    products: [
        { id: 1, name: "Producto A", price:10},
        { id: 2, name: "Producto A", price:50},
        { id: 3, name: "Producto A", price:100},
        { id: 4, name: "Producto A", price:150}, 
        { id: 5, name: "Producto A", price:200},
    ],
    cart: [],
        
};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload);

            let itemInCart = state.cart.find(item => item.id === newItem.id)

            return itemInCart
            ? {
                ...state, 
                cart:state.cart.map(item =>
                    item.id === newItem.id
                    ? {...item, quantity: item.quantity + 1}
                    :item
                )
            }
            : {
                ...state,
                cart: [...state.cart, {...newItem, quantity:1}]
            }

         
        }
        case TYPES.REMOVE_ONE_PRODUCT: {}
        case TYPES.REMOVE_ALL_PRODUCT: {}
        case TYPES.CLEAR_CART: {}
        default:
            return state;
    }}