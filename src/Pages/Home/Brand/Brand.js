import React from 'react';
import { Link } from 'react-router-dom';
import "./Brand.css";
import Asus from "../../../assets/brand/asus.png";
import Dell from "../../../assets/brand/dell.png";
import Hp from "../../../assets/brand/hp.png";

const Brand = () => {
    return (
        <>
        <div className='brand flex justify-between items-center p-6'>
            <div className="brand-text">
                <h2 className='mb-5'>Dell is a multinational tech company that develops, sells, repairs, and supports computers</h2>
                <Link to="brand/Dell"><button className="">Shop Now</button></Link>
            </div>
            <div className="brand-img">
                <img src={Dell} alt="" />
            </div>
        </div>
        <div className='brand flex justify-between items-center p-6'>
            <div className="brand-text">
                <h2 className='mb-5'>ASUS is the world's No. 1 motherboard and gaming brand as well as a top-three consumer notebook vendor.</h2>
                <Link to="brand/Asus"><button className="">Shop Now</button></Link>
            </div>
            <div className="brand-img">
                <img src={Asus} alt="" />
            </div>
        </div>
        <div className='brand flex justify-between items-center p-6'>
            <div className="brand-text">
                <h2 className='mb-5'>HP Inc. is an information technology company best known for its personal computers and printers.</h2>
                <Link to="brand/Hp"><button className="">Shop Now</button></Link>
            </div>
            <div className="brand-img">
                <img src={Hp} alt="" />
            </div>
        </div>
        </>
    );
};

export default Brand;