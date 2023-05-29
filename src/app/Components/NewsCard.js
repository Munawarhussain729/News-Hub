
import React, { useState } from 'react';

const NewsCard = ({ newsData }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
      setImageError(true);
    };
  
    return (
        <div className="flex h-300">
            <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow my-3 mx-2 flex-grow">
                <img
                    className="rounded-t-lg max-w-300"
                    src={imageError?'http://www.listercarterhomes.com/wp-content/uploads/2013/11/dummy-image-square.jpg' :newsData?.urlToImage}
                    alt="Thumbnail not found"
                    height={400}
                    
                    onError={handleImageError}
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
