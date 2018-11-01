import React from 'react'
import products from '../products'

export default function({ match }) {
  let items = products.filter(product => product.category === match.params.category)

  return (
    <div>
      <h1>{match.params.category}</h1>
      {items.map(item => {
        return (
          <div key={item.id} style={{border: '1px solid black', margin: '10px'}}>
            <p>name: {item.name}</p>
            <p>price: {item.price}</p>
            <img src={item.imageUrl} alt="" height={200}/>
          </div>
        )
      })}
    </div>
  )
}