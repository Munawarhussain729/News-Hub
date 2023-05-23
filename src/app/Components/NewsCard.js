import Image from 'next/image';
import React from 'react';

const NewsCard = ({ newsData }) => {
    return (
        <div className="flex h-300">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow my-3 mx-5 flex-grow">
                <img
                    className="rounded-t-lg"
                    src={newsData?.urlToImage}
                    alt="Thumbnail not found"
                    width={400}
                    height={400}
                />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {newsData?.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {newsData?.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
