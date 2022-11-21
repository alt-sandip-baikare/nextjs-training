import '../styles/globals.css'
import Layout from '../common/Layout'

function MyApp({ Component, pageProps }) {
  // console.log(pageProps);
  return (
    <Layout hideFooter={pageProps.hideFooter}>
        <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
