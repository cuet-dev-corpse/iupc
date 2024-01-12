import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ErrorPage({ error }) {
    return (
        <>
            <div className="flex w-full flex-col items-center justify-center">
                <div className='text md:text-4xl text-3xl font-bold mx-auto mt-8'>
                    404! This page could not be found.
                </div>
            </div>
        </>
    )
}
