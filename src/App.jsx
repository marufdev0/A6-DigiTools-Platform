
import './App.css'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import Ready from './Component/Ready'
import Stats from './Component/Stats'
import Steps from './Component/Steps'

function App() {

  return (
    <>
     <nav>
      <Navbar />
     </nav>
     <main>
      <Hero />
      <Stats />
      <Steps></Steps>
      <Ready />
      <Footer />
     </main>
    </>
  )
}

export default App
