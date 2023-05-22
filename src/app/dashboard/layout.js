'use client'
import Navbar from "../Components/Navbar/Navbar";

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section className="bg-white">
            <Navbar />
            <div className="py-10 px-20">
                <h1 className="text-8xl font-bold">News Hub</h1>
                {children}
            </div>
        </section>
    );
}