'use client'
import { API_KEY } from "@/app/APIKEY";
import Loader from "@/app/Components/Loader";
import MainHeadline from "@/app/Components/MainHeadline";
import NewsCard from "@/app/Components/NewsCard";
import Pagination from "@/app/Components/Pagination";
import { insertArticles } from "@/app/store/newsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Sports() {

  const dispatch = useDispatch()
  const newsData = useSelector((state) => state.news.newsArticles);
  return (
    <>
      <div>
        <MainHeadline />
        <div className="flex flex-wrap justify-center">
          {newsData?.map((item, index) => {
            if (index > 0) {
              return <NewsCard key={index} newsData={item} />
            }
          })}
        </div>
        <Pagination />
      </div>
    </>
  )
}
