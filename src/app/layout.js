import { Chakra_Petch, Raleway } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Head from 'next/head'
import { ImageResponse } from 'next/og'

const inter = Chakra_Petch({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
const inter2 = Raleway({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'CodeStorm 1.0',
  description: '🔥 Brace yourselves for the coding show of the year! Kinetic presents " Cuet Inter University Programming Contest CodeStorm 1.0" organized by CUET Computer Club.',
  // image: new ImageResponse('https://cuet-iupc-codestorm.vercel.app/slides/slide1.png')
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="robots" content="follow, index" />
        <meta content='🔥 Brace yourselves for the coding show of the year! Kinetic presents " Cuet Inter University Programming Contest CodeStorm 1.0" organized by CUET Computer Club.' name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cuet CodeStorm 1.0" />
        <meta property="og:title" content="Cuet CodeStorm 1.0" />
        <meta property="og:description" content='🔥 Brace yourselves for the coding show of the year! Kinetic presents " Cuet Inter University Programming Contest CodeStorm 1.0" organized by CUET Computer Club.' />
        <meta property="og:image" content="https://cuet-iupc-codestorm.vercel.app/slides/slide1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cuet CodeStorm 1.0" />
        <meta name="twitter:description" content='🔥 Brace yourselves for the coding show of the year! Kinetic presents " Cuet Inter University Programming Contest CodeStorm 1.0" organized by CUET Computer Club.' />
        <meta name="twitter:image" content="https://cuet-iupc-codestorm.vercel.app/slides/slide1.png" />
        {/* <meta property="og:url" content="https://cuet-iupc-codestorm.vercel.app/" /> */}
      </head>
      <body className={`${inter2.className} ${inter.className}`}>
        <Nav />
        <div className='flex justify-center'>
          <img className='fixed z-[-1] opacity-10 top-0' src='./side.png' alt='side image' />
        </div>
        {/* <img className='fixed opacity-40 top-[-360px] left-[-35%] rotate-[-140deg]' src='./side2.png' alt='side image'/> */}
        <div className='fixed z-[-1] left-[28%] top-0 h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 blur-3xl filter block opacity-20 lg:top-32 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]'></div>
        <div className='fixed z-[-1] left-[10%] top-50% h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l bg-purple-600 to-indigo-600 blur-3xl filter block opacity-20 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]'></div>
        <div className='fixed z-[-1] bottom-44 -left-64 h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-20 blur-3xl filter block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:xl:h-40 xl:w-[400px]'></div>
        {children}
      </body>
    </html>
  )
}
