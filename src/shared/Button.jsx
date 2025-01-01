import React from 'react';

const Button = ({ text }) => {
    return (
        <div>
            <button className='text-center border-b-2 p-2 rounded-lg border-black hover:bg-black hover:text-white hover:border-black'> {text} </button>
        </div>
    );
};

export default Button;