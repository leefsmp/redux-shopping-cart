
import OrderSummary from '../../components/OrderSummary'
import ItemList from '../../components/ItemList'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import React from 'react'
import './Home.css'
import {
  removeFromCart,
  addToCart,
} from '../../reducers/cart'

const Home = (props) => (
  <div className="home">
    <div className="title">
      Our Products
    </div>
    <ItemList 
      addToCart={props.addToCart}
      items={props.items} 
    />
    <OrderSummary 
      onRemoveFromCart={props.removeFromCart}
      onCheckout={props.checkout}
      items={props.items}
      cart={props.cart}
    />
  </div>
)

const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart
})

const mapDispatchToProps = dispatch => bindActionCreators({
  checkout: () => push('/checkout'),
  removeFromCart,
  addToCart,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)