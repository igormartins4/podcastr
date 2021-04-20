import { Header } from '../components/Header'

import '../styles/global.scss'

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
