import React, { useState } from 'react'
import logo from './../../public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { API_KEY } from '@/app/APIKEY'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, fetchNewsArticles, insertArticles } from '@/app/store/newsSlice'


const Navbar = ({ setShowLoader }) => {

    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();
    const router = useRouter();

    const newsData = useSelector((state) => state.news.newsArticles);

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(addCategory(searchValue))
        dispatch(fetchNewsArticles({ category: searchValue, pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
                const responseData = originalPromiseResult.articles; // Assuming the API response has a "data" property
                console.log("Response Data ", responseData);
                if (responseData.length === 0) {
                    dispatch(addCategory('technology'))
                    router.push('/');
                } else {
                    router.push('/dashboard/search');
                }
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("Handle: No news on this Category")
                setShowLoader(false)
                router.push('/')
            });
    }

    const handleOnSports = () => {
        dispatch(addCategory('sports'))
        setShowLoader(true)
        dispatch(fetchNewsArticles({ category: 'sports', pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("Sports Page: No news on this Category")
                setShowLoader(false)
            });
        router.push('/dashboard/sports')
    }

    const handleOnBusiness = () => {
        dispatch(addCategory('business'))
        setShowLoader(true)
        dispatch(fetchNewsArticles({ category: 'business', pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("Business Page: No news on this Category")
                setShowLoader(false)
            });
        router.push('/dashboard/business')
    }

    const handleToHome = () => {
        dispatch(addCategory('technology'))
        setShowLoader(true)
        dispatch(fetchNewsArticles({ category: 'technology', pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("Home: No news on this Category")
                setShowLoader(false)
            });
        router.push('/')
    }

    const handleOnPolitics = () => {
        dispatch(addCategory('politics'))
        setShowLoader(true)
        console.log("Inside Politics");
        dispatch(fetchNewsArticles({ category: 'politics', pageNo: 1 }))
            .unwrap()
            .then((originalPromiseResult) => {
                setShowLoader(false);
            })
            .catch((rejectedValueOrSerializedError) => {
                alert("Politics Page: No news on this Category")
                setShowLoader(false)
            });
        router.push('/dashboard/politics')
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
