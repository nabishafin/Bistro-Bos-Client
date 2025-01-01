import React from 'react';

import RecipeSingle from './RecipeSingle';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, loca }) => {


    return (
        <div className='px-0 md:px-40'>
            <div className='grid grid-cols-1 md:grid-cols-2  md:gap-5 '>
                {
                    items.map(item =>
                        <RecipeSingle
                            key={item._id}
                            item={item}
                        ></RecipeSingle>
                    )
                }
            </div>
            <Link to={`/ourShop/${loca}`} className="my-7 flex justify-center items-center">
                <Button text="View Full Menu" />
            </Link>
        </div >
    );
};

export default MenuCategory;