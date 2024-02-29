import React from 'react'
import { Link } from 'react-scroll'
import Button from "../layouts/Button"
import img from "../assets/images/about.jpg"
const About = () => {

const backgroundColor = `bg-white`;
  
  return (
    <div className='min-h-screen flex flex-col gap-5 lg:flex-row justify-center items-center md:px-32 px-5 bg-darkBackground'>
      <div className='w-full lg:w-2/4 space-y-5 '>
        <h1 className='font-semibold text-4xl text-white leading-tight'>
          At Adventures we are ready to provide you with the best trip of
          your Life!
        </h1>
        <p className='text-[#bdbdbd] pb-5'>
          Your dream vacation awaits, and we're here to make it a reality.
        </p>
        <Link to='contact' spy={true} smooth={true} duration={500}>
        <Button title="Contact Now"  backgroundColor={backgroundColor}/>
        </Link>
      </div>
      <div className='w-full lg:w-2/4'>
        <img className='rounded-3xl shadow-lg shadow-blue-200' src={img} alt='img'/>
      </div>
    </div>
  )
}

export default About