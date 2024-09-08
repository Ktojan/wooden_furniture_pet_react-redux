import { useState } from 'react'

import Cart from '../../components/cart'
import styles from './Checkout.module.scss'

function Checkout() {
  const [cart, setCart] = useState({ products: [] })
  function removeItemFromCart(product) {
  }
  function changeQuantity(product, delta) {
  }
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainLeft}>
        <h2>Cart</h2>
          <Cart cartItems={cart.products} removeItemFromCart={removeItemFromCart} changeQuantity={changeQuantity} />
        </div >
        <div className={styles.rightSidebar}>
          <h2>Details</h2>
        </div>
      </div>
    </>
  )
}

export default Checkout
