import React from 'react'
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { RiTwitterXFill } from "react-icons/ri"

const Footer = () => {
  return (
    <div className='bg-darkBackground text-white '>
      <div className='flex flex-col md:flex-row justify-between p-8 md:mx-32 mx-5'>
        <div className='w-full md:w-1/4'>
          <h1 className='font-semibold text-xl pb-4'>Adventures</h1>
          <p className='text-sm'>
            With Adventures you can experience
            new travel and the best tourist desinations that we have to offers.
          </p>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>
            Destinations
          </h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Paris, France</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Dubai, UAE</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Venice, Italy</a>
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>
            About
          </h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-brightColor  transition-all cursor-pointer' href="/">Contact Us </a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Testimonial</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Rating</a>
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Follow us</h1>
          <nav className='flex flex-col md:items-center gap-2'>
            <BsFacebook size={25} className='hover:text-blue-500 transition-all cursor-pointer' />
            <RiTwitterXFill size={25} className='hover:text-gray-800 transition-all cursor-pointer' />
            <BsInstagram size={25} className='hover:text-rose-300 transition-all cursor-pointer' />
          </nav>
        </div>
      </div>
      <div>
        <p className='text-center py-4'>
          @copyright developed by
          <span className='text-brightColor'>Butt G</span> All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer