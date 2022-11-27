import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";
import "./Product.css";

const Product = ({ product, setBookingModalData }) => {
  
  
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="p-3" src={product?.image} alt="Shoes" />
      </figure>
      <div className="card-body p-3 mb-3">
        <div className="product-category">
          <Link to="" className="text-left">
            {" "}
            {product?.categoryName}
          </Link>
        </div>
        <div className="product-title">
          <h2 className="font-bold">{product?.product_name}</h2>
        </div>
        <div className="rating">
          <span className="flex">
            <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt="" />
            <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt="" />
            <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt="" />
            <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt="" />
            <img src="https://img.icons8.com/emoji/512/star-emoji.png" alt="" />
          </span>
        </div>
        <div className="product-by flex text-left gap-1">
          <span>By</span>
          <Link to=""> {product?.brand}</Link>
        </div>
        <div className="use_and_location flex justify-between">
          <span>{product?.years_of_use} Years Use</span>
          <h3>{product?.location}</h3>
        </div>
        <div className="product-card-bottom flex justify-between">
          <div className="product-price">
            <span className="regular-price">$ {product?.regular_price}</span>
            <span className="old-price">$ {product?.sale_price}</span>
          </div>
          <div className="add-card">
            {/* <Link to="/" className="add" htmlFor="booking-modal">Buy Now</Link> */}
            <label
             htmlFor="booking-modal"
             className="add"
             onClick={() => setBookingModalData(product)}
            >
              open modal
            </label>
          </div>
          {/* {bookingModalData && <BookingModal
          product={bookingModalData}
          ></BookingModal>} */}
        </div>
      </div>
    </div>
  );
};

export default Product;
