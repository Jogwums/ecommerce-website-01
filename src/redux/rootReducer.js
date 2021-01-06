import {combineReducers}  from 'redux'

import userReducer from './User/userReducer'
import productsReducer from './Products/productReducer'

export default combineReducers({
    user: userReducer,
    products: productsReducer    
})