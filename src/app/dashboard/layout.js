'use client'
import React, { useState } from 'react';
import MainHeadline from '../Components/MainHeadline';
import Navbar from '../Components/Navbar/Navbar';
import Loader from '../Components/Loader';

export default function DashboardLayout({ children }) {
    const [showLoader, setShowLoader] = useState(false)

    return (
        <section className="bg-white">
            <Navbar setShowLoader={setShowLoader} />
            {showLoader ? <Loader /> : (<div className="py-10 px-64">
                <h1 className="text-8xl font-bold">News Hub</h1>
                {children}
            </div>)}
        </section>
    );
}
