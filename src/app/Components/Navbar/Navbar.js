import React, { useState } from 'react'
import logo from './../../public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { API_KEY } from '@/app/APIKEY'
import { useDispatch } from 'react-redux'
import { insertArticles } from '@/app/store/newsSlice'


const Navbar = ({setShowLoader}) => {
    
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();
    const router = useRouter();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setShowLoader(true)
        fetch(`https://newsapi.org/v2/top-headlines?category=${searchValue}&language=en&pageSize=20&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.articles.length !== 0) {
                    router.push('/dashboard/search');
                    dispatch(insertArticles(data?.articles))
                    setShowLoader(false)
                    setSearchValue('')
                }
                else{
                    alert("No news on this Category")
                    setShowLoader(false)
                }
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
    }
    const handleOnSports = () => {
        
        setShowLoader(true)
        const searchValue='sports';
        fetch(`https://newsapi.org/v2/top-headlines?category=${searchValue}&language=en&pageSize=20&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.articles.length !== 0) {
                    router.push('/dashboard/search');
                    dispatch(insertArticles(data?.articles))
                    setShowLoader(false)
                }
                else{
                    alert("No news on this Category")
                    setShowLoader(false)
                }
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
    }
    const handleOnBusiness = () => {
        
        setShowLoader(true)
        const searchValue='business';
        fetch(`https://newsapi.org/v2/top-headlines?category=${searchValue}&language=en&pageSize=20&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.articles.length !== 0) {
                    router.push('/dashboard/search');
                    dispatch(insertArticles(data?.articles))
                    setShowLoader(false)
                }
                else{
                    alert("No news on this Category")
                    setShowLoader(false)
                }
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
    }
    const handleOnPolitics = () => {
        
        setShowLoader(true)
        const searchValue='politics';
        fetch(`https://newsapi.org/v2/top-headlines?category=${searchValue}&language=en&pageSize=20&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.articles.length !== 0) {
                    router.push('/dashboard/search');
                    dispatch(insertArticles(data?.articles))
                    setShowLoader(false)
                }
                else{
                    alert("No news on this Category")
                    setShowLoader(false)
                }
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
    }
    return (
        <div className='flex p-5 bg-white justify-between items-center'>
            <Link href="/">
                <Image src={logo} alt='Logo not found' height={80} />
            </Link>
            <div className='flex items-center'>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <input type='text' placeholder='Search for a Category' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                        className='border-2 border-black-800 p-2 m-2 text-lg rounded' />
                </form>
                <p onClick={()=>handleOnSports()} className='font-medium m-2 text-xl cursor-pointer'>Sports</p>
                <p onClick={()=>handleOnPolitics()} className='font-medium m-2 text-xl cursor-pointer'>Politics</p>
                <p onClick={()=>handleOnBusiness()} className='font-medium m-2 text-xl cursor-pointer'>Business</p>
            </div>
        </div>
    )
}

export default Navbar