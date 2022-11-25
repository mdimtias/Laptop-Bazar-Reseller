import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey = process.env.REACT_APP_IMGBB_API_KEY;

    const navigate = useNavigate();
    
    const { data: specialties=[] } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty', {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor =(data)=>{

        const image = data.image[0];
        console.log(image)
        const formData = new FormData();
        formData.append("image", image)
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: "POST",
            body: formData
        })
        .then(res=>res.json())
        .then(imageData =>{ 
            if(imageData.success){
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imageData.data.url
                }
                // Save Doctor Data
                fetch("http://localhost:5000/doctors", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: localStorage.getItem("token")
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(data=>{
                    toast.success(`${doctor.name} doctor Added successfully`)
                    console.log(data)
                    navigate("/dashboard/managedoctors")
                })
            }
        })
    }
    return (
        <div className='w-96 p-7'>
        <h2 className="text-4xl">Add A Doctor</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Name</span></label>
                <input type="text" {...register("name", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Email</span></label>
                <input type="email" {...register("email", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Category</span></label>
                <select 
                {...register('specialty')}
                className="select input-bordered w-full max-w-xs">
                    {
                        specialties.map((specialty, i) => <option
                            key={i}
                            value={specialty.name}
                        >{specialty.name}</option>)
                    }
                    
                    
                </select>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Photo</span></label>
                <input type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            </div>
            <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;