import React from 'react'
import { MdEmail, MdLocalPhone } from "react-icons/md";

export default function Commite2() {
    return (
        <section className='container2 grid'>
            <div className="title">Committee</div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    members.map((member, i) => (
                        <div key={i} className=''>
                            <div className='p-4 h-full glass min-w-[300px] flex md:flex-col flex-row gap-3 justify-center items-center rounded-md md:text-center'>
                                <div className='rounded-full mx-auto w-[100px] aspect-square overflow-hidden flex items-center justify-center'>
                                    <img className='h-full w-full object-cover' src={member.img} alt="" />
                                </div>
                                <div className='flex-1'>
                                    <div className='sm:text-xl text-sm font-semibold'>{member.name}</div>
                                    <div className='font-medium text'>{member.position}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

const members = [
    {
        name: 'Dr. Abu Hasnat Mohammad Ashfak Habib',
        position: "Chairperson",
        img: './advisor/ashfak_sir.jpeg'
    },
    {
        name: 'Dr. Mohammad Shamsul Arefin',
        position: "Chief Advisor",
        img: './advisor/arefin_sir.jpg',
    },
    {
        name: 'Md. Monjur Ul Hasan',
        position: "Chief Moderator",
        img: './advisor/moderator.jpeg',
    },
    {
        name: 'Hasan Murad',
        position: "Moderator",
        img: './advisor/murad_sir.jpeg',
    },
    {
        name: 'Animesh Roy',
        position: "Moderator",
        img: './advisor/animesh_sir.jpg',
    },
    {
        name: 'Ashim Dey',
        position: "Moderator",
        img: './advisor/ashim_sir.jpg',
    },
    {
        name: 'Fahimul Alam Araf',
        position: "President",
        img: './advisor/president.jpeg'
    },
    {
        name: 'Md Ashraful Alam',
        position: "General Secretary",
        img: './advisor/gs.jpg',
    },
    {
        name: 'Nidita Roy',
        position: "Vice President (Admin)",
        img: './advisor/nidita.png',
    },
    {
        name: 'Md. Al-Amin Bhuiyan',
        position: "Vice President (Programming)",
        img: './advisor/alamin.jpeg',
    },
    {
        name: 'MD Rakib Alam Bappi',
        position: "Vice President (Organizing)",
        img: './advisor/bappi.jpeg',
    },
    {
        name: 'Abir Hassan',
        position: "Finance Secretary",
        img: './advisor/abid.jpeg',
    },
]