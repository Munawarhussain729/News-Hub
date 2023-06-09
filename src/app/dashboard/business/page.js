'use client'
import { API_KEY } from '@/app/APIKEY';
import Loader from '@/app/Components/Loader';
import MainHeadline from '@/app/Components/MainHeadline';
import NewsCard from '@/app/Components/NewsCard';
import { insertArticles } from '@/app/store/newsSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Business() {
  const dispatch = useDispatch()
  const [showLoader, setShowLoader] = useState(true)

  const category = "business";
  // useEffect(() => {
  //   fetch(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=20&apiKey=${API_KEY}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       dispatch(insertArticles(data?.articles))
  //       setShowLoader(false);
  //     })
  //     .catch(error => {
  //       // Handle any errors here
  //       alert(error.message)
  //       setShowLoader(false);
  //       console.error(error);
  //     });

  // }, [])
  const selector = useSelector((state) => state)
  const newsData = selector?.newSlice?.newsArticles
  return (
    <>
      {showLoader ? <Loader /> : (<div>
        <MainHeadline />
        <div className="flex flex-wrap justify-center">
          {newsData?.map((item, index) => {
            return (
              <NewsCard key={index} newsData={item} />
            )
          })}
        </div>
      </div>)}
    </>
  )
}
