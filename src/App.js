import React from 'react'
import All from './All/All'
import Background from './Background/Background'
import BigShoe from './BigShoe/Bigshoe'
import Chords from './Chords/Chords'
import Ecom from './Ecom/Ecom'
import Featured from './Featured/Featured'
import Footer from './Footer/Footer'
import Freeship from './FreeShip/Freeshipping'
import Latest from './Latest/Latest'
import Navbar from './NavBar/Navbar'
import Search from './Search/Search'

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Ecom/>
      <Background/>
      <Chords/>
      <All/>
      <BigShoe/>
      <Freeship/>
      <Latest/>
      <Featured/>
      <Search/>
      <Footer/>
    </div>
  )
}

export default App