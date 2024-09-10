import { useDispatch, useSelector } from 'react-redux'

import styles from './Checkout.module.scss'

function Checkout() {
  const cart = useSelector((state) => state.cartItems);
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainLeft}>
        <h2>Cart</h2>
       <p>Items: {cart?.length}</p>  {/*  todo */}
        </div >
        <div className={styles.rightSidebar}>
          <h2>Details</h2>
        </div>
      </div>
    </>
  )
}

export default Checkout
