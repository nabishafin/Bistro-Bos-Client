import React from 'react';
import backimg from '../assets/home/chef-service.jpg'

const BistroCart = () => {
    return (
        <div className="px-4 py-10 md:px-40 my-10">
            <div className="relative w-full h-80 md:h-[450px] bg-cover bg-center" style={{ backgroundImage: `url(${backimg})` }}>
                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                    <div className="bg-white px-8 py-6 md:px-12 md:py-8 rounded-lg shadow-lg text-center w-auto max-w-3xl mx-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bistro Boss</h1> {/* Headline */}
                        <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-gray-800">Bistro Boss is an elegant yet casual dining destination where guests can enjoy a perfect blend of classic bistro flavors with a modern twist.</h2> {/* Title */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BistroCart;