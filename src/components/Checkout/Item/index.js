import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem, addProduct, reduceCartItem } from '../../../redux/Cart/cartActions'

import { FaTrash, FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'

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

    const handleAddProduct = (product) => {
        dispatch(
            addProduct(product)
        )
    }

    const handleReduceProduct = (product) => {
        dispatch(
            reduceCartItem(product)
        )
    }


    return (
        <table className="cart-item" border="0" cellSpacing="0" cellPadding="10">
            <tbody>
              <tr key={pos}>
                <td class="pb-4 md:table-cell">
                    <img src={images} alt={name}/>
                </td>
                <td>

                </td>
                <td className="del-desc hidden pb-4">
                    {description}
                </td>
                <td className="quantity-group flex flex-col items-center">
                    <div>
                    <span className="btn arrow" onClick={() => handleReduceProduct(item)}> 
                        <FaArrowAltCircleDown />
                    </span>
                    <span>{quantity}</span>
                    <span className="btn arrow" onClick={() => handleAddProduct(item)}> 
                        <FaArrowAltCircleUp />
                    </span>
                    </div>
                    <div>
                        <button className="relative btn delete " onClick={() => handleRemoveCartItem(id) }>
                            <FaTrash />
                        </button>
                    </div>
                </td>
                <td>
                    {price}
                </td>
                <td>
                    {quantity * price}
                </td>
                {/* <td>
                    <button className="relative btn delete " onClick={() => handleRemoveCartItem(id) }>
                        <FaTrash />
                    </button>
                </td> */}
              </tr>
            </tbody>
        </table>
    )
}

export default Item
