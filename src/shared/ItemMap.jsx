import React from 'react';
import RecipeCart from './RecipeCart';


const ItemMap = ({ items }) => {
    return (
        <div>
            <div className='px-0 md:px-40'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 '>
                    {
                        items.map(item =>
                            <RecipeCart
                                key={item._id}
                                item={item}
                            ></RecipeCart>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default ItemMap;