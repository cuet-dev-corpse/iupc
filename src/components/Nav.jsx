import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <header className='flex container2 justify-between items-center py-8'>
        <Link href='/' className="text-4xl font-semibold md:max-w-[160px] max-w-[120px]">
          <img src="./logo.svg" alt="" />
        </Link>
        <nav className='flex items-center gap-4'>
            {/* <Link href='/'>Home</Link>
            <Link href='/about'>About</Link> */}
            <Link className='text-xs md:text-sm font-semibold' href='/contact'>Contact</Link>
            <Link className='glass md:px-8 px-6 text-xs md:text-sm py-2 !rounded-sm uppercase font-medium' href='https://forms.gle/UMBRahLzH8TtdRf38' target='blank'>Register</Link>
        </nav>
    </header>
  )
}
