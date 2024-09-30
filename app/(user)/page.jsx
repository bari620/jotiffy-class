import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const page = () => {
  return (
    <div className='one h-dvh w-full bg-cover bg-center bg-no-repeat'>
      <div className='bg-black/70 w-full h-dvh flex flex-col justify-around items-center'>
        <p className='text-white text-3xl text-center w-2/4 font-bold text-gray-500'>
      Jottify: Your Ultimate Note-Taking Companion
        </p>
        <div className='flex items-center justify-evenly'>
          <button className='p-3 w-fit h-fit text-xl border-2 border-solid text-white border-white hover:bg-white hover:text-black rounded-md m-16'>Learn More</button>
          <button className='p-3 w-fit h-fit text-xl border-2 border-solid text-white border-white hover:bg-white hover:text-black rounded-md m-16'>Get Started</button>
        </div>
      </div>
      
    </div>
  )
}

export default page 
