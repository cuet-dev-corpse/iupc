import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import BlurImage from './BlurImage'

export default function Developer() {
  return (
    <div className=''>
        <div className="title2 mb-6">Developed By</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                developers.map((e,i)=>(
                    <div className="glass flex items-center p-4 gap-4">
                        <div className='h-[70px] aspect-square flex justify-center items-center rounded-full bg-gray-600'>
                            {e.img && <BlurImage className='h-full object-cover w-full rounded-full' src={e.img} alt="" />}
                        </div>
                        <a href={e.linkedin} target='blank' className='flex font-semibold items-center'>
                            <FaLinkedin className='text-xl mr-2 cursor-pointer'/>
                            <p>{e.name}</p>
                        </a>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

const developers=[
    {
        img: '/dev_1.png',
        name: 'MD.SHAFIQUL HASAN SAYMON',
        linkedin: 'https://www.linkedin.com/in/md-shafiqul-hasan-22a7201a1/',
    },
    {
        img: '/dev_2.png',
        name: 'Zarif Muhtasim',
        linkedin: 'https://www.linkedin.com/in/zarif-muhtasim-114b67151/',
    },
    {
        img: '',
        name: 'Mohammed Sajidul Islam',
        linkedin: 'https://www.linkedin.com/in/dev-shajid/',
    },
]
