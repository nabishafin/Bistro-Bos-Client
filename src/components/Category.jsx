import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../assets/home/slide1.jpg'
import pic2 from '../assets/home/slide2.jpg'
import pic3 from '../assets/home/slide3.jpg'
import pic4 from '../assets/home/slide4.jpg'
import pic5 from '../assets/home/slide5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import HeadingTitle from '../shared/HeadingTitle';
const Category = () => {
    return (
        <div className='px-0 py-0  md:px-40'>
            <HeadingTitle
                heading={'ORDER ONLINE'}
                subheading={'From 11:00am to 10:00pm'}
            ></HeadingTitle>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img src={pic1} alt="" className="w-full h-80 " />
                        <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold bg-black bg-opacity-50 p-2">
                            Salads
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src={pic2} alt="" className="w-full h-80" />
                        <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold bg-black bg-opacity-50 p-2">
                            Pizzas
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={pic3} alt="" className="w-full h-80" />
                        <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold bg-black bg-opacity-50 p-2">
                            Coffees
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={pic4} alt="" className="w-full h-80" />
                        <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold bg-black bg-opacity-50 p-2">
                            desserts
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={pic5} alt="" className="w-full h-80" />
                        <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold bg-black bg-opacity-50 p-2">
                            Coffees
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={pic1} alt="" className="w-full h-80" />
                        <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold bg-black bg-opacity-50 p-2">
                            desserts
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={pic2} alt="" className="w-full h-80" />
                        <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold bg-black bg-opacity-50 p-2">
                            Pizzas
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={pic3} alt="" className="w-full h-80" />
                        <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold bg-black bg-opacity-50 p-2">
                            Salads
                        </p>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;