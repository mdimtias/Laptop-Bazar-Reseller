import React from 'react';
import {Link} from "react-router-dom";
import "./Category.css";

const CategoryItem = ({name, logo, totalProduct, id}) => {
    return (
       
         <div className='single-category flex flex-col justify-between items-center p-3'>
            <Link to={`category/${id}`}>
            <div className="single-category-img">
                <img src={logo} alt="" />
            </div>
            <div className="single-category-text">
                <h2 className="single-category-name font-bold text-lg">{name}</h2>
                <p className="total-items text-md">{totalProduct} items</p>
            </div>
            
       </Link>
        </div>
    );
};

export default CategoryItem;