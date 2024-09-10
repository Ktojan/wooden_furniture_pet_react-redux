import store from '../redux/store'
import SiteHeader from '../components/header'
import './globals.scss'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <SiteHeader/>
      <Component {...pageProps} />
    </Provider>
    </>)
}

export default MyApp
//export default wrapper.withRedux(MyApp);
