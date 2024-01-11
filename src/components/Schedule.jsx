'use client'

import React, { useState } from 'react'

export default function Schedule() {
    const [items, setItems] = useState(items1);
    return (
        <section className='container2 mt-[100px]'>
            <div className='title'>Schedule Plan</div>

            <div className="grid lg:grid-cols-5 gap-4 md:grid-cols-3 grid-cols-2 mt-12">
                {
                    times.map((time, i) => (
                        <div key={i} className='relative'>
                            <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[30%] w-[50%] ${time.bg} filter blur-2xl`} />
                            <div className='glass h-full sm:py-6 py-3 flex justify-center items-center flex-col'>
                                <span className='sm:text-2xl text-xl font-bold'>{time.date}</span>
                                <span className='sm:text-sm text-xs font-light'>{time?.time}</span>
                                <span className='sm:text-sm text-xs'>{time.name}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="py-6 flex flex-col justify-center sm:py-12">
                <div className='flex items-center justify-center gap-4'>

                    <div className='bg-[#fff3] text-white py-4 rounded-md cursor-pointer shadow-xl'>
                        <div className='bg-blue-500 text-white inline-block px-4 py-1 rounded-r-3xl'>Day 01</div>
                        <div className='flex items-center gap-3 px-4'>
                            <span className='text-5xl font-bold'>24</span>
                            <span className='flex flex-col justify-center items-center'>
                                <span className='text-xl font-medium'>NOV</span>
                                <span className=''>2024</span>
                            </span>
                        </div>
                    </div>
                    <div className='bg-[#fff3] text-white py-4 rounded-md border-2 border-green-500 cursor-pointer shadow-xl'>
                        <div className='bg-green-500 text-white inline-block px-4 py-1 rounded-r-3xl'>Day 01</div>
                        <div className='flex items-center gap-3 px-4'>
                            <span className='text-5xl font-bold'>23</span>
                            <span className='flex flex-col justify-center items-center'>
                                <span className='text-xl font-medium'>NOV</span>
                                <span className=''>2024</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="max-w-[800px] w-full mx-auto px-2 mt-8">

                    <div class="relative text-sm">
                        <div class="block w-1 bg-blue-300 absolute h-[90%] top-5 sm:left-1/2 left-10 transform -translate-x-1/2"></div>
                        {
                            items.map((item, i) => (
                                <div key={i} class="mt-6  mb-12">
                                    <div class='flex flex-col sm:flex-row items-center'>
                                        <div class={`flex ${i % 2 ? 'sm:justify-end' : 'sm:justify-start'} w-full mx-auto items-center`}>
                                            <div class={`sm:w-1/2 ${i % 2 ? 'sm:pl-16 pl-32' : 'sm:pr-16 sm:pl-0 pl-32 !sm-pl-0 sm:text-right'}`}>
                                                <div class="p-4 bg-white rounded shadow text-gray-700">
                                                    <div className="text-xl font-d">{item.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class={`rounded-full bg-blue-500 border-white border-4 absolute sm:left-1/2 left-0 translate-y-0 transform sm:-translate-x-1/2 flex items-center justify-center flex-col aspect-square p-2`}>
                                            <span>{item.start}</span>
                                            <span>{item.end}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </section>
    )
}

const items1 = [
    {
        start: '10: 30 AM',
        end: '10: 00 AM',
        title: 'Inauguration',
    },
    {
        start: '9: 00 AM',
        end: '10: 00 AM',
        title: 'Dedicated Event/Seminar slot for Title and Golden Sopnsor',
    },
    {
        start: '9: 00 AM',
        end: '10: 00 AM',
        title: 'Mock Context',
    },
]

const items2 = [
    {
        start: '9: 00 AM',
        end: '2: 00 PM',
        title: 'Programming Contest (National)',
    },
    {
        start: '3: 00 PM',
        end: '5: 00 PM',
        title: 'Closing Ceremony & Prize Giving',
    },
]

const times = [
    {
        name: 'Pre-Registration Opens',
        date: '9 Jan',
        bg: 'bg-blue-300',
    },
    {
        name: 'Pre-Registration Closes',
        date: '16 Jan',
        time: '11:59 PM',
        bg: 'bg-orange-300',
    },
    {
        name: 'Slot Publication',
        date: '18 Jan',
        bg: 'bg-yellow-300',
    },
    {
        name: 'Registration Opens',
        date: '19 Jan',
        time: '9:00 AM',
        bg: 'bg-red-300',
    },
    {
        name: 'Registration Closes',
        date: '21 Jan',
        time: '11:59 PM',
        bg: 'bg-green-300',
    },
]