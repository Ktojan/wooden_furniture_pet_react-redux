import Image from 'next/image'

import styles from './SiteHeader.module.scss'
import logo from './logo.png'
import { useRouter } from 'next/router'

export default function SiteHeader() {
  const router = useRouter();
  const activePath = router.asPath;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}><Image src={logo} alt="Wooden Age store logo" /></div>
          <a href='/' className={(activePath === '/') ? styles.activeRoute : null} >Home</a>
          <a href={`/catalog`} 
          className={ activePath.includes('catalog') ? styles.activeRoute : null}
           >Catalog</a>
          {/* <Link href={{ pathname: '/catalog', query: { foo: discount } }}>Catalog</Link> */}
        </div>
        { router.pathname === "/product/[productId]" ?
          <div><h2 style={{color: '#f590c4'}}>---- Product Details ----</h2></div> : null }
        <div className={styles.right}>
        <a href='/checkout' className={ activePath.includes('checkout') ? styles.activeRoute : null}
        >Checkout</a>
          {<a href="" className="cta">Sign In</a>}
          </div>
      </div>
    </>
  )
}
