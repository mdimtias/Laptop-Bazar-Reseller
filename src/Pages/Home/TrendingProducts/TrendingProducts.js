import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Product from '../Product/Product';

const TrendingProducts = () => {
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
    return (
        <section className="trending-products">
            <div className="container mx-auto">
                <div className="trending-product-header">
                    <h2 className='font-bold text-3xl py-8'>Trending Product</h2>
                </div>
                <div className="grid gap-5 mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    products?.data?.slice(19, 27).map(product=><Product key={product._id} product={product}></Product>)
                }
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;