import axios from 'axios';

import {   
        FETCH_PRODUCTS_REQUEST,
        FETCH_PRODUCTS_SUCCESS, 
        FETCH_PRODUCTS_FAILURE,
        SET_PRODUCT,
        FETCH_PRODUCT,
    } from './productTypes'

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
    }
}

export const fetchProductsFaliure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}


//function to fetch Products 

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get('https://5fcf88c51f2374001663091f.mockapi.io/shop')
        // .then( res => console.log(res.data))
            .then(res => {
            const products = res.data.splice(0,20)
            dispatch(fetchProductsSuccess(products))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductsFaliure(errorMsg))
        })
    }
}

//single products 

export const setProduct = product => ({
    type: SET_PRODUCT,
    payload: product
})

export const fetchSingleProduct = product => ({
    type: FETCH_PRODUCT,
    payload: product
})

export const fetchProduct = (id) => {
    return (dispatch) => {  
        axios.get(`https://5fcf88c51f2374001663091f.mockapi.io/shop/${id}`)
        // .then( res => console.log(res.data))
            .then(res => {
            const product = res.data
            dispatch(fetchSingleProduct(product))
            dispatch(setProduct(...product))
        })
        .catch(error => {
            const errorMsg = error.message
            // console.log(errorMsg);
        })

    }
}

