import React, { useState } from 'react'
import logo from './../../public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className='flex p-5 bg-white justify-between items-center'>
            <Link href="/">
                <Image src={logo} alt='Logo not found' height={80} />
            </Link>
            <div className='flex items-center'>
                <form>
                    <input type='text' placeholder='Search for a news' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                        className='border-2 border-black-800 p-2 m-2 text-lg rounded' />
                </form>
                <Link href="/dashboard/sports" className='font-medium m-2 text-xl'>Sports</Link>
                <Link href="/dashboard/politics" className='font-medium m-2 text-xl'>Politics</Link>
                <Link href="/dashboard/business" className='font-medium m-2 text-xl'>Business</Link>
            </div>
        </div>
    )
}

export default Navbar