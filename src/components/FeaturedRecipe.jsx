import React from 'react';
import HeadingTitle from '../shared/HeadingTitle';
import fepic from '../assets/home/featured.jpg'

const FeaturedRecipe = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-cover bg-center bg-fixed relative text-white my-10 "
            style={{ backgroundImage: `url(${fepic})` }}>
            {/* Background overlay with opacity */}
            <div className="absolute inset-0 bg-black opacity-50 "></div> {/* Adjust opacity here */}

            {/* Heading Title */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center ">
                <HeadingTitle
                    subheading={'Check it out'}
                    heading={'FROM OUR MENU'}
                />
            </div>

            <div className="flex flex-col md:flex-row relative z-10 justify-center items-center pb-10 md:gap-10">
                {/* Image section */}
                <div className="flex justify-center items-center w-full md:w-6/12 p-4 md:p-10">
                    <img className="w-full h-auto" src={fepic} alt="Description of the dish" />
                </div>

                {/* Text content - Centered vertically and horizontally */}
                <div className="flex flex-col justify-center items-center text-center w-full md:w-7/12 mt-6 md:mt-0 text-white px-4 md:px-2 ">
                    <div>
                        <h2 className="text-2xl md:text-4xl text-start font-semibold">December 30, 2024</h2> {/* Example date */}
                        <h2 className="text-3xl md:text-5xl text-start font-semibold my-4">WHERE CAN I GET SOME?</h2>
                        <p className="mt-4 text-start md:text-lg">
                            These are unique dishes that are closely associated with the restaurant’s identity.
                            They may have a distinct preparation method, special ingredients, or a twist on classic favorites.
                        </p>
                        <button className=' flex justify-start mt-6 bg-transparent text-white border border-white px-4 py-2 rounded-lg'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FeaturedRecipe;