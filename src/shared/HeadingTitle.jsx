import React from 'react';

const HeadingTitle = ({ heading, subheading }) => {
    return (
        <div className='py-10'>
            <div className="text-center text-yellow-400">
                <span className="border-b-2 border-yellow-400 pb-1 ">---{subheading}---</span>
            </div>

            <button className="block w-full  text-black py-4 rounded-md ">
                <span className='border-b-2 text-4xl pb-1'>  {heading}</span>
            </button>
        </div>
    );
};

export default HeadingTitle;