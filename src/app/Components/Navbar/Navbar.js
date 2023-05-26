import React, { useState } from 'react'
import logo from './../../public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { API_KEY } from '@/app/APIKEY'
import { useDispatch } from 'react-redux'
import { fetchNewsArticles, insertArticles } from '@/app/store/newsSlice'


const Navbar = ({ setShowLoader }) => {

    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();
    const router = useRouter();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchNewsArticles({ category: searchValue, pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("No news on this Category")
                setShowLoader(false)
            });
    }
    const handleOnSports = () => {

        setShowLoader(true)
        dispatch(fetchNewsArticles({ category: 'sports', pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("No news on this Category")
                setShowLoader(false)
            });
    }
    const handleOnBusiness = () => {

        setShowLoader(true)
        dispatch(fetchNewsArticles({ category: 'business', pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("No news on this Category")
                setShowLoader(false)
            });
    }
    const handleToHome = () => {
        setShowLoader(true)
        dispatch(fetchNewsArticles({ category: 'technology', pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("No news on this Category")
                setShowLoader(false)
            });

    }
    const handleOnPolitics = () => {

        setShowLoader(true)
        console.log("Inside Politics");
        dispatch(fetchNewsArticles({ category: 'politics', pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("No news on this Category")
                setShowLoader(false)
            });
    }
    return (
        <div className='flex p-5 bg-white justify-between items-center'>
            <div onClick={() => handleToHome()} className='cursor-pointer'>
                <Image src={logo} alt='Logo not found' height={80} />
            </div>
            <div className='flex items-center'>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <input type='text' placeholder='Search for a Category' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                        className='border-2 border-black-800 p-2 m-2 text-lg rounded' />
                </form>
                <p onClick={() => handleOnSports()} className='font-medium m-2 text-xl cursor-pointer'>Sports</p>
                <p onClick={() => handleOnPolitics()} className='font-medium m-2 text-xl cursor-pointer'>Politics</p>
                <p onClick={() => handleOnBusiness()} className='font-medium m-2 text-xl cursor-pointer'>Business</p>
            </div>
        </div>
    )
}

export default Navbar