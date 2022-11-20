import React from 'react';
import { useForm } from "react-hook-form";

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleAddDoctor = data => {
        console.log(data);
    }
    return (
        <div className='w-96 p-10'>
            <h2 className='text-4xl'>Add a Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input {...register("name", {
                        required: "Name is required"

                    })} type="text" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input {...register("email", {
                        required: "Email Address is required"

                    })} type="email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>

                </div>
                <input className='mt-6 btn btn-accent w-full' value="Add Doctor" type="submit" />

                {/* {
                    signUpError &&
                    <p className='text-red-600'>{signUpError}</p>
                } */}
            </form>
        </div>
    );
};

export default AddDoctor;