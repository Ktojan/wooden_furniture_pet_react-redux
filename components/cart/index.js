import CartItem from './cart-item'
import { currencyFormat } from '../../utils/numericFormatters'
import styles from './Cart.module.scss'

export default function Cart({ cartItems, removeItemFromCart, changeQuantity, homeDiscount }) {
  function getCartTotal(discount) {
    console.log(discount);
    const totalCost = cartItems.reduce((prev, curr) => {
      const itemPrice = (discount && discount > 0)
       ? curr.price * curr.quantity *(100 - discount)/100
       : curr.price * curr.quantity;
      return prev + itemPrice
    }, 0)

    return currencyFormat(totalCost);
  }

  function renderEmptyCart() {
    return (
      <div className={styles.emptyCart}>You have no items in your cart</div>
    )
  }

  function renderCart() {
    return (
      <>
      <ul className={styles.cart}>
      { (homeDiscount && homeDiscount > 0) ? <p>Your discount is {homeDiscount}%</p> : null }
        {cartItems.map((product, i) => (
          <li className={styles.cartItem} key={i}>
            <CartItem product={product} removeItemFromCart={removeItemFromCart} changeQuantity={changeQuantity}/>
          </li >
        ))}
      </ul >
      </>
    )
  }

  return (
    <div className={styles.totalContainer}>
      {cartItems.length > 0 ? renderCart() : renderEmptyCart()}
      {cartItems.length > 0 ?
        (<div className={styles.total}><div>Total:</div><div>{getCartTotal()}</div></div>) : null}
      {(cartItems.length > 0 && homeDiscount > 0) ? 
        (<div className={styles.total}><div>With Discount:</div><div> {getCartTotal(+homeDiscount)}</div></div>) : null}
    </div >
  )
}
