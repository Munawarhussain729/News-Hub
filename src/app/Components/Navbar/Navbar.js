import React, { useState } from 'react'
import logo from './../../public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { API_KEY } from '@/app/APIKEY'
import { useDispatch } from 'react-redux'
import { insertArticles } from '@/app/store/newsSlice'
const Navbar = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`https://newsapi.org/v2/top-headlines?category=${searchValue}&language=en&pageSize=20&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(insertArticles(data?.articles))
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
    }
    return (
        <div className='flex p-5 bg-white justify-between items-center'>
            <Link href="/">
                <Image src={logo} alt='Logo not found' height={80} />
            </Link>
            <div className='flex items-center'>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <input type='text' placeholder='Search for a Category' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                        className='border-2 border-black-800 p-2 m-2 text-lg rounded' />
                </form>
                <Link href="/dashboard/sports" className='font-medium m-2 text-xl'>Sports</Link>
                <Link href="/dashboard/politics" className='font-medium m-2 text-xl'>Politics</Link>
                <Link href="/dashboard/pakistan" className='font-medium m-2 text-xl'>Pakistan</Link>
            </div>
        </div>
    )
}

export default Navbar