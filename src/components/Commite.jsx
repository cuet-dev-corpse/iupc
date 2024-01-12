import React from 'react'
import { MdEmail, MdLocalPhone } from "react-icons/md";
import BlurImage from './BlurImage';

export default function Commite() {
    return (
        <section className='container2 grid'>
            <div className="title">Committee</div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
                {
                    members.map((member, i) => (
                        <div key={i} className=''>
                            <div className='p-4 h-full glass flex md:flex-col flex-col gap-3 justify-center items-center rounded-md text-center'>
                                <div className='rounded-full bg-gray-700 mx-auto w-[80px] aspect-square overflow-hidden flex items-center justify-center'>
                                    {member.img && <BlurImage id={i} className='h-full w-full object-cover' src={member.img} alt="" />}
                                </div>
                                <div className='flex-1'>
                                    <div className='sm:text-sm text-xs font-semibold'>{member.name}</div>
                                    <div className='font-medium text-xs sm:text-sm'>{member.position}</div>
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
        img: '/commite/ashfak_sir.jpeg'
    },
    {
        name: 'Dr. Mohammad Shamsul Arefin',
        position: "Chief commite",
        img: '/commite/arefin_sir.jpg',
    },
    {
        name: 'Md. Monjur Ul Hasan',
        position: "Chief Moderator",
        img: '/commite/moderator.jpeg',
    },
    {
        name: 'Animesh Roy',
        position: "Moderator",
        img: '/commite/animesh_sir.jpg',
    },
    {
        name: 'Ashim Dey',
        position: "Moderator",
        img: '/commite/ashim_sir.jpg',
    },
    {
        name: 'Hasan Murad',
        position: "Moderator",
        img: '/commite/murad_sir.jpeg',
    },
    {
        name: 'Fahimul Alam Araf',
        position: "President",
        img: '/commite/president.jpeg'
    },
    {
        name: 'Md Ashraful Alam',
        position: "General Secretary",
        img: '/commite/gs.png',
    },
    {
        name: 'Nidita Roy',
        position: "Vice President (Admin)",
        img: '/commite/nidita.png',
    },
    {
        name: 'Md. Al-Amin Bhuiyan',
        position: "Vice President (Programming)",
        img: '/commite/alamin.jpeg',
    },
    {
        name: 'MD Rakib Alam Bappi',
        position: "Vice President (Organizing)",
        img: '/commite/bappi.jpeg',
    },
    {
        name: 'Abir Hassan',
        position: "Finance Secretary",
        img: '/commite/abid.jpeg',
    },
    {
        name: 'Abu Shaleh Md. Toha',
        position: "Assitant Finance Secretary",
        img: '/commite/shaleh.jpg',
    },
    {
        name: 'Omar Farook',
        position: "IT Secretary",
        img: '/commite/Omar.jpeg',
    },
    {
        name: 'Taohid Khan',
        position: "Assitant IT Secretary",
        img: '/commite/Taohid.jpg',
    },
    {
        name: 'Md Osama',
        position: "Publication Secretary",
        img: '/commite/Osama.jpg',
    },
    {
        name: 'Md Shimul Mahmud',
        position: "Assistant Publication Secretary",
        img: '/commite/Shimul.jpg',
    },
    {
        name: 'Nafis Fuad Pranta',
        position: "Secretary (Marketing)",
        img: '/commite/Nafis.jpeg',
    },
    {
        name: 'Saikat Chowdhury',
        position: "Assistant Secretary (Marketing)",
        img: '/commite/Saikat.jpg',
    },
    {
        name: 'Binoy Das Gupta',
        position: "Secretary (Development)",
        img: '/commite/Binoy.jpg',
    },
    {
        name: 'Mushfikur Rahman',
        position: "Assistant Secretary (Development)",
        img: '/commite/Mushfikur.png',
    },
    {
        name: 'Rafi Mahadi Shuvo',
        position: "Public Relations Secretary",
        img: '/commite/Rafi.jpg',
    },
    {
        name: 'Sadia Ahmed',
        position: "Assistant Public Relations Secretary",
        img: '/commite/Sadia.jpg',
    },
    {
        name: 'Estiak Ahamed Sazid',
        position: "Office Secretary",
        img: '/commite/Estiak.jpg',
    },
    {
        name: 'Pinki Akter',
        position: "Assistant Office Secretary",
        img: '/commite/Pinki.jpeg',
    },
    {
        name: 'Md. Taosiful Islam',
        position: "Joint General Secretary",
        img: '/commite/Md. Taosiful Islam.jpg',
    },
    {
        name: 'Rowshon Akter',
        position: "Assistant General Secretary",
        img: '/commite/Rowshon Akter.jpg',
    },
    {
        name: 'Md. Rejwan Kabir Hamim',
        position: "Programming Secretary",
        img: '/commite/Hamim.jpg',
    },
    {
        name: 'Zerin Shaima Meem',
        position: "Assistant Programming Secretary",
        img: '/commite/Zerin Shaima Meem.jpg',
    },
    {
        name: 'Niaj Mahmud Pial',
        position: "Assistant Programming Secretary",
        img: '/commite/Niaj Mahmud Pial.jpg',
    },
    {
        name: 'Tahsin Azad Tias',
        position: "Organizing Secretary",
        img: '/commite/Tahsin Azad Tias.jpg',
    },
    {
        name: 'Sayeda Tahmina',
        position: "Assistant Organizing Secretary",
        img: '/commite/Sayeda Tahmina.jpg',
    },
    {
        name: 'Md Mehedi Hassan',
        position: "Organizing Secretary (Programming)",
        img: '/commite/Md Mehedi Hassan.jpg',
    },
    {
        name: 'Zannatul Fardaush Tripty',
        position: "Assistant Organizing Secretary (Programming)",
        img: '/commite/Zannatul.jpg',
    },
]