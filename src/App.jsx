import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar'

import Homepage from './Components/Hompages/Homepage';
import Collection from './Components/Sections/Collection/Collection';
import Shop from './Components/Sections/Shop/Shop';
import Offer from './Components/Sections/Offer/Offer';
import Blog from './Components/Sections/Blog/Blog';
import Footer from '../src/Components/Footer/Footer'


function App() {
  return (
    <>
            <BrowserRouter>
                <Navbar />
                
                <Routes>
                  <Route path='/Homepage' element={<Homepage/>}/>
                  <Route path='/collection' element={<Collection/>}/>
                  <Route path='/shop' element={<Shop/>}/>
                  <Route path='/offer' element={<Offer/>}/>
                  <Route path='/blog' element={<Blog/>}/>
                </Routes>

                
                <Footer />
            </BrowserRouter>
        </>
  )
}

export default App
