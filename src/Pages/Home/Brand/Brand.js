import React from 'react';
import "./Brand.css";

const Brand = () => {
    return (
        <div className='brand flex justify-between items-center p-6'>
            <div className="brand-text">
                <h2 className='mb-5'>Everyday Fresh & Clean with Our Products</h2>
                <button className="">Shop Now</button>
            </div>
            <div className="brand-img">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07877568.png" alt="" />
            </div>
        </div>
    );
};

export default Brand;