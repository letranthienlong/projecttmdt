import React, { useContext } from 'react'
import { dataProduct } from 'api/datadraw'
import CartItem from './CartItem'
import AllProducts from 'components/AllProducts'

const PageCart = () => {
  const {createProducts} = useContext(AllProducts)
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {dataProduct.products.map((product) => (
          <CartItem data ={product}/>
        ))}
      </div>
    </div>
  )
}

export default PageCart