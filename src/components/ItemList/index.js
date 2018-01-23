import Item from '../Item'
import React from 'react'
import './ItemList.css'

const ItemList = (props) => {

  const items = props.items.map((item) => {
    return (
      <Item 
        onAddToCart={props.addToCart}
        key={item.id}
        item={item} 
      />
    )
  })

  return (
    <div className="item-list">
      {items}
    </div>
  )
}

export default ItemList