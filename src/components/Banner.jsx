import React from 'react'
import CountDown from './CountDown'

export default function Banner() {
    return (
        <section id="banner" className='container2 mt-4 md:mb-4 mb-0'>
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex flex-col flex-[2.2] md:order-1 ordesr-2">
                    <div className='uppercase md:text-sm text-xs md:tracking-[7px] tracking-[5px] mb-4 flex flex-col gap-4'>
                        <img className='md:max-w-[240px] max-w-[120px] w-full -mb-2' src="./kinetic.svg" alt="Kinetic" />
                        <span className='line'>presents</span>
                    </div>
                    <div style={{ fontFamily: 'Chakra Petch' }} className="lg:text-5xl md:text-4xl sm:text-3xl text-[28px] font-bold uppercase flex items-start flex-col gap-0 sm:gap-4 text-[#e5edff]">
                        <span>CUET Inter University Programming Contest</span>
                        <span className="bg-[##e5edff] text-indigo-900 font-bold">CodeStorm 1.0</span>
                    </div>
                    <p class="mt-4 max-w-lg sm:text-md/relaxed text-white">
                        🔥 Brace yourselves for the National Level coding show of the year!
                    </p>
                </div>
                <div className='flex-[2] md:order-2 order-1s'>
                    <img className='banner_image' src="./banner.png" alt="" />
                </div>
            </div>
            <CountDown />
        </section>
    )
}