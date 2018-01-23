import './OrderSummary.css'
import React from 'react'

const OrderSummary = (props) => {

  const { cart, onRemoveFromCart } = props

  const cartItems = Object.values(cart.itemsMap).map((cartItem) => {
      
      return (
        <div key={cartItem.id} className="cart-item">
          <div className="properties">
            <div className="name">
              {cartItem.name}
            </div>
            <div className="quantity">
              {`Quantity: ${cartItem.quantity}`}
            </div>
          </div>
          <button onClick={() => onRemoveFromCart(cartItem.id)}
            className="btn-remove">
           x
          </button>
        </div>  
      )
    })

  return (
    <div className="order-summary">
      <div className="title">
        Your Cart
      </div>
      <div className="cart-items">
        { cartItems }
      </div>
      <div className="cost">
        <b>Total Cost: </b> {props.cart.totalCost}
      </div>
      <button onClick={props.onCheckout}
        disabled={(props.cart.totalCost === 0)}
        className="btn-checkout">
        Check Out
      </button> 
    </div>
  )
}

export default OrderSummary