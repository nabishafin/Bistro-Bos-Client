import React from 'react';
import HeadingTitle from '../shared/HeadingTitle';
import { axiosSecure } from '../hooks/useAxiosSecure';
import { data } from 'react-router-dom';
import toast from 'react-hot-toast';


const AddItems = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const { name, category, price, details, image } = event.target;
        const iteminfo = {
            name: name.value,
            recipe: details.value,
            image: image.value,
            category: category.value,
            price: price.value,
        };

        try {
            const result = await axiosSecure.post('/menus', iteminfo);
            toast.success('Item Added');
            event.target.reset(); // Reset the form after successful submission
        } catch (error) {
            toast.error('Failed to add item');
            console.error('Error:', error);
        }
    };

    return (
        <div className=''>
            <div>
                <HeadingTitle
                    heading={'Whats new?'}
                    subheading={'ADD AN ITEM'}
                ></HeadingTitle>
            </div>
            <div className='p-0  md:p-4 border-2 rounded-lg'>
                <div className="container mx-auto p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700">
                                Recipe Name*
                            </label>
                            <input
                                type="text"
                                id="recipeName"
                                name='name'
                                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category*
                            </label>
                            <select
                                name='category'
                                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option >salad</option>
                                <option >dessert</option>
                                <option >drinks</option>
                                <option >pizza</option>
                                <option >soup</option>
                                <option >offered</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price*
                            </label>
                            <input
                                type="number"
                                name='price'
                                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="recipeDetails" className="block text-sm font-medium text-gray-700">
                                Recipe Details*
                            </label>
                            <textarea
                                name='details'
                                rows={4}
                                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Choose image Url
                            </label>
                            <input
                                type="text"
                                name='image'
                                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Item <span className="material-icons">restaurant</span>
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddItems;