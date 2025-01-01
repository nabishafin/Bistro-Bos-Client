import React, { useEffect, useState } from 'react';
import HeadingTitle from '../shared/HeadingTitle';
import RecipeCart from '../shared/RecipeCart';




const ChifRecommends = () => {


    const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const recommendsItem = data.filter(item => item.category === 'salad')
                setMenus(recommendsItem.slice(0, 4))
            }
            )
    }, [])
    return (
        <div className=' px-0 md:mx-40'>
            <div>
                <HeadingTitle
                    heading={'CHIF RECOMMENDS'}
                    subheading={'Should Try'}
                ></HeadingTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    menus.map(item =>
                        <RecipeCart
                            key={item._id}
                            item={item}
                        >
                        </RecipeCart>)
                }
            </div>
        </div>
    );
};

export default ChifRecommends;