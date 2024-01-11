'use client'

import React from 'react'
import Countdown from 'react-countdown';

export default function CountDown() {
    return (
        <div className='flex justify-center items-center xl:mt-[-30px] sm:mt-4 mt-[-35px]'>
            <Countdown
                date={new Date('2024-01-26 01:02:03 GMT+0600')}
                renderer={renderer}
            />
        </div>
    )
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (
            <div className='flex items-center justify-center md:gap-4 glass shadow-lg max-w-[900px] mx-auto w-full py-2 sm:py-4 rounded-md text-white'>
                {
                    [[days, 'Days'], [hours, 'Hours'], [minutes, 'Minutes'], [seconds, 'seconds']].map((time, i)=>(
                        <div key={i} className='flex gap-4'>
                            <div className='flex flex-col items-center'>
                                <span className='lg:text-5xl sm:text-4xl text-2xl font-semibold'>{time[0]}</span>
                                <span className='sm:text-sm text-xs'>{time[1]}</span>
                            </div>
                            {i<3?<span className='lg:text-4xl sm:text-3xl text-2xl'>:</span>:<></>}
                        </div>
                    ))
                }
            </div>
        )
};