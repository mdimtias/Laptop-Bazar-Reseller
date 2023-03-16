import React from 'react';
import Slider from '../Slider/Slider';
import AllProducts from '../AllProducts/AllProducts';
import Brands from '../Brands/Brands';
import Newsletter from '../Newsletter/Newsletter';
import AllCategory from '../AllCategory/AllCategory';
import useTitle from '../../../hooks/useTitle';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import LowBudgetLaptop from '../LowBudgetLaptop/LowBudgetLaptop';
import CustomerReview from '../CustomerReview/CustomerReview';
import TrendingProducts from '../TrendingProducts/TrendingProducts';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    useTitle("Home")
    return (
        <>
            <Slider></Slider>
            <ContactUs></ContactUs>
            <TrendingProducts></TrendingProducts>
            <CustomerReview></CustomerReview>
            <LowBudgetLaptop></LowBudgetLaptop>
            <AllCategory></AllCategory>
            <AdvertiseProduct></AdvertiseProduct>
            <AllProducts></AllProducts>
            <Brands></Brands>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;