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

    // const handleRemoveCartItem = (itemID) => {
    //     dispatch(
    //         removeCartItem({
    //             itemID
    //     })
    //     )
    // }

    return (
        <table className="cart-item" border="0" cellSpacing="0" cellPadding="10">
            <tbody>
              <tr key={pos}>
                <td class="pb-4 md:table-cell">
                    <img src={images} alt={name}/>
                </td>
                <td className="del-desc hidden lg:table-cell pb-4">
                    {description}
                </td>
                <td className="quantity-group flex flex-col items-center py-0">
                    <div className="lg:flex lg:flex-row items-center justify-center">
                        <span className="btn arrow" onClick={() => handleReduceProduct(item)}> 
                            <FaArrowAltCircleDown />
                        </span>
                        <span className="py-0 px-3">
                            {quantity}
                        </span>
                        <span className="btn arrow" onClick={() => handleAddProduct(item)}> 
                            <FaArrowAltCircleUp />
                        </span>
                    </div>
                    <div className="lg:hidden my-0 mx-0 ">
                        <button className="relative btn delete mt-5" onClick={() => handleReduceProduct(item)}>
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
                <td className="hidden lg:table-cell">
                    <button className="btn delete my-0 mx-0 text-2xl" onClick={() => handleReduceProduct(item) }>
                        <FaTrash />
                    </button>
                </td>
              </tr>
            </tbody>
        </table>
    )
}

export default Item
