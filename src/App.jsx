
import './App.css'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import Stats from './Component/Stats'

function App() {

  return (
    <>
     <nav>
      <Navbar />
     </nav>
     <main>
      <Hero />
      <Stats />
     </main>
    </>
  )
}

export default App
