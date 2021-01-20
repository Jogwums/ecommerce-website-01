import { cartTypes } from './cartTypes'
import { handleAddToCart, handleRemoveCartItem, handleReduceCartItem } from './cartUtils'

const INITIAL_STATE = {
    loading: false,
    cartItems: [],
    count: 0,
    total: 0,

}


const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartTypes.ADD_TO_CART:
            return{
                ...state,
                cartItems: handleAddToCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                }),
                count: state.count + 1
            }
        case cartTypes.REDUCE_CART_ITEM:
            return{
                ...state,
                cartItems: handleReduceCartItem({
                    prevCartItems: state.cartItems,
                    cartItemToReduce: action.payload
                }),
                count: state.count - 1
            }   
        case cartTypes.REMOVE_CART_ITEM:
            return{
                ...state,
                cartItems: handleRemoveCartItem({
                    prevCartItems: state.cartItems,
                    cartItemToRemove: action.payload
                }),
                count: state.count - 1
            }
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


