'use client'
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import MainHeadline from "./Components/MainHeadline";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="py-10 px-20">
        <h1 className="text-8xl font-bold">News Hub</h1>
        <MainHeadline/>
      </div>
    </div>
  )
}
