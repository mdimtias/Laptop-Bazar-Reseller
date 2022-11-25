import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from '../Category/Category';

const AllCategory = () => {
   

    const { data: categories=[] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/category', {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const { data: products=[] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/products', {
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
           <div className="all-category">
             <div>
             <h2 className='text-3xl font-bold py-5 text-left'>Popular Category</h2>
             </div>
             <div className="grid gap-2 mx-0 grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
             {
                 categories?.data?.map(category=>{
                    const lengthPd = products?.data?.filter(pd=>pd.categoryName === category.name)
                    const productLength = lengthPd?.length;
                        return <Category name={category.name} logo={category.logo} key={category._id} totalProduct={productLength}></Category>
                    })
                }
            </div>
        </div>
        </div>
    );
};
export default AllCategory;