import React, { useEffect, useState } from 'react';
import HeadingTitle from '../shared/HeadingTitle';
import RecipeSingle from './RecipeSingle';
import UseMenu from '../hooks/UseMenu';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';





const PopularItems = () => {
    const [menus] = UseMenu()

    const popularItem = menus.filter(item => item.category === 'popular')




    return (
        <div className='px-0 py-0  md:px-40'>
            <div>
                <HeadingTitle
                    heading={'CHEF RECOMMENDS'}
                    subheading={'Should Try'}
                ></HeadingTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  md:gap-5 '>
                {
                    popularItem.map(item =>
                        <RecipeSingle
                            key={item._id}
                            item={item}
                        ></RecipeSingle>
                    )
                }
            </div>
            <Link to={`/ourShop/salad`} className="my-7 flex justify-center items-center">
                <Button text="View Full Menu" />
            </Link>
            <div className=' md:mt-10 mt-5 '>
                <p className='text-4xl py-10 px-15 bg-black text-white text-center rounded-xl'>Contact : 01758056337</p>
            </div>
        </div >
    );
};

export default PopularItems;