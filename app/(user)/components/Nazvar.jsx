"use client"
import Images from 'next/images'
import Link from 'next/link'
import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Nazvar = () => {
    const navLinks = [
        {
            label: "Home",
            href:'/',
            id:1
        },
         {
            label: "Locations",
            href:'#',
            id:2
        },
         {
            label: "About",
            href:'#',
            id:3
        },
         {
            label: "Signin",
            href:'#',
            id:4
        },

    ]
    
    const [navOpen, setNavOpen]= useState(False)

  return ( 
    <nav className='p-2 flex justify-between items-center'>
        <div className='z-50'>
            <Link href={'#'}>  
            <Images
                width={900}
                height={900}
                src={'/logo-white.png'}
                alt='logo'
                className='w-16 h-16 rounded-full'
            />
            </Link>
        </div>
        <ul className= {`flex gap-10 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:h-dvh
        max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:w-full transition-all max-lg:bg-slate-200/90
        ${!navOpen ? 'max-lg:translate-x-full' :''}`}>
            {
                navLinks.map((link)=>(
                    <li key={link.id} >
                        <Link href={ link.href} className='uppercase font-bold text-md
                         hover:bg-gray-200 p-2 rounded-md'>{link.label}</Link>
                    </li>
                ))
            }
        </ul>
        <button>
        onClick={()=>{return setNavOpen(!navOpen),console.log(navOpen);
        }}
        
            className='lg:hidden z-50'
        
            {
                navOpen ? <IoClose className='text-2xl'/> : <CiMenuFries className='text-2xl'/>
            }
        </button>
        

        
    </nav>
  )
}

export default Nazvar