import React from "react";
import { Link } from "react-router-dom";
import Payment from "./../../../assets/footer/payment.png";
import PlayStore from "./../../../assets/footer/google-play.jpg";
import AppStore from "./../../../assets/footer/app-store.jpg";
const Footer = () => {
  return (
    <>
      <footer className="footer-section bg-black">
        <div className="container mx-auto lg:px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 py-8">
            <div className="contact-details">
              <div className="brand-text pb-4">
                <h2 className="text-white text-xl text-left">Laptop Bazar</h2>
              </div>
              <div className="contact-in">
                <div className="phone flex gap-5 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#e5e5e5]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <p className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left">
                    (+612) 2531 5600
                  </p>
                </div>
                <div className="email flex gap-5 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#e5e5e5]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <p className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left">
                    name@domain.com
                  </p>
                </div>
                <div className="email flex gap-5 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-[#e5e5e5]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    ></path>
                  </svg>
                  <p className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left">
                    1579 Freedom, New York United States
                  </p>
                </div>
                <div className="email flex gap-5 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#e5e5e5]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left">
                    Opening Hours : 8.00AM - 21.00AM
                  </p>
                </div>
              </div>
              <div className="social-media flex gap-5"></div>
            </div>
            <div className="our-products">
              <div className="our-product-title pb-4">
                <h2 className="text-white text-xl text-left">Products</h2>
              </div>
              <div className="product-list">
                <ul className="text-left">
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Best Sales
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium text-"
                    >
                      Top Product
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Trending Product
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Special Product
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Featured Product
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      New Product
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-company">
              <div className="our-company-title pb-4">
                <h2 className="text-white text-xl text-left">Our Company</h2>
              </div>
              <div className="company-list">
                <ul className="text-left">
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium text-"
                    >
                      Sitemap
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      My Account
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Our Shop
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Partners
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Investors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="customer-service">
              <div className="customer-service-title pb-4">
                <h2 className="text-white text-xl text-left">
                  CUSTOMER SERVICE
                </h2>
              </div>
              <div className="customer-service-list">
                <ul className="text-left">
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Live Chat
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium text-"
                    >
                      Help and advice
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Shipping & Returns
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Terms and conditions
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="download-our-apps">
              <div className="download-apps-title mb-2">
                <h2 className="text-xl text-white text-left">
                  Download Our App
                </h2>
              </div>
              <div className="download-app-text">
                <p className="text-white text-medium mb-2 text-left">
                  Download our App and get extra 15% Discount on your first
                  Order..!
                </p>
              </div>
              <div className="download-link flex gap-5 items-center justify-center pt-5">
                <Link to="/">
                  <img src={AppStore} alt="App Store" />
                </Link>
                <Link to="/">
                  <img src={PlayStore} alt="App Store" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-section bg-black">
        <div className="container mx-auto">
          <div className="p-4 text-white flex justify-between items-center">
            <p>
              &#169; 2023 Copyright{" "}
              <Link to="/" className="font-bold text-green-400">
                Laptop Bazar
              </Link>{" "}
              All Rights Reserved
            </p>
            <img src={Payment} alt="Payment" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
