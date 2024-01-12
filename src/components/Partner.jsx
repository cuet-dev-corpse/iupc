import React from 'react'
import BlurImage from './BlurImage'

export default function Partner() {
  return (
    <section className='container2 my-8'>
        <div className='title'>Partner</div>
        <div className="relative px-4">
            <div style={{boxShadow:'0 0 40px 60px #ddf3ff5f'}} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[0%] w-[70%] bg-[#ddf3ff8a] rounded-full'></div>
            <div className='grid md:grid-cols-5 grid-cols-3 mt-6 gap-4 space-y-4 place-items-center -mx-4 glass rounded-md p-4'>
            {
                [3,4,1,2,5].map((img,i)=>(
                    <div key={i} className=''>
                        <BlurImage id={i} className='md:max-w-[100px] max-w-[75px] w-full' src={`/partner${img}.png`} alt="" />
                    </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}
