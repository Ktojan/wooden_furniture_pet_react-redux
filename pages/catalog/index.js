import { useState, useEffect } from 'react'
import Link from 'next/link'

import ProductDetails from '../../components/product-details'
import Cart from '../../components/cart'
import styles from './Catalog.module.scss'
import products from './products.json'
import { useRouter } from 'next/router'

function Catalog() {
  const [cart, setCart] = useState({ products: [] });
  // const [products, setProducts] = useState([]);

  // useEffect(() => fetchProducts(), []);

  const router = useRouter();
  const { homeDiscount } = router.query;

  // async function fetchProducts() {
  //   const getProducts = async () => {
  //   try {
  //     const res = await fetch('/api/products');
  //     const products = await res.json();
  //     // console.log(products);
  //     setProducts(products)
  //   } catch (er) {
  //     console.error(er)
  //   }
  //   }
  //   getProducts();
  // }
  function fetchProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(prds => setProducts(prds))
      // .catch(er => console.error(er))
  }

  function addToCart(product) {
    const newCart = { _id: cart._id };
    const addedProduct = cart.products.find(pr => pr._id === product._id);
    if (addedProduct) {      
      changeQuantity(product, 1);
    } else {
      product.quantity = 1;
      newCart.products = [...cart.products, { ...product }]
      setCart(newCart);
    }
  }

  function removeItemFromCart(product) {
    const newCart = { _id: cart._id }
    newCart.products = cart.products.filter(item => item !== product)
    setCart(newCart)
  }

  function changeQuantity(product, delta) {
    console.log(product, delta);
    product.quantity += delta;
    if (product.quantity === 0) removeItemFromCart(product);
    else  {
      const newCart = { products: [...cart.products] };
      newCart.products.find(pr => pr._id === product._id).quantity = product.quantity;
      setCart(newCart); 
    } 
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainLeft}>
          <h1 className={styles.header}>Catalog</h1>
          <ul className={styles.products}>
            {products.map((product, index) => (
              <li key={index}>
                <ProductDetails product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
        </div >
        <div className={styles.rightSidebar}>
          <h2>Cart</h2>
          <Cart cartItems={cart.products} homeDiscount={homeDiscount}
           removeItemFromCart={removeItemFromCart} changeQuantity={changeQuantity} />
        </div>
      </div>
    </>
  )
}

export default Catalog
