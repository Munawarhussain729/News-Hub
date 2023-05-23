'use client'

import { API_KEY } from "@/app/APIKEY";
import MainHeadline from "@/app/Components/MainHeadline"
import { insertArticles } from "@/app/store/newsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Politics() {
    const dispatch = useDispatch();
    useEffect(() => {
      fetch(`https://newsapi.org/v2/top-headlines?category=politics&language=en&pageSize=20&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
         
          dispatch(insertArticles(data?.articles))
        })
        .catch(error => {
          console.error(error);
        });
  
    }, [])
    return (<>
        <MainHeadline />
    </>
    )
}
