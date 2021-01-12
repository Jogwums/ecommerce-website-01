import { cartTypes } from './cartTypes'
// import { addProduct, reduceCartItem, reduceCartItem, clearCart } from './Cart_Utils'

const INITIAL_STATE = {
    cartItems: [],
    count: 0

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
                ],
                count: state.count + 1
            }
        // case cartTypes.REDUCE_CART_ITEM:
        //     return{
        //         ...state,
        //         cartItems: cartItems,
        //         count: state.count - 1
        //     }   
        // case cartTypes.REMOVE_CART_ITEM:
        //     return{
        //         ...state,
        //         cartItems: cartItems,
        //         count: state.count - 1
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