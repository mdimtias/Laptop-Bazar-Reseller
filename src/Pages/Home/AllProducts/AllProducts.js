import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import Product from '../Product/Product';

const AllProducts = () => {
    const { data: products=[] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const { data: categories=[] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='container mx-auto py-10'>
           <div className="category flex justify-between items-center">
             <h2 className='text-3xl font-bold py-5 text-left'>Popular Products</h2>
             <div className="all-category">
                <ul className='flex gap-2 flex-wrap'>
                {
                 categories?.data?.map(category=>{
                       return <Link key={category._id} to={`category/${category.id}`}> <li><button>{category.name}</button></li></Link>
                    })
                }
                </ul>
             </div>
           </div>
            <div className="grid gap-5 mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    products?.data?.slice(0, 24).map(product=><Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;