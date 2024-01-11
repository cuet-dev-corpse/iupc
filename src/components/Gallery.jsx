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
    "./club/agm.jpeg",
    "./club/blockchain.jpeg",
    "./club/blockchain2.jpeg",
    "./club/collaboration_startech.jpeg",
    "./club/icpc_teams.jpeg",
    // "./club/intra.jpeg",
    "./club/jhankar.jpeg",
    "./club/reseachpapeer.jpeg",
    "./club/ngpc_1st_runner_up.jpeg",
    "./club/webdev.jpeg",
    "./fest/contest_1.jpeg",
    "./fest/contest_2.jpeg",
    "./fest/chess_competition.jpeg",
]