import React from "react";
import { Link } from "react-router-dom";
import './Slider.css'
const Slider = () => {
  return (
    <div className="carousel w-full slider-shadow">
    <div id="slide1" className="carousel-item relative w-full">
      <div className="carousel-img w-full">
          <img src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__340.jpg" className="w-full" alt="home" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 top-1/2">
          <h1 className='text-5xl text-left ml-20 lg:text-6xl font-bold text-white'>
          Product reviews for  <br />
          the customer<br />
          </h1>
          <p className='text-xl text-left ml-20 text-white pt-6 w-9/12'>Collect reviews and feedback from your customers. Use it in your sales and marketing</p>
         <div className="text-left ml-20"> <button className="btn btn-primary mt-5">Read More</button></div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-1 sm:left-5 right-1 sm:right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
    <div className="carousel-img w-full">
          <img src="https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851__340.jpg" className="w-full" alt="home" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 top-1/2">
          <h1 className='text-5xl text-left ml-20 lg:text-6xl font-bold text-white'>
          Product reviews for  <br />
          the customer<br />
          </h1>
          <p className='text-xl text-left ml-20 text-white pt-6 w-9/12'>Collect reviews and feedback from your customers. Use it in your sales and marketing</p>
         <div className="text-left ml-20"> <button className="btn btn-primary mt-5">Read More</button></div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
    <div className="carousel-img w-full">
          <img src="https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847__340.jpg" className="w-full" alt="home" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 top-1/2">
          <h1 className='text-5xl text-left ml-20 lg:text-6xl font-bold text-white'>
          Product reviews for  <br />
          the customer<br />
          </h1>
          <p className='text-xl text-left ml-20 text-white pt-6 w-9/12'>Collect reviews and feedback from your customers. Use it in your sales and marketing</p>
         <div className="text-left ml-20"> <button className="btn btn-primary mt-5">Read More</button></div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
    <div className="carousel-img w-full">
          <img src="https://cdn.pixabay.com/photo/2018/03/10/18/03/laptop-3214756__340.png" className="w-full" alt="home" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 top-1/2">
          <h1 className='text-5xl text-left ml-20 lg:text-6xl font-bold text-white'>
          Product reviews for  <br />
          the customer<br />
          </h1>
          <p className='text-xl text-left ml-20 text-white pt-6 w-9/12'>Collect reviews and feedback from your customers. Use it in your sales and marketing</p>
         <div className="text-left ml-20"> <button className="btn btn-primary mt-5">Read More</button></div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  );
};

export default Slider;


{/* <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className="w-full"
          alt="slider"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide4" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide2" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className="w-full"
          alt="slider"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide1" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide3" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className="w-full"
          alt="slider"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide2" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide4" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className="w-full"
          alt="slider"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide3" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide1" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
    </div> */}