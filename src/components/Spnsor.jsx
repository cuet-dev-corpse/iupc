import React from 'react'
import BlurImage from './BlurImage'

export default function Sponsor() {
    return (
        <section className='container2 lg:my-16 my-6 md:my-12'>
            <div className='title mb-12'>Sponsor</div>
            {
                sponsors.map((item, i) => (
                    <div key={i} className={`flex max-w-[900px] sm:flex-row flex-col mx-auto items-center p-4 justify-center gap-8`}>
                        <div className=''>
                            <BlurImage className='max-w-[400px] w-[160px]' src={item.img} alt="kinetic" />
                        </div>
                        <div className=''>
                            <div className="uppercase title2 mb-2">{item.title}</div>
                            <div className="uppercase text">{item.desc}</div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

const sponsors=[
    {
        img: '/kinetic.png', 
        title: 'Kinetik Healthcare Solutions', 
        desc:'Kinetik Healthcare Solutions transforms Non-Emergency Medical Transportation with groundbreaking technology, connecting and digitizing the healthcare transportation ecosystem for a more efficient and purposeful experience.',
    },
    {
        img: '/braincraft.png', 
        title: 'Brain Craft Limited', 
        desc:'Brain Craft Limited is a software development company currently specializing in Mobile applications development in the iOS App Store and the Google Play Store.',
    },
    {
        img: '/w3.png', 
        title: 'W3 Eden', 
        desc:'W3 Eden is your guide to a secure and enriched online journey, crafting meaningful digital products with curiosity and experimentation. Explore a personalized Eden on the web with their creative insights.',
    },
]