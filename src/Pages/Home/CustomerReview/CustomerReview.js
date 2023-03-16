import React from "react";
import Star from "../../../assets/star/star.png";
import ImageOne from "../../../assets/Profile/icon.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./CustomerReview.css";
// import required modules
import {Autoplay, FreeMode, Pagination } from "swiper";

const CustomerReview = () => {
  return (
    <section className="customer-review-section bg-[#F8F9FA] py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 justify-center items-center">
       
          <div className="review-heading">
            <h2 className="text-3xl font-bold text-black mb-5">
              What Our Customers Say About Us?
            </h2>
            <p className="text-xl text-black mb-7 text-center mx-10 lg:mx-48">
            Our customers have spoken, and they love our laptop reselling website! With a wide selection of high-quality laptops from all the top brands, our customers can find the perfect computer to meet their needs.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 justify-center items-center gap-8"> */}
        <Swiper
        slidesPerView={3}
        spaceBetween={28}
        freeMode={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        speed={1200}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        breakpoints={{
            200: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1060: {
              slidesPerView: 3,
            },
          }}
        className="mySwiper"
      >
         <SwiperSlide>
          <div className="customer-review bg-white p-5 rounded-xl">
            <div className="rating">
              <span className="flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </span>
            </div>
            <div className="review-text h-[360px] xl:h-[320px]">
              <h2 className="text-2xl font-bold text-black mb-5">
                Powerful Gaming Laptop with Impressive Graphics
              </h2>
              <p className="text-xl text-gray-500 text-left">
                If you're looking for a laptop that can handle intensive gaming,
                the ASUS ROG Strix Scar III is definitely worth considering.
                With its NVIDIA GeForce RTX 2070 graphics card and 9th Gen Intel
                Core i7 processor, this laptop delivers top-notch performance
                for even the most demanding games.
              </p>
            </div>
            <div className="review-user-info flex justify-between items-center">
               <div className="flex gap-1 items-center"> 
               <img src={ImageOne} className="w-16" alt="" />
              <h3 className="text-xl font-normal text-black">Md Tareq</h3>
               </div>
              <p className="text-md text-gray-500 text-left">3 days ago</p>
            </div>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className="customer-review bg-white p-5 rounded-xl">
            <div className="rating">
              <span className="flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </span>
            </div>
            <div className="review-text h-[360px] xl:h-[320px] xl:h-[320px]">
              <h2 className="text-2xl font-bold text-black mb-5">
              Sleek and Portable Laptop for Everyday Use
              </h2>
              <p className="text-xl text-gray-500 text-left">
              The Dell XPS 13 is a great choice if you're looking for a laptop that's lightweight, stylish, and has a long battery life. The 13.3-inch display features a resolution of 1920x1080, which delivers crisp and clear images. The laptop runs on an Intel Core i5 processor and has 8GB of RAM
              </p>
            </div>
            <div className="review-user-info flex justify-between items-center">
               <div className="flex gap-1 items-center"> 
               <img src={ImageOne} className="w-16" alt="" />
              <h3 className="text-xl font-normal text-black">Md Rohim Khan</h3>
               </div>
              <p className="text-md text-gray-500 text-left">5 days ago</p>
            </div>

          </div>
         </SwiperSlide>
          <SwiperSlide>
          <div className="customer-review bg-white p-5 rounded-xl">
            <div className="rating">
              <span className="flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </span>
            </div>
            <div className="review-text h-[360px] xl:h-[320px]">
              <h2 className="text-2xl font-bold text-black mb-5">
              Affordable Laptop for Students on a Budget
              </h2>
              <p className="text-xl text-gray-500 text-left">
              The Acer Aspire 5 is a great option for students who need a reliable laptop without breaking the bank. The 15.6-inch display features a resolution of 1920x1080, which is perfect for studying, browsing the web, or watching videos. The laptop runs on an AMD Ryzen 3 processor and has 4GB of RAM
              </p>
            </div>
            <div className="review-user-info flex justify-between items-center">
               <div className="flex gap-1 items-center"> 
               <img src={ImageOne} className="w-16" alt="" />
              <h3 className="text-xl font-normal text-black">Md Saidul</h3>
               </div>
              <p className="text-md text-gray-500 text-left">3 days ago</p>
            </div>
          </div>
         </SwiperSlide>
          <SwiperSlide>
          <div className="customer-review bg-white p-5 rounded-xl">
            <div className="rating">
              <span className="flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </span>
            </div>
            <div className="review-text h-[360px] xl:h-[320px]">
              <h2 className="text-2xl font-bold text-black mb-5">
              Versatile 2-in-1 Laptop for Work and Play
              </h2>
              <p className="text-xl text-gray-500 text-left">
              The Lenovo Yoga C940 is a versatile 2-in-1 laptop that can be used for both work and play. The 14-inch display features a resolution of 1920x1080 and can be rotated 360 degrees to transform the laptop into a tablet. The laptop runs on an Intel Core i7 processor and has 12GB of RAM
              </p>
            </div>
            <div className="review-user-info flex justify-between items-center">
               <div className="flex gap-1 items-center"> 
               <img src={ImageOne} className="w-16" alt="" />
              <h3 className="text-xl font-normal text-black">Md Karim</h3>
               </div>
              <p className="text-md text-gray-500 text-left">7 days ago</p>
            </div>
          </div>
         </SwiperSlide>
          <SwiperSlide>
          <div className="customer-review bg-white p-5 rounded-xl">
            <div className="rating">
              <span className="flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </span>
            </div>
            <div className="review-text h-[360px] xl:h-[320px]">
              <h2 className="text-2xl font-bold text-black mb-5">
              MacBook Pro: The Ultimate Laptop for Apple Fans
              </h2>
              <p className="text-xl text-gray-500 text-left">
              The MacBook Pro is a top-of-the-line laptop for Apple fans who need a powerful and reliable device for work or creative projects. The 13-inch display features a resolution of 2560x1600, which delivers stunning visuals. The laptop runs on an Apple M1 chip and has 8GB of RAM
              </p>
            </div>
            <div className="review-user-info flex justify-between items-center">
               <div className="flex gap-1 items-center"> 
               <img src={ImageOne} className="w-16" alt="" />
              <h3 className="text-xl font-normal text-black">Junayed khan</h3>
               </div>
              <p className="text-md text-gray-500 text-left">9 days ago</p>
            </div>
          </div>
         </SwiperSlide>
          <SwiperSlide>
          <div className="customer-review bg-white p-5 rounded-xl">
            <div className="rating">
              <span className="flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </span>
            </div>
            <div className="review-text h-[360px] xl:h-[320px]">
              <h2 className="text-2xl font-bold text-black mb-5">
              Budget-Friendly Chromebook for Simple Tasks
              </h2>
              <p className="text-xl text-gray-500 text-left">
              The HP Chromebook 14 is a budget-friendly laptop that's perfect for simple tasks like browsing the web, checking emails, or streaming videos. The 14-inch display features a resolution of 1366x768, which is adequate for basic use.
              </p>
            </div>
            <div className="review-user-info flex justify-between items-center">
               <div className="flex gap-1 items-center"> 
               <img src={ImageOne} className="w-16" alt="" />
              <h3 className="text-xl font-normal text-black">Rofiqul Islam</h3>
               </div>
              <p className="text-md text-gray-500 text-left">22 days ago</p>
            </div>
          </div>
         </SwiperSlide>
          <SwiperSlide>
          <div className="customer-review bg-white p-5 rounded-xl">
            <div className="rating">
              <span className="flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </span>
            </div>
            <div className="review-text h-[360px] xl:h-[320px]">
              <h2 className="text-2xl font-bold text-black mb-5">
              High-End Laptop with Stunning 4K Display
              </h2>
              <p className="text-xl text-gray-500 text-left">
              The Dell XPS 15 is a high-end laptop that's perfect for professionals who need a powerful device for video editing, graphic design, or other intensive tasks. The 15.6-inch 4K display features a resolution of 3840x2160, which delivers stunning visuals. 
              </p>
            </div>
            <div className="review-user-info flex justify-between items-center">
               <div className="flex gap-1 items-center"> 
               <img src={ImageOne} className="w-16" alt="" />
              <h3 className="text-xl font-normal text-black">Sadid Ahmed</h3>
               </div>
              <p className="text-md text-gray-500 text-left">13 days ago</p>
            </div>
          </div>
         </SwiperSlide>
          <SwiperSlide>
          <div className="customer-review bg-white p-5 rounded-xl">
            <div className="rating">
              <span className="flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </span>
            </div>
            <div className="review-text h-[360px] xl:h-[320px]">
              <h2 className="text-2xl font-bold text-black mb-5">
              Gaming Laptop with Advanced Cooling System
              </h2>
              <p className="text-xl text-gray-500 text-left">
              The MSI GE75 Raider is a gaming laptop that's perfect for gamers who need a device that can handle even the most demanding games. The 17.3-inch display features a resolution of 1920x1080 and has a refresh rate of 144Hz, which delivers smooth and clear visuals. 
              </p>
            </div>
            <div className="review-user-info flex justify-between items-center">
               <div className="flex gap-1 items-center"> 
               <img src={ImageOne} className="w-16" alt="" />
              <h3 className="text-xl font-normal text-black">Hasan Ali</h3>
               </div>
              <p className="text-md text-gray-500 text-left">
                10 days ago</p>
            </div>
          </div>
         </SwiperSlide>
          <SwiperSlide>
          <div className="customer-review bg-white p-5 rounded-xl">
            <div className="rating">
              <span className="flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </span>
            </div>
            <div className="review-text h-[360px] xl:h-[320px]">
              <h2 className="text-2xl font-bold text-black mb-5">
              Ultra-Thin Laptop with Impressive Battery Life
              </h2>
              <p className="text-xl text-gray-500 text-left">
              The LG Gram 14 is an ultra-thin laptop that's perfect for on-the-go use. The 14-inch display features a resolution of 1920x1080 and is housed in a slim and lightweight body. The laptop runs on an Intel Core i5 processor and has 8GB of RAM, which delivers solid performance for everyday use. 
              </p>
            </div>
            <div className="review-user-info flex justify-between items-center">
               <div className="flex gap-1 items-center"> 
               <img src={ImageOne} className="w-16" alt="" />
              <h3 className="text-xl font-normal text-black">Rashedul</h3>
               </div>
              <p className="text-md text-gray-500 text-left">3 days ago</p>
            </div>
          </div>
         </SwiperSlide>
            
          </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
};

export default CustomerReview;
