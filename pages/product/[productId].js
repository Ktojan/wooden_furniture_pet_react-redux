import Image from "next/image";
import { currencyFormat } from "../../utils/numericFormatters";
import products from '../catalog/products.json'
import styles from './Product.module.scss'
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Product() {
    const router = useRouter();
    const { productId } = router.query;
    const product = products.find(pr => pr._id === productId);

    if (!productId || !product) return (
        <h2>No such a product found</h2>
    ); 

    return (
        <div className={styles.product}>
            <div className={styles.title}>
                {product.title}: {currencyFormat(product.price)}
                <button>
                    <Link href={`/product/edit/${product._id}`}>Edit album</Link>
                </button>
            </div>
            <div className={styles.image}>
                <Image 
                    src={(`/images/pieces/${product.imageName}`)}
                    alt={product.name}
                    width={750}
                    height={750}
                />
            </div>
        </div>
    )
}
