import Home from "./home"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Nav from "../components/nav"
import 'bootstrap/dist/css/bootstrap.css'

export default function Main() {
  return (
    <div>
      <Nav />
      <Hero />
      <Home />
      <Footer />
    </div>
  )
}
