import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Product.css";

const Product = ({ product, setBookingModalData }) => {
  const {user} = useContext(AuthContext);

  const handleWishlist = async (e)=>{
    e.preventDefault();
    const wishlistProduct = {...product, wishlistEmail: user?.email};

    const res = await fetch(`http://localhost:8000/wishlist/${product?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(wishlistProduct)
      });
      const data = await res.json();
      
      if(data.data.upsertedCount>0){
        toast.success("Add Wishlist successful")
        return 
      }

      if(data.success === false){
        toast.success("This product already exist wishlist")
        return 
      }
  }
  

  // Handle Report 
  const handleReport = async (e)=>{
    e.preventDefault();
    const wishlistProduct = {...product, reportedEmail: user?.email, reportCount: 1};

    const res = await fetch(`http://localhost:8000/reportedProduct/${product?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(wishlistProduct)
      });
      const data = await res.json();
      
      if(data.data.upsertedCount>0){
        toast.success("Add Report successful")
        return 
      }

      if(data.success === false){
        toast.success("Add Report successful")
        return 
      }
  }

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
          <span>{product?.years_of_use} Years Of Use</span>
          <h3>{product?.location}</h3>
        </div>
        <div className="seller-info flex justify-between">
          <h3>{product?.seller}</h3>
          <div className="post_date_time">
          <p>{product?.posted_date} {product?.posted_time} </p>
          </div>
        </div>
        <div className="product-card-bottom flex justify-between">
          <div className="product-price">
            <span className="regular-price">$ {product?.regular_price}</span>
            <span className="old-price">$ {product?.sale_price}</span>
          </div>
          <div className="add-card">
            <label
             className="add"
             onClick={handleWishlist}
            >
             Add Wishlist
            </label>
            <label
             className="add"
             onClick={handleReport}
            >
             Report
            </label>
          </div>
        </div>
        <div className="add-card">
            <label
             htmlFor="booking-modal"
             className="add"
             onClick={() => setBookingModalData(product)}
            >
             Book Now
            </label>
          </div>
      </div>
    </div>
  );
};

export default Product;
