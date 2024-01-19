'use client'

import Link from 'next/link'
import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from 'react-icons/rx';

export default function Nav() {
 
  function CloseMenu() {
    document.documentElement.classList.remove('active')
    document.documentElement.style.overflowY = "auto"
  }
  
  function OpenMenu() {
    document.documentElement.classList.add('active')
    document.documentElement.style.overflowY = "hidden"
  }

  return (
    <header className='flex container2 justify-between items-center py-8'>
      <Link href='/' className="text-4xl font-semibold md:max-w-[160px] max-w-[120px]">
        <img src="./logo.svg" alt="" />
      </Link>
      <CiMenuFries
        className='text-2xl cursor-pointer sm:hidden'
        onClick={OpenMenu}
      />

      <nav className='flex items-center gap-4 sm:flex-row flex-col'>
        <div className='w-full text-right text-2xl cursor-pointer sm:hidden'>
          <RxCross2 onClick={CloseMenu} className='text-' />
        </div>
        <Link onClick={CloseMenu} href='/'>Home</Link>
        <Link onClick={CloseMenu} href='/about'>About</Link>
        <Link onClick={CloseMenu} className='' href='/contact'>Contact</Link>
        <Link onClick={CloseMenu} className='glass md:px-8 px-6 py-2 uppercase font-medium' href='https://forms.gle/Z8Q7tR8cyZ5Xtcw39' target='blank'>Register</Link>
      </nav>
      <div
        className='overlay sm:hidden'
        onClick={CloseMenu}
      />
    </header>
  )
}
