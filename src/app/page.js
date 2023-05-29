'use client'
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import MainHeadline from "./Components/MainHeadline";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchNewsArticles } from "./store/newsSlice";
import NewsCard from "./Components/NewsCard";
import Loader from "./Components/Loader";
import Pagination from "./Components/Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);
  const newsData = useSelector((state) => state.news.newsArticles);
  const category = useSelector((state)=>state.news.category)
  useEffect(() => {
    dispatch(fetchNewsArticles({ category: category, pageNo: 1 }))
      .unwrap()
      .then((originalPromiseResult) => {
        setShowLoader(false);
      })
      .catch((rejectedValueOrSerializedError) => {
        alert("No news on this Category")
        setShowLoader(false)
      });
  }, []);

  return (
    <div className="bg-white">
      <Navbar setShowLoader={setShowLoader} />
      {showLoader ? (
        <Loader />
      ) : (
        <div className="py-10 px-64">
          <h1 className="text-8xl font-bold">News Hub</h1>
          <MainHeadline />
          <div className="flex flex-wrap justify-center">
            {newsData.map((item, index) => {
              if (index > 0) {
                return <NewsCard key={index} newsData={item} />
              }
            }
            )}
          </div>
          <Pagination  />
        </div>
      )}
    </div>
  );
}
