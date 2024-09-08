import Image from 'next/image'

import styles from './HomePage.module.scss'
import Link from 'next/link'

function HomePage() {
  // const heroImage = { height: '210px', margin: '0 -8px',
  //   position: 'relative', borderRadius: '10px'};
  return (
    <>
      {/* <div style={heroImage}> */}
      {/* <div className={styles.heroImage}>
        <Image src={heroBanner} layout="fill" objectFit="cover" />
      </div> */}
      <div className={styles.cta}>
        {/* <span className={styles.image}>
          <Image layout="fixed" height="200" width="200"  src={divinity} />
        </span>
        <span className={styles.image}>
          <Image layout="fixed" height="200" width="200" src={synchronicity} alt='' />
        </span> */}
        <div className={styles.ctaText}>
          <div className={`${styles.ctaSubText}`}>
            <div>Take <em>Your Discount</em> for perfect wooden furniture</div>
          </div>
        <button className="button cta">
          <Link href="/catalog?homeDiscount=12">Shop Now (-12%)</Link>
        </button>
        </div>
        {/* <span className={styles.image}>
          <Image layout="fixed" height="200" width="200" src={theUndertaking} alt='' />
        </span>
        <span className={styles.image}>
          <Image layout="fixed" height="200" width="200" src={asTheSunSpeaks} alt='' />
        </span> */}
      </div>
      {/* <div className={styles.soundwavesImage}>
        <Image src={soundwavesSmall} layout="responsive" />
      </div> */}
    </>
  )
}

export default HomePage
