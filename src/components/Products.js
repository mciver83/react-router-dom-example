import React from 'react'
import products from '../products'
import { Link, Route } from 'react-router-dom'
import StoreMain from './StoreMain'
import Category from './Category'

export default function({ match }) {
  let categories = products.reduce((categories, product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category)
    }
    return categories
  }, [])
  return (
    <div>
      <h1>products</h1>
      {categories.map((category, i) => {
        return (
          <Link style={{marginRight: 20}} key={i} to={`${match.url}/${category}`}>{category}</Link>
        )
      })}

      <div>
        <Route path={match.path} exact component={StoreMain} />
        <Route path={`${match.path}/:category`} component={Category} />
      </div>
    </div>
  )
}