import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem } from '../../../redux/Cart/cartActions'

import { FaTrash } from 'react-icons/fa'

import './../styles.css'

const Item = ({item, pos}) => {
    const dispatch = useDispatch();

    const {
        name,
        images,
        id,
        description,
        quantity,
        price,
    } = item;


    const handleRemoveCartItem = (itemID) => {
        dispatch(
            removeCartItem({
                itemID
        })
        )
    }


    return (
        <table className="cart-item" border="0" cellSpacing="0" cellPadding="10">
            <tbody>
              <tr key={pos}>
                <td>
                    <img src={images} alt={name}/>
                </td>
                <td>
                    {description}
                </td>
                <td>
                    {quantity}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => handleRemoveCartItem(id) }>
                        <FaTrash />
                    </button>
                </td>
              </tr>
            </tbody>
        </table>
    )
}

export default Item
