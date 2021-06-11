import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
      <script src="anime.min.js"></script>
    </Head>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
