'use client'
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import MainHeadline from "./Components/MainHeadline";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_KEY } from "./APIKEY";
import { insertArticles } from "./store/newsSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=sports&language=en&pageSize=20&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(insertArticles(data?.articles))
      })
      .catch(error => {
        // Handle any errors here
        console.error(error);
      });

  }, [])
  return (
    <div className="bg-white">
      <Navbar />
      <div className="py-10 px-64">
        <h1 className="text-8xl font-bold">News Hub</h1>
        <MainHeadline />
      </div>
    </div>
  )
}
