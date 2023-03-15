import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import Loading from '../../SharedPage/Loading/Loading';
import Product from '../Product/Product';

const AdvertiseProduct = () => {
    const [bookingModalData, setBookingModalData] = useState(null);
    const { data: product = [], refetch, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/product-advertise`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          });
          const data = await res.json();
          return data;
        },
      });
      if(isLoading){
        return <Loading></Loading>
      }
    return (
        <div className='container mx-auto py-10'>
        <h2 className='font-bold text-3xl py-5'>Advertise Product</h2>
     <div className="grid gap-5 mx-0 grid-cols-1 px-5 md:grid-cols-2 lg:px-0 lg:grid-cols-3 xl:grid-cols-4">
         {
            product?.data?.map((product)=>
            <Product key={product._id} product={product}  setBookingModalData={setBookingModalData}></Product>
             )
         }
     </div>
    {
      bookingModalData && 
      <BookingModal
      bookingModalData={bookingModalData}
      setBookingModalData={setBookingModalData}
      ></BookingModal>
    }
 </div>
    );
};

export default AdvertiseProduct;