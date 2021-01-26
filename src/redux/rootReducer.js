import {combineReducers}  from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import userReducer from './User/userReducer'
import productsReducer from './Products/productReducer'
import CartReducer from './Cart/cartReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    cartData: CartReducer,    
})

const configStorage = {
    key: 'root',
    storage,
    whitelist: ['cartData', 'product']
};
//products is currently being persisted via the routes
// user is being persisted via firebase auth 
// cartData is what we're persisting using redux-persist 
//persist store then reducer 


export default persistReducer(configStorage, rootReducer);