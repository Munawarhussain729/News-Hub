'use client'
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import MainHeadline from "./Components/MainHeadline";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addCategory, fetchNewsArticles } from "./store/newsSlice";
import NewsCard from "./Components/NewsCard";
import Loader from "./Components/Loader";
import Pagination from "./Components/Pagination";
import { useRouter } from "next/router";

export default function Home() {
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);
  const newsData = useSelector((state) => state.news.newsArticles);
  const category = useSelector((state) => state.news.category)

  const temp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    dispatch(addCategory('technology'))
    dispatch(fetchNewsArticles({ category: category, pageNo: 1 }))
      .unwrap()
      .then((originalPromiseResult) => {
        setShowLoader(false);
      })
      .catch((rejectedValueOrSerializedError) => {
        alert("Main page:No news on this Category")
        setShowLoader(false)
      });
  }, []);

  return (
    <div className="bg-white">
      <Navbar setShowLoader={setShowLoader} />
      <div className="py-10 xl:px-64 lg:px-50 md:px-20 sm:px-10">
        <h1 className="text-8xl font-bold">News Hub</h1>
        {showLoader ? <Loader /> : <MainHeadline />}
        <div className="flex flex-wrap justify-center">
          {showLoader ?
            (<div className="my-6 flex flex-wrap justify-center">
              {temp.map((item, index) => <div key={item}><Loader /> </div>)}
            </div>) : (
              newsData.map((item, index) => {
                if (index > 0) {
                  return <NewsCard key={index} newsData={item} />
                }
              }
              )

            )}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
