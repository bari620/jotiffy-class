'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import Image from 'next/image'
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useSession, signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
  
    const navLinks =[
        {
            label: "home",
            href: "/",
            id: 1
        },
        {
            label: "locations",
            href: "#",
            id: 2
        },
        {
            label: "about",
            href: "#",
            id: 3
        },
        {
            label: "add note",
            href: "/add-note",
            id: 4
        },

    ]
    
    const [navOpen, setNavOpen] = useState(false)

    const {data:session, status} = useSession()
    console.log(session?.user?.name, status);

    return (
    <div>
        <nav className='flex justify-between items-center p-4 shadow-md bg-gray-900'>
            <div className='z-50'>
               <Link href = {'#'}>
                <Image
                    width={900}
                    height={900}
                    src={'/logo-white.png'}
                    alt = 'logo'
                    className='w-14 h-14 rounded-full'
                />
               </Link>
            </div>
            <ul 

                className={`text-white flex gap-10 ml-auto max-lg:flex-col max-lg:w-full max-lg:h-dvh max-lg:justify-center max-lg:items-center
                 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:bg-gray-700/90 transition-all duration-700 ${!navOpen ? 'max-lg:translate-x-full' : ''}`}>
                {
                    navLinks.map((link)=>(
                        <li key={link.id}>
                            <Link href= {link.href} className ="uppercase font-semibold text-md
                            hover:bg-gray-100 p-3 rounded-md">{link.label}</Link>
                        </li>
                    ))
                }
            </ul>
            {
            status ==='loading'? ('...') : 
            status === 'unauthenticated' ? (<button  className ="uppercase font-semibold text-mdhover:bg-gray-100 p-3 rounded-md" onClick={()=> signOut({ callbackUrl: '/'})}>Signout</button>) : (<Avatar>
                <AvatarImage src = {session?.user?.image}/>
                <AvatarFallback>{session?.user?.name.slice(0,2).toUppercase}</AvatarFallback>
              </Avatar>
              )
            }   


            
            <button className='lg:hidden z-50' onClick={()=>{setNavOpen(!navOpen)}}>
                {
                    navOpen ? <IoClose className='text-3xl'/> : <CiMenuBurger className='text-3xl'/>
                }
            </button>
        </nav>
    </div>
  )
}

export default Navbar
