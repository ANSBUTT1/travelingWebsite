import React from 'react'
import DesinationCard from '../layouts/DesinationCard'
import img1 from "../assets/images/dest1.jpg"
import img2 from "../assets/images/dest2.jpg"
import img3 from "../assets/images/dest3.jpg"



const Destination = () => {
  return (
      <div className='min-h-screen flex flex-col justify-center md:mx-32 mx-5'>
        <h1 className='font-medium text-center text-4xl lg:mt-0 mt-16'>
          Most Popular Desinations
        </h1>
        <div className='flex flex-col lg:flex-row gap-5 mt-14'> 
          <DesinationCard img={img1} title="Paris France" para="Paris offers iconics landmarks 
          like the Eiffel Tower and world-class art at the Louvre Museum."/>
          <DesinationCard img={img2} title="Dubai, UAE" para="A city of superlative, Dubai boasts towering
          skyscrapers, luxury shopping, and desert adventures."/>
          <DesinationCard img={img3} title="Venice, Italy" para="Explore the romantic canals and historic 
          architecture of Venice, a city built on water."/>
        </div>
      </div>
  )
}

export default Destination