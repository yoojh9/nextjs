import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
      <Layout> 
         {/* Layout의 children prop로 들어감 */}
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
