'use client'
import { API_KEY } from "@/app/APIKEY";
import MainHeadline from "@/app/Components/MainHeadline";
import NewsCard from "@/app/Components/NewsCard";
import { insertArticles } from "@/app/store/newsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Sports() {

  const dispatch = useDispatch()

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
    <div>
      <MainHeadline />
      <div className="flex flex-wrap justify-center">
        {newsData?.map((item, index) => {
          return (
            <NewsCard key={index} newsData={item} />
          )
        })}
      </div>
    </div>
  )
}
