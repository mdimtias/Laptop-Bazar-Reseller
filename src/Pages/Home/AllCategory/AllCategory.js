import React from 'react';
import Category from '../Category/Category';

const AllCategory = () => {
    return (
        <div className='container mx-auto py-10'>
           <div className="all-category">
             <div>
             <h2 className='text-3xl font-bold py-5 text-left'>Popular Category</h2>
             </div>
             <div className="grid gap-2 mx-0 grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
            </div>
        </div>
        </div>
    );
};
export default AllCategory;