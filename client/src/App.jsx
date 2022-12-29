import { Loader } from "./components"
import { Transactions } from "./components"
import { Footer } from "./components"
import { Services } from "./components"
import { Welcome } from "./components"
import { Navbar } from "./components"
export default function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
     <Services/>
     <Transactions/>
     <Footer/>
    </div>
  )
}