import React, { useEffect, useState } from 'react';
import HeadingTitle from '../shared/HeadingTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error('Error fetching reviews:', err)); // Error handling
    }, []);

    return (
        <div>
            <HeadingTitle
                heading="What Our Clients Say"
                subheading="TESTIMONIALS"
            />
            <div className="my-5">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}> {/* Key applied here */}
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="px-10 text-center">{review.details}</p>
                                <h2 className="text-3xl text-orange-400">{review.name}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
