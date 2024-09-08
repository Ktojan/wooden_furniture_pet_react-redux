import SiteHeader from '../components/header'
import './globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SiteHeader/>
    <Component {...pageProps} />
    </>)
}

export default MyApp
