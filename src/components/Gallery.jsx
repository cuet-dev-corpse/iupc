import React from 'react'
import BlurImage from './BlurImage'

export default function Gallery() {
  return (
    <div>
        <div className="title">Gallery</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                images.map((image, i)=>(
                    <div key={i} className='w-full bg-gray-700 overflow-hidden aspect-video flex justify-center items-center rounded-md shadow-lg'>
                        <BlurImage id={i} className='h-full w-full object-cover self-center' src={image} alt="Gallery Image" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

const images=[
    "/gallery/agm.jpeg",
    "/gallery/blockchain.jpeg",
    "/gallery/blockchain2.jpeg",
    "/gallery/collaboration_startech.jpeg",
    "/gallery/icpc_teams.jpeg",
    "/gallery/jhankar.jpeg",
    "/gallery/reseachpapeer.jpeg",
    "/gallery/ngpc_1st_runner_up.jpeg",
    "/gallery/webdev.jpeg",
    "/gallery/contest_1.jpeg",
    "/gallery/contest_2.jpeg",
    "/gallery/chess_competition.jpeg",
]