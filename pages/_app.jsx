import 'styles/globals.css'

// Global imports
import Notice from 'components/Notice'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Notice />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
