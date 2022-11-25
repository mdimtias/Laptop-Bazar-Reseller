import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img className='p-3' src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07877568.png" alt="Shoes" /></figure>
        <div className="card-body p-3 mb-3">
         <div className="product-category">
            <Link to="" className='text-left'>Category</Link>
         </div>
         <div className="product-title">
            <h2 className="font-bold">
            Victus Gaming Laptop 15-fa0747nr
            </h2>
         </div>
         <div className="rating">
            <span className='flex'>
                <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt=""/>
                <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt=""/>
                <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt=""/>
                <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt=""/>
                <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt=""/>
            </span>
         </div>
         <div className="product-by flex text-left gap-1">
            <span>By</span>
            <Link to="">Hp</Link>
         </div>
          <div className="product-card-bottom flex justify-between">
            <div className="product-price">
                <span className="regular-price">$50</span>
                <span className="old-price">$60</span>
            </div>
            <div className="add-card">
                <Link to="/" className="add">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;