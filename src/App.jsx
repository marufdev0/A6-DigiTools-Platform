
import './App.css'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
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
     </main>
    </>
  )
}

export default App
