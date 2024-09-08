import {useRouter} from 'next/router';

export default function Product () {
  const router = useRouter ();
  console.log (router);
  // const { productId } = router.query;
  // const product = products.find(pr => pr._id === productId);

  // if (!productId || !product) return (
  //     <h2>No such a product found</h2>
  // );

  return (<hs>edit</hs>)
  // <div className={styles.product}>
  //     <div className={styles.title}>
  //         {product.title}: {currencyFormat(product.price)}
  //     </div>
  //     <div className={styles.image}>
  //         <Image
  //             src={(`/images/albums/${product.imageName}`)}
  //             alt={product.name}
  //             width={750}
  //             height={750}
  //         />
  //     </div>
  // </div>
}
