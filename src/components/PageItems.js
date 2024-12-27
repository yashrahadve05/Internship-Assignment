import React from 'react'

const PageItems = (props) => {

    let dummyImage = 'https://via.placeholder.com/100x100';

    let { price, name, average, reviews, image } = props;
    return (
        <div className='container flex items-start m-4 items-top'>
            <div className="max-w-sm h-fit p-4 w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" className='flex flex-wrap items-center justify-center h-fit overflow-hidden rounded-t-lg'>
                    <img className="rounded-t-lg" src={!image ? dummyImage : image} alt="" />
                </a>
                <div className="p-5 flex flex-col items-start">
                    <h5 className="mb-2 self-start text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Price: {price}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Reviews: {reviews}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Rating: {average.toFixed(1)}</p>
                </div>
            </div>
        </div>

    )
}

export default PageItems