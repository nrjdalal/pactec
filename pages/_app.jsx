import 'styles/globals.css'

// Global imports
import Notice from 'components/Notice'
import Navbar from 'components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Notice />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
