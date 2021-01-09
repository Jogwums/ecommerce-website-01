import {combineReducers}  from 'redux'

import userReducer from './User/userReducer'
import productsReducer from './Products/productReducer'
import CartReducer from './Cart/cartReducer'

export default combineReducers({
    user: userReducer,
    products: productsReducer,
    cartData: CartReducer,    
})