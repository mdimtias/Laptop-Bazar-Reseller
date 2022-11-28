import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const { data: orders = [], refetch } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:8000/orders/${user?.email}`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          });
          const data = await res.json();
          return data;
        },
      });
      console.log(orders);
    return (
        <div>
        <h2 className="text-3xl mb-5">My Orders</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SN</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {orders?.data?.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td><img src={order?.image} alt="" className='w-[75px]' /></td>
                  <td>{order?.product_name}</td>
                  <td>{order?.price}</td>
                  <td>Pay</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyOrders;