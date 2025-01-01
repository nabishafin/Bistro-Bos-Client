import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../shared/PageBanner';
import menubg from '../assets/menu/banner3.jpg'
import UseMenu from '../hooks/UseMenu';
import MenuCategory from '../components/MenuCategory';
import dessertbg from '../assets/menu/dessert-bg.jpeg'
import pizzabg from '../assets/menu/pizza-bg.jpg'
import saladbg from '../assets/menu/salad-bg.jpg'
import soupsbg from '../assets/menu/soup-bg.jpg'
import HeadingTitle from '../shared/HeadingTitle';
const Menu = () => {
    const [menus] = UseMenu()

    const desserts = menus.filter(item => item.category === 'dessert')
    const salads = menus.filter(item => item.category === 'salad')
    const drinks = menus.filter(item => item.category === 'drinks')
    const pizzas = menus.filter(item => item.category === 'pizza')
    const soups = menus.filter(item => item.category === 'soup')
    const offered = menus.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro-Boss || Menu</title>
            </Helmet>
            <div>
                <PageBanner
                    img={menubg}
                    title={'OUR MENU'}
                    subtitle={'Would you like to try a dish?'}
                >
                </PageBanner>
                <HeadingTitle
                    subheading={"Don't miss"}
                    heading={"TODAY'S OFFER"}
                ></HeadingTitle>
                <MenuCategory
                    items={offered}
                    loca={'offered'}
                ></MenuCategory>
                <div className='my-10'>
                    <PageBanner
                        img={dessertbg}
                        title={'DESSERTS'}
                        subtitle={'A light, fluffy biscuit base topped with freshly whipped cream, sweetened strawberries, and a dusting of powdered sugar.'}
                    >
                    </PageBanner>
                </div>
                <MenuCategory
                    items={desserts}
                    loca={'dessert'}
                ></MenuCategory>
                <div className='my-10'>
                    <PageBanner
                        img={pizzabg}
                        title={'PIZZA'}
                        subtitle={'A classic Italian pizza topped with a simple yet flavorful combination of fresh tomato sauce, mozzarella cheese, and fresh basil.'}
                    >
                    </PageBanner>
                </div>
                <MenuCategory
                    items={pizzas}
                    loca={'pizza'}
                ></MenuCategory>
                <div className='my-10'>
                    <PageBanner
                        img={saladbg}
                        title={'SALADS'}
                        subtitle={'A classic and popular salad made with romaine lettuce, croutons, and parmesan cheese, all tossed in a creamy Caesar dressing.'}
                    >
                    </PageBanner>
                </div>
                <MenuCategory
                    items={salads}
                    loca='salad'
                ></MenuCategory>
                <div className='my-10'>
                    <PageBanner
                        img={soupsbg}
                        title={'SOUPS'}
                        subtitle={'A comforting and velvety smooth soup made from pureed tomatoes, often simmered with onions, garlic, and herbs like basil and oregano.'}
                    >
                    </PageBanner>
                </div>
                <MenuCategory
                    items={soups}
                    loca='soup'
                ></MenuCategory>

                <div className='my-10'>
                    <PageBanner
                        img={soupsbg}
                        title={'DRINKS'}
                        subtitle={'A comforting and velvety smooth Drinks made from pureed tomatoes, often simmered with onions, garlic, and herbs like basil and oregano.'}
                    >
                    </PageBanner>
                </div>
                <MenuCategory
                    items={drinks}
                    loca='drinks'
                ></MenuCategory>

            </div>
        </div >
    );
};

export default Menu;