import React from 'react'
import { useSelector } from 'react-redux'
import { BasketState } from '../Redux/ReduxComponent'


function CheckoutCart() {
    const basket1 = useSelector<BasketState, BasketState["basket"]>((state) => state.basket)
    console.log(basket1)
    return (
        <div>
            Am CheckoutCart
        </div>
    )
}

export default CheckoutCart