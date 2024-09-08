import Image from 'next/image'

import styles from './CartItem.module.scss';
import { currencyFormat } from '../../../utils/numericFormatters'

const CartItem = ({ product, removeItemFromCart, changeQuantity }) => {

  return (
    <div className={styles.product}>
      <div className={styles.productDetails}>
        <Image
          src={(`/images/pieces/${product.imageName}`)}
          width={125}
          height={125}
          alt={product.name}
        />
      </div>
      <div className={styles.price}>
        <div><b>{currencyFormat(product.price)}</b></div>
        <span>items: {product.quantity}</span> 
        <button onClick={() => removeItemFromCart(product)}>Remove</button >
      </div>
      <div className={styles.changeQuantity}>
        <button onClick={() => changeQuantity(product, 1)}>+</button >
        <button onClick={() => changeQuantity(product, -1)}>-</button >
      </div>
    </div >
  );
};

export default CartItem;
