import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import Product from '../Product/Product';

const AllProducts = () => {
    
    return (
        <div className='container mx-auto py-10'>
           <div className="category flex justify-between items-center">
             <h2 className='text-3xl font-bold py-5 text-left'>Popular Products</h2>
             <div className="all-category">
                <ul className='flex gap-2 flex-wrap'>
                    <li><button>Laptop</button></li>
                    <li><button>Gaming Laptops</button></li>
                    <li><button>PC Gadgets</button></li>
                    <li><button>Ram</button></li>
                    <li><button>Laptop Stands</button></li>
                    <li><button>Smart Televisions</button></li>
                    <li><button>Laptop Batteries</button></li>
                    <li><button>MSI</button></li>
                </ul>
             </div>
           </div>
            <div className="grid gap-5 mx-0 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
            {/* {bookingModalData &&  */}
           
       
        </div>
    );
};

export default AllProducts;