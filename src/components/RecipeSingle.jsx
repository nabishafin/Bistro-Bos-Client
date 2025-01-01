import React from 'react';

const RecipeSingle = ({ item }) => {

    const { _id, name, recipe, image, category, price } = item;
    console.log(name)

    return (
        <div className=''>
            <div className='flex  justify-start items-center gap-3'>
                <div>
                    <img
                        className='w-full h-16'
                        style={{
                            borderRadius: '0 100px 100px 100px'
                        }}
                        src={image}
                        alt=""
                    />
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>{name} ____________</p>
                    <p>{recipe}</p>
                </div>
                <div>
                    <p className='text-yellow-600'> $ {price}</p>
                </div>
            </div>

        </div>
    );
};

export default RecipeSingle;