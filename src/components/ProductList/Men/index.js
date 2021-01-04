import React from 'react';
import axios from 'axios';

import { CardGroup } from '../../../globalStyles'

import ItemCards from './../../ItemCards/ItemCards';

import img from '../../../Assets/images/profile.jpg'

const initialValue = {
    name: 'Iphone',
    img: img,
    desc: 'This is an iphone',
    rating: '5',
    price: '$1000',
}

const Men = () => {
    const numbers = [1,2,3,4,5];

    return (
        <CardGroup >
            {numbers.map(number => <ItemCards number {...initialValue} />)}
        </CardGroup>
    )
}

export default Men;
