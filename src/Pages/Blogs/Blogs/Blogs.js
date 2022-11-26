import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Blog from '../Blog/Blog';
import "./Blogs.css";

const Blogs = () => {
    const { data: blogs=[], isLoading } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/blog', {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return
    }
    console.log(blogs)
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    blogs?.data?.map((blog)=>{
                        return(
                            <Blog key={blog._id} blog={blog}></Blog>
                        )
                    })
                }
                <Blog></Blog>
                <Blog></Blog>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Blogs;

