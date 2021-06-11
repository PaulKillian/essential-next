import Head from 'next/head'
import Home from "./home"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Nav from "../components/nav"

export default function Main() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <Nav />
      <Hero />
      <Home />
      <Footer />
    </div>
  )
}
