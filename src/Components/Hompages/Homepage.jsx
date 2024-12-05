import React from 'react'

import Hero from '../Sections/Hero/Hero'
import Shop from '../Sections/Shop/Shop'
import Offer from '../Sections/Offer/Offer'
import Blog from '../Sections/Blog/Blog'
import Collection from '../Sections/Collection/Collection'
import Scrollbar from './Scrollbar'

function Homepage() {
  return (
    <>
    <Hero />
    <Collection />
    <Shop />
    <Offer />
    <Blog />
    <Scrollbar />
    </>
  )
}

export default Homepage
