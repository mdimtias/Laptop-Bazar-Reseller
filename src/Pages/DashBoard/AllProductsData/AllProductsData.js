import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const AllProductsData = () => {
  useTitle("All Products")
  const { data: products = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/products", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      return data;
    },
  });
  const handleDeleteProduct = (product)=>{
        fetch(`http://localhost:8000/products/${product._id}`, {
            method: "DELETE",
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success(`Successfully Delete ${product.name} Product`)
                refetch();
            }
        })
        .catch(error=>{
            console.log(error);
            toast.error("Data Delete Fail");
        })
  }
  return (
    <div className="grid grid-cols-1">
        <div>
      <h2 className="text-3xl mb-5">All Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.data?.map((product, i) => (
              <tr key={product._id}>
                <th>{i+1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={product.image} alt=""/>
                    </div>
                  </div>
                </th>
                <td>{product?.name}</td>
                <td>
                  <button className="btn btn-xs btn-danger" onClick={()=>handleDeleteProduct(product)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default AllProductsData;
