'use client'
import React, { useState } from 'react';
import MainHeadline from '../Components/MainHeadline';
import Navbar from '../Components/Navbar/Navbar';
import Loader from '../Components/Loader';

export default function DashboardLayout({ children }) {
    const [showLoader, setShowLoader] = useState(false)
    const temp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <section className="bg-white">
            <Navbar setShowLoader={setShowLoader} />
            <div className="py-10 xl:px-64 lg:px-50 md:px-20 sm:px-10">
                <h1 className="text-8xl font-bold">News Hub</h1>
                <div className="flex flex-wrap justify-center">
                    {showLoader ?
                        (<div className="my-6 flex flex-wrap justify-center">
                            {temp.map((item, index) => <div key={item}> < Loader /></div>)}
                        </div>) : (
                            <>
                                {children}
                            </>
                        )}
                </div>
            </div>
        </section>
    );
}
