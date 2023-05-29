import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsArticles } from '../store/newsSlice';
import { useRouter } from 'next/navigation';
 
const Pagination = () => {
    const [pageNoRange, setPageNoRange] = useState([1, 2, 3, 4, 5])
    const [currPageNo, setCurrPageNo] = useState(1)
    const dispatch = useDispatch();
    const router = useRouter();
    const category = useSelector((state)=>state.news.category)

    const handleNext = () => {
        if (currPageNo < 10) {
            setCurrPageNo(currPageNo + 1)
            if (currPageNo < 10 && currPageNo % 5 === 0) {
                const temp = [];
                const limit = currPageNo + 5;
                for (let x = currPageNo + 1; x <= limit; x++) {
                    temp.push(x);
                }
                setPageNoRange(temp)
            }
        }
        else {
            alert('No More news available ')
        }
    }

    const handlePrev = () => {
        if (currPageNo > 1) {
            setCurrPageNo(currPageNo - 1)
            if (currPageNo > 0 && (currPageNo + 4) % 5 === 0) {
                const temp = [];
                let tempC = currPageNo
                for (let x = 0; x < 5; x++) {
                    if (tempC - 1 > 0) {
                        tempC = tempC - 1
                        temp.push(tempC)
                    }
                    else {
                        break
                    }
                }
                setPageNoRange(temp.reverse())
            }
        }
        else {
            alert('you are on First Page')
        }
        console.log(currPageNo);
    }



    return (
        <div className="flex justify-center">
            <nav>
                <ul className="inline-flex -space-x-px">
                    <li>
                        <p onClick={() => handlePrev()} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Previous</p>
                    </li>
                    {pageNoRange.map((item) => {
                        return (
                            <li>
                                <p className={`px-3 py-2 leading-tight  ${currPageNo === item ? 'bg-blue-200' : 'bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}>{item}</p>
                            </li>
                        )
                    })}
                    <li>
                        <p onClick={() => handleNext()} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Next</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination