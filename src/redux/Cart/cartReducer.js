import { cartTypes } from './cartTypes'
// import { addProduct, reduceCartItem, reduceCartItem, clearCart } from './Cart_Utils'

const INITIAL_STATE = {
    cartItems: []

}


const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartTypes.ADD_TO_CART:
            return{
                ...state,
                cartItems: [
                    ...state.cartItems,
                    {
                        ...action.payload
                    }
                ]
            }
        // case cartTypes.REDUCE_CART_ITEM:
        //     return{
        //         ...state,
        //         cartItems: cartItems,
        //     }   
        // case cartTypes.REMOVE_CART_ITEM:
        //     return{
        //         ...state,
        //         cartItems: cartItems,

        //     }
        case cartTypes.CLEAR_CART_ITEMS:
            return{
                ...state,
                ...INITIAL_STATE,
            }
        default:
            return state
    }
}

export default CartReducer;