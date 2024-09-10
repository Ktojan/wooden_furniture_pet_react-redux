import { useState, useEffect } from 'react'
import Link from 'next/link'

import ProductDetails from '../../components/product-details'
import Cart from '../../components/cart'
import styles from './Catalog.module.scss'
import products from './products.json'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeCartItem, changeItemQuantity } from '../../redux/cartSlice'
import { changeDiscount } from '../../redux/checkoutSlice'

function Catalog() {
  // --------------------- STATES ---------------------//
  // const fromStateProducts =  useSelector((state) => state.cartItems);
  // const [cart, setCart] = useState({ products: [...fromStateProducts] });

  const cart = useSelector((state) => state.cartItems);
  const discount = useSelector((state) => state.checkout.discount);
  const dispatch = useDispatch();
  const totalItemsNum = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  // const products = [ ...productsJSON ];
  // useEffect(() => fetchProducts(), []);

  // --------------------- ROUTING ---------------------//
  const router = useRouter();
  const { homeDiscount } = router.query;
  if (homeDiscount) dispatch(changeDiscount(Number(homeDiscount)));

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

  function addToCart(product) {
    const addedProduct = cart.find(pr => pr._id === product._id);
    if (addedProduct) {      
      changeQuantity(product, 1);
    } else {
      // product.quantity = 1;
      // newCart = [...cart, { ...product }]
      // setCart(newCart);
      dispatch(addItemToCart({ ...product, quantity: 1 }));
    }
  }

  function removeItemFromCart(product) {
    // const newCart = cart.filter(item => item !== product)
    // setCart(newCart)
    if (product) dispatch(removeCartItem(product._id)) //todo implement twice, second - undefined
  }

  function changeQuantity(gotProduct, delta) {
    const productFromStore = cart.find(pr => pr._id === gotProduct._id);
    const product = Object.assign({}, productFromStore);
    product.quantity = product.quantity ?  product.quantity + delta : 1;
    if (product.quantity === 0) removeItemFromCart(product);
    else  {
      dispatch(changeItemQuantity(product));
      // const newCart = { products: [...cart] };
      // newCart.find(pr => pr._id === product._id).quantity = product.quantity;
      // setCart(newCart); 
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
          <Cart cartItems={cart}
           homeDiscount={discount}
          //  homeDiscount={homeDiscount}
           removeItemFromCart={removeItemFromCart} changeQuantity={changeQuantity} />
        </div>
      </div>
    </>
  )
}

export default Catalog
