'use client'
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import MainHeadline from "./Components/MainHeadline";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_KEY } from "./APIKEY";
import { insertArticles } from "./store/newsSlice";
import NewsCard from "./Components/NewsCard";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=sports&language=en&pageSize=20&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        dispatch(insertArticles(data?.articles))
      })
      .catch(error => {
        // Handle any errors here
        console.error(error);
      });

  }, [])
  const selector = useSelector((state) => state)
  const newsData = selector?.newSlice?.newsArticles
 
  return (
    <div className="bg-white">
      <Navbar />
      <div className="py-10 px-64">
        <h1 className="text-8xl font-bold">News Hub</h1>
        <MainHeadline  />
        <div className="flex flex-wrap justify-center">
          {newsData?.map((item,index) => {
            return (
              <NewsCard key={index} newsData={item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
