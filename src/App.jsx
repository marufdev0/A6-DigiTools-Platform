
import { useState } from 'react'
import './App.css'
import Digitals from './Component/Digitals'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import Ready from './Component/Ready'
import Stats from './Component/Stats'
import Steps from './Component/Steps'
import Cards from './Cards'

const getDigittals = async () =>{
  const res = await fetch('digitals.json')
  return res.json()
}

const getDigitalsPromises = getDigittals();
// console.log(getDigitalsPromises);

function App() {
  const [active, setActive] = useState("digital")

  const [cards, setCards] = useState([])

  return (
    <>
     <nav>
      <Navbar cards={cards} />
     </nav>
     <main>
      <Hero />
      <Stats />


      <div className='text-center mt-5'>
          <h1 className='text-4xl font-bold mb-5'>Premium Digital Tools</h1>
          <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>

      <div className="tabs tabs-box justify-center bg-white">
        <input type="radio"
         name="my_tabs_1"
          className="tab checked:bg-violet-600 checked:text-white" 
          aria-label="Products" defaultChecked
          onClick={()=> setActive("digital")}
          />
        <input type="radio"
         name="my_tabs_1" 
         className="tab checked:bg-violet-600 checked:text-white"
          aria-label={`Card(${cards.length})`}
          onClick={()=> setActive("card")}
          />
      </div>

      { active === "digital" && <Digitals getDigitalsPromises={getDigitalsPromises} cards={cards} setCards={setCards}  />}
      {active === "card" && <Cards cards={cards} />}
      <Steps></Steps>
      <Ready />
      <Footer />
     </main>
    </>
  )
}

export default App
