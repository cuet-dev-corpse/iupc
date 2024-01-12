'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ErrorPage({ error }) {
    const router = useRouter()
    console.log(router)
    const goBack = () => {
        window.history.back();
    };
    return (
        <>
            <div className="flex w-full flex-col items-center justify-center">
                <div className='text md:text-4xl text-3xl font-bold mx-auto mt-8'>
                    Somthing went wrong!
                </div>
                <div className='my-4 text2  text border shadow-md border-[#0002] dark:border-[#fff3] text-center rounded-md p-4  w-full md:w-[70%]'>{error.message}</div>
                <div className='gap-2 flex items-center flex-wrap justify-center'>
                    <Link href={'/'}>
                        <div
                            className='button font-bold sm:px-8 px-6 py-2'
                        >
                            Go to Home
                        </div>
                    </Link>
                    <div
                        onClick={goBack}
                        className='button font-bold sm:px-8 px-6 py-2'
                    >
                        Go Back
                    </div>
                </div>
            </div>
        </>
    )
}
