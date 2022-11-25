import React from 'react';
import "./Category.css";

const Category = ({name, logo, totalProduct}) => {

    return (
        <div className='single-category flex flex-col justify-between items-center p-3'>
            <div className="single-category-img">
                <img src={logo} alt="" />
            </div>
            <div className="single-category-text">
                <h2 className="single-category-name font-bold text-lg">{name}</h2>
                <p className="total-items text-md">{totalProduct} items</p>
            </div>
        </div>
    );
};

export default Category;