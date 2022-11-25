import React from 'react';
import "./Category.css";

const Category = () => {
    return (
        <div className='single-category flex flex-col justify-between items-center p-3'>
            <div className="single-category-img">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07986341.png" alt="" />
            </div>
            <div className="single-category-text">
                <h2 className="single-category-name font-bold text-lg">Laptop</h2>
                <p className="total-items text-md">25 items</p>
            </div>
        </div>
    );
};

export default Category;