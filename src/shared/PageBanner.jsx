import React from 'react';
import { Parallax, Background } from 'react-parallax';


const PageBanner = ({ img, title, subtitle }) => {
    return (
        <div>
            <div
                className="hero h-[400px] md:h-[400px] lg:h-[600px]"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className="hero-content text-white text-center opacity-80 bg-black px-4 py-8 md:px-16 md:py-16 lg:px-40 lg:py-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">{title}</h1>
                        <p className="mb-5 text-sm md:text-lg">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PageBanner;