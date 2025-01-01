import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import BistroCart from '../components/BistroCart';
import PopularItems from '../components/PopularItems';
import FeaturedRecipe from '../components/FeaturedRecipe';
import Testimonials from '../components/Testimonials';
import ChifRecommends from '../components/ChifRecommends';


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Category */}
            <Category></Category>

            {/* cart */}
            <BistroCart></BistroCart>

            <PopularItems></PopularItems>

            <ChifRecommends></ChifRecommends>

            <FeaturedRecipe></FeaturedRecipe>

            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;