import React, { useEffect, useState } from 'react'
import logo from '../public/Logo.png'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { insertArticles } from '../store/newsSlice'
import { API_KEY } from '../APIKEY'

const MainHeadline = () => {
    const [newData, setNewsData] = useState({})
    const selector = useSelector((state) => state)
    const MainHeadingData = selector?.newSlice?.newsArticles[0]
    const date = new Date(MainHeadingData?.publishedAt);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'UTC',
    };

    const normalTime = date.toLocaleString('en-US', options);

    return (
        <div className='my-20'>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-100 flex-none bg-cover rounded-t 
                lg:rounded-t-none lg:rounded-l text-center overflow-hidden " title="Woman holding a mug">
                    <img src={imageError ? 'http://www.listercarterhomes.com/wp-content/uploads/2013/11/dummy-image-square.jpg' : MainHeadingData?.urlToImage}
                        alt="thumnail to found" width={800} height={500} onError={handleImageError}  style={{maxWidth:'800px', maxHeight:'500px'}}/>
                </div>
                <div className="px-20  bg-white rounded-b  flex flex-col justify-between  items-center leading-normal">
                    <div className="mb-8">
                        <p>{normalTime}</p>
                        <p className="text-gray-900 font-bold text-4xl my-4">{MainHeadingData?.title}</p>
                        <p className="text-gray-700 text-base">{MainHeadingData?.description}</p>
                        <div className="text-sm my-5">
                            <p className="text-gray-900 leading-none">{MainHeadingData?.author}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainHeadline