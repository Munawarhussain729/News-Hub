'use client'

import { API_KEY } from "@/app/APIKEY";
import Loader from "@/app/Components/Loader";
import MainHeadline from "@/app/Components/MainHeadline"
import NewsCard from "@/app/Components/NewsCard";
import { insertArticles } from "@/app/store/newsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {


    const selector = useSelector((state) => state)
    const newsData = selector?.newSlice?.newsArticles
    return (
        <>
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
        </>
    )
}
