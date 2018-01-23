import React from 'react'
import './Item.css'

const Item = (props) => (
  <div className="item">
    <img  
      src={props.item.thumbnail} 
      alt={props.item.name}
      className="thumbnail"
    />
    <div className="item-properties">
      <div className="name">
        {props.item.name}
      </div>
      <div className="price">
        {`Unit Price: ${props.item.unitPrice * 100} ct`}
      </div>
    </div>
    <button className="btn-add"
      onClick={() => props.onAddToCart(props.item)}>
      Add to Cart
    </button>
    
  </div>
)

export default Item