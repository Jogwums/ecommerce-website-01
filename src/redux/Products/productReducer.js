import {FETCH_PRODUCTS_REQUEST,
     FETCH_PRODUCTS_SUCCESS, 
     FETCH_PRODUCTS_FAILURE,
     FETCH_PRODUCT,
     SET_PRODUCT} from './productTypes'

import {} from './productActions';

import { handleSingleProduct } from './../Products/productUtils'

const initialState = {
    loading: false,
    products: [],
    product: [],
    error: '',
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload
            }
        case FETCH_PRODUCTS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_PRODUCT:
            return{
                ...state,
                loading: true,
                product: action.payload,

            }
        case SET_PRODUCT:
            return{
                ...state,
                loading: false,
                
                product: handleSingleProduct({
                    prevProduct: state.product,
                    currentProduct: action.payload 
                })
                
            }
        default:
            return state
    }
}

export default productsReducer