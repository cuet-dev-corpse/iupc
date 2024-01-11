import React from 'react'

export default function Gallery() {
  return (
    <div>
        <div className="title">Gallery</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                images.map((image, i)=>(
                    <div key={i} className='w-full overflow-hidden aspect-video flex justify-center items-center rounded-md shadow-lg'>
                        <img className='h-full w-full object-cover self-center' src={image} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

const images=[
    "./Club/agm.jpeg",
    "./Club/blockchain.jpeg",
    "./Club/blockchain2.jpeg",
    "./Club/collaboration_startech.jpeg",
    "./Club/icpc_teams.jpeg",
    // "./Club/intra.jpeg",
    "./Club/jhankar.jpeg",
    "./Club/reseachpapeer.jpeg",
    "./Club/ngpc_1st_runner_up.jpeg",
    "./Club/webdev.jpeg",
    "./Fest/contest_1.jpeg",
    "./Fest/contest_2.jpeg",
    "./Fest/chess_competition.jpeg",
]