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
    const [navbar, setNavbar] = useState(false);

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


        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">

                        <div onClick={() => handleToHome()} className='cursor-pointer'>
                            <Image src={logo} alt='Logo not found' height={80} />
                        </div>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <form onSubmit={(e) => handleOnSubmit(e)}>
                                    <input type='text' placeholder='Search for a Category' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                                        className='border-2 border-black-800 p-2 m-2 text-lg rounded' />
                                </form>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <p onClick={() => handleOnSports()} className='font-medium m-2 text-xl cursor-pointer'>Sports</p>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <p onClick={() => handleOnPolitics()} className='font-medium m-2 text-xl cursor-pointer'>Politics</p>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <p onClick={() => handleOnBusiness()} className='font-medium m-2 text-xl cursor-pointer'>Business</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
