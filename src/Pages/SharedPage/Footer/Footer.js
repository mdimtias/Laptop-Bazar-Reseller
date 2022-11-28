import React from "react";
import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";
import Logo from "./../../../assets/Logo/logo.png"
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <p>
            Company Industries Ltd.
            <br />
            Providing reliable tech product
          </p>
          <img src={Logo} alt="" />
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
        <div className="text-center">
          <div className="p-6">
            <div className="">
              <p className="flex justify-center items-center">
                <span className="mr-4">Register for free</span>

                <Link to="/signup">
                  <button
                    type="button"
                    className="inline-block px-6 py-2 border-2 border-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center p-4 bg-black text-white">
        © 2021 Copyright: <Link to="/">Second Hand Laptop</Link>
      </div>
    </>
  );
};

export default Footer;
