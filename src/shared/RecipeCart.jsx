import React from 'react';
import { motion } from 'framer-motion';

const RecipeCart = ({ item }) => {

    return (
        <div className="card-container">
            <motion.div
                className="card rounded-none glass h-[400px] w-[290px]" // Fixed height and width for the card
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 80,
                    damping: 25,
                }}
            >
                <figure className="relative">
                    <motion.img
                        className="w-full h-[200px] object-cover" // Fixed height and width for the image
                        src={item.image}
                        alt="car!"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            stiffness: 120,
                            damping: 25,
                        }}
                    />

                    {/* Price overlay */}
                    <motion.div
                        className="absolute bottom-4 left-4 bg-black text-white font-bold text-xl px-2 py-1 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.7,
                            ease: "easeOut",
                        }}
                    >
                        ${item.price}
                    </motion.div>
                </figure>

                <div className="card-body bg-[#F3F3F3] h-[200px] "> {/* Fixed height for the body */}
                    <motion.h2
                        className="text-center font-bold text-2xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        <p className='text-xl'> {item.name}</p>
                    </motion.h2>
                    <motion.p
                        className="text-center  text-ellipsis line-clamp-3"  // Slice text after 3 lines
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeInOut",
                        }}
                    >
                        <p className='text-sm'>{item.recipe.slice(0, 50)} ...</p>
                    </motion.p>

                    <div className="card-actions justify-center ">
                        <motion.button
                            className="rounded-sm bg-[#E8E8E8] text-[#BB8506] p-2 hover:bg-[#1F2937]"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95, rotate: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            ADD TO CART
                        </motion.button>
                    </div>
                </div>
            </motion.div>


        </div>

    );
};

export default RecipeCart;