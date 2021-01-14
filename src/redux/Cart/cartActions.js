import { cartTypes } from './cartTypes';

export const addProduct = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
});

export const removeCartItem = (cartItem) => ({
    type: cartTypes.REMOVE_CART_ITEM,
    payload: cartItem,
});

export const reduceCartItem = (cardItem) => ({
    type: cartTypes.REDUCE_CART_ITEM,
    payload: cardItem,
})

export const clearCart = () => ({
    type: cartTypes.CLEAR_CART_ITEM,
})

export const cartTotal = (cardItem) => ({
    type: cartTypes.GET_TOTAL,
    payload: cardItem,
})