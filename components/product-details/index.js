import Image from 'next/image'
import Link from 'next/link'

import styles from './ProductDetails.module.scss';
import { currencyFormat } from '../../utils/numericFormatters'

const ProductDetails = ({ product, addToCart }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <button className={`button ${styles.addToCart}`} onClick={() => addToCart(product)}>Add to Cart</button>
        <Image
          src={(`/images/pieces/${product.imageName}`)}
          width={340}
          height={340}
          alt={product.name}
        />
      </div>
      <div className={styles.title}><Link href={`/product/${product._id}`}>{product.title}</Link></div>
      <div className={styles.price}>{currencyFormat(product.price)}</div>
    </div>
  );
};

export default ProductDetails;
