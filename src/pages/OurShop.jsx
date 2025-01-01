import React, { useState } from 'react';
import PageBanner from '../shared/PageBanner';
import shopbg from '../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import UseMenu from '../hooks/UseMenu';
import ItemMap from '../shared/ItemMap';
import { useParams } from 'react-router-dom';

const OurShop = () => {

    const { category } = useParams();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks',]
    const indexCategory = categories.indexOf(category)


    const [tabIndex, setTabIndex] = useState(indexCategory)

    const [menus] = UseMenu()

    const desserts = menus.filter(item => item.category === 'dessert')
    const salads = menus.filter(item => item.category === 'salad')
    const drinks = menus.filter(item => item.category === 'drinks')
    const pizzas = menus.filter(item => item.category === 'pizza')
    const soups = menus.filter(item => item.category === 'soup')



    return (
        <div>
            <div>
                <Helmet>
                    <title>Bistro-Boss || Our Shop</title>
                </Helmet>
            </div>
            <PageBanner
                img={shopbg}
                title={'OUR SHOP'}
                subtitle={'Would you like to try a dish?'}
            ></PageBanner>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center my-8 font-bold">
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <ItemMap
                            items={salads}
                        >
                        </ItemMap>
                    </TabPanel>
                    <TabPanel>
                        <ItemMap
                            items={pizzas}
                        >
                        </ItemMap>
                    </TabPanel>
                    <TabPanel>
                        <ItemMap
                            items={soups}
                        >
                        </ItemMap>
                    </TabPanel>
                    <TabPanel>
                        <ItemMap
                            items={desserts}
                        >
                        </ItemMap>
                    </TabPanel>
                    <TabPanel>
                        <ItemMap
                            items={drinks}
                        >
                        </ItemMap>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;