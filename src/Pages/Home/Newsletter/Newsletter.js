import React from 'react';
import { Link } from 'react-router-dom';
import "./Newsletter.css";

const Newsletter = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 py-5 newsletter">
                <div className="subscribe">
                    <h2 className="font-bold text-green-400  text-3xl mb-3">Stay home & get your daily <br />needs from our shop</h2>
                    <p className="text-gray-400 text-xl mb-4">Start You'r Daily Shopping with <Link to="/">Second-hand Laptop</Link></p>
                    <input type="text" placeholder="Enter Your Email Address" className="input input-bordered input-accent w-full max-w-xs" />
                    <button className="btn btn-secondary mt-3">Subscribe</button>
                </div>
                <div className="subscribe-img">
                    <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08186082.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;