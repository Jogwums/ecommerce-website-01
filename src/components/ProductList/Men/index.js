import React from 'react';
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/Cart/cartActions'

import { CardGroup } from '../../../globalStyles'

import ItemCards from './../../ItemCards/ItemCards';

import img from '../../../Assets/images/siteBg3.jpg'

const initialValue = {
   item1: {
    name: 'Iphone',
    img: img,
    desc: 'This is an iphone',
    rating: '5',
    price: '$1000',
   },
   item2: {
    name: 'Bag',
    img: img,
    desc: 'This is an iphone',
    rating: '4.5',
    price: '$1200',
   },

}

const Men = (props) => {

    const dispatch = useDispatch();

    const handleAddToCart = async (product) => {

        console.log('adding to mens\'s cart');
        if(!product){
            console.log('waiting for productData');
        }
        
        await dispatch(
            addProduct(product)
        )
        console.log('added to men\'s cart');
        
        
    } 
    const numbers = [1,2,3,4,5];

    return (
        <CardGroup >
            {numbers.map(number => <ItemCards number {...initialValue.item1} handleAddToCart={handleAddToCart} />)}
        </CardGroup>
    )
}

export default Men;
