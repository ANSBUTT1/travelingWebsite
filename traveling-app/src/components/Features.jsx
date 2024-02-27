import React from 'react'
import img from "../assets/images/feature.jpg"
import pic1 from "../assets/images/service.png"
import pic2 from "../assets/images/user.png"
import pic3 from "../assets/images/wallet.png"
const Features = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14'>
      <div className='w-full lg:w-2/4'>
        <div className='space-y-4'>
          <h1 className='text-4xl font-medium text-center md:text-start leading-tight '>
            Get ready to Explore, Get Ready to Experience!
          </h1>

          <p>
            Discover the Best Holidays Experiences with Adventures!
            We're dedicated to curating teh latest and greatest desinations
            from around the world, ensuring you always get the ultiate travel experience.
          </p>
        </div>
        <div className='w-full lg:w-3/5 mt-10 lg:mt-14'>
          <img src={img} alt='img' className='rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' />
        </div>
      </div>
      <div className='w-full lg:w-2/4 space-y-10'>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row items-center w-24'>
            <img src={pic1} alt="img" />
          </div>
          <div className='space-y-3'>
            <h1 className='font-semibold text-xl'>Friendly Service</h1>
            <p className='text-[#898888]'>
              We will provide excellent and friendly service for the sake of our customers.
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row items-center w-24'>
            <img src={pic2} alt="img" />
          </div>
          <div className='space-y-3'>
            <h1 className='font-semibold text-xl'>Friendly Service</h1>
            <p className='text-[#898888]'>
              We will provide excellent and friendly service for the sake of our customers.
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row items-center w-24'>
            <img src={pic3} alt="img" />
          </div>
          <div className='space-y-3'>
            <h1 className='font-semibold text-xl'>Friendly Service</h1>
            <p className='text-[#898888]'>
              We will provide excellent and friendly service for the sake of our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features