import React from 'react'

export default function Partner() {
  return (
    <section className='container2 my-8'>
        <div className='title'>Partner</div>
        <div className="grid grid-cols-3 gap-4 -mx-4">
            {
                [1,2,3,4,5].map((img,i)=>(
                    <div key={i}>
                        <img className='max-w-[100%] object-cover' src={`./partner${img}.png`} alt="" />
                    </div>
                ))
            }
        </div>
    </section>
  )
}
