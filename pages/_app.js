// Bootstrap CSS
import '../styles/scss/global.scss' // Customized bootstrap
import '../styles/globals.css'
import Layout from '../common/Layout'
import { Inter } from '@next/font/google'
const inter = Inter({ 
  weight: ['100', '200', '400', '700', '800', '900'],
  subsets: ['latin'] 
})


function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Layout  hideFooter={pageProps.hideFooter}>
          <Component {...pageProps} />
      </Layout>
    </main>
  ) 
}

export default MyApp
