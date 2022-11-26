import React from 'react';
import Slider from '../Slider/Slider';
import AllProducts from '../AllProducts/AllProducts';
import Brands from '../Brands/Brands';
import Newsletter from '../Newsletter/Newsletter';
import AllCategory from '../AllCategory/AllCategory';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle("Home")
    return (
        <>
            <Slider></Slider>
            <AllCategory></AllCategory>
            <AllProducts></AllProducts>
            <Brands></Brands>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;