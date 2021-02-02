export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find(
        cartItem => cartItem.id === nextCartItem.id
    );
};

export const handleAddToCart = ({ prevCartItems, nextCartItem}) => {

    const quantityIncrement = 1;
    const cartItemExists = existingCartItem({ prevCartItems, nextCartItem});
    
    if( cartItemExists ){
        return prevCartItems.map(cartItem => 
            cartItem.id === nextCartItem.id ? 
            {
                ...cartItem,
                quantity: cartItem.quantity + quantityIncrement
            } : cartItem
        )
    }


    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement,
        }
    ]
}

export const handleRemoveCartItem = ({
    prevCartItems,
    cartItemToRemove
}) => {
    const itemToDelete = prevCartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
    return prevCartItems.filter(item => item.id !== itemToDelete.id)
}
 
export const handleReduceCartItem = ({
    prevCartItems,
    cartItemToReduce
}) => {
    const existingCartItem = prevCartItems.find(cartItem => cartItem.id === cartItemToReduce.id);

    if(existingCartItem.quantity === 1){
        return prevCartItems.filter(cartItem => cartItem.id !== existingCartItem.id)
    }
    return prevCartItems.map(cartItem => cartItem.id === existingCartItem.id ? {
        ...cartItem,
        quantity: cartItem.quantity - 1
    } : cartItem)
}