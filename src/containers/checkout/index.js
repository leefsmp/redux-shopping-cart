import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import React from 'react'
import './Checkout.css'

const columns = [
  {
    Header: 'Product',
    accessor: 'name' 
  }, 
  {
    Header: 'Quantity',
    accessor: 'quantity' 
  },
  {
    Header: 'Unit Price',
    accessor: 'unitPrice' 
  },
  {
    Header: 'Price',
    accessor: 'price' 
  },
]

const Checkout = (props) => {

  const data = Object.values(props.cart.itemsMap)

  return (
    <div className="checkout">
      <div className="title">
        Review your Order
      </div>
      <div className="table-container">
        <ReactTable
          defaultPageSize={data.length}
          showPaginationBottom={false}
          showPageSizeOptions={false}
          columns={columns}
          data={data}
        />
      </div>
      <div className=""> 
        <div className="">
          <b>Total Cost: </b>
          {props.cart.totalCost}
        </div>
        <button onClick={props.shop}>
          Keep shopping
        </button>
        <button>
          Proceed to Payment ...
        </button>  
      </div> 
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => bindActionCreators({
  shop: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)