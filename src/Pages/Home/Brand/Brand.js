import React from 'react';
import { Link } from 'react-router-dom';
import "./Brand.css";

const Brand = () => {
    return (
        <>
        <div className='brand flex justify-between items-center p-6'>
            <div className="brand-text">
                <h2 className='mb-5'>Dell is a multinational tech company that develops, sells, repairs, and supports computers</h2>
                <Link to="brand/Dell"><button className="">Shop Now</button></Link>
            </div>
            <div className="brand-img">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07877568.png" alt="" />
            </div>
        </div>
        <div className='brand flex justify-between items-center p-6'>
            <div className="brand-text">
                <h2 className='mb-5'>ASUS is the world's No. 1 motherboard and gaming brand as well as a top-three consumer notebook vendor.</h2>
                <Link to="brand/Asus"><button className="">Shop Now</button></Link>
            </div>
            <div className="brand-img">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07877568.png" alt="" />
            </div>
        </div>
        <div className='brand flex justify-between items-center p-6'>
            <div className="brand-text">
                <h2 className='mb-5'>HP Inc. is an information technology company best known for its personal computers and printers.</h2>
                <Link to="brand/Hp"><button className="">Shop Now</button></Link>
            </div>
            <div className="brand-img">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07877568.png" alt="" />
            </div>
        </div>
        </>
    );
};

export default Brand;