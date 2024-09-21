import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleSubmit =event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee ={name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);

        fetch('https://coffee-store-server-phi-red.vercel.app/coffee',{
             method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'You have successfuly added an item.',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
    }
    return (
        <div className='p-24'>
            
            <h1 className='text-3xl font-extrabold text-purple-600 '>Add Coffee</h1>
            <form onSubmit={handleSubmit}>
                {/* form row 1*/}
                <div className='md:flex'>
                    <div className='md:w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text ">Name</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Name" name='name' className="input input-bordered w-full " /> 
                        </label>
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text ">Available Quantity</span>
                            </div>
                            <input type="text" placeholder="Enter Quantity" name='quantity' className="input input-bordered w-full  " /> 
                        </label>
                    </div>
                </div>
                {/* form row 2*/}
                <div className='md:flex'>
                    <div className='md:w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text ">Supplier</span>
                            </div>
                            <input type="text" placeholder="Enter Supplier Name" name='supplier' className="input input-bordered w-full  " /> 
                        </label>
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text ">Taste</span>
                            </div>
                            <input type="text" placeholder="Describe Taste" name='taste' className="input input-bordered w-full  " /> 
                        </label>
                    </div>
                </div>
                {/* form row 3*/}
                <div className='md:flex'>
                    <div className='md:w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text ">Category</span>
                            </div>
                            <input type="text" placeholder="Type Category" name='category' className="input input-bordered w-full  " /> 
                        </label>
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text ">Details</span>
                            </div>
                            <input type="text" placeholder="Enter Details" name='details' className="input input-bordered w-full  " /> 
                        </label>
                    </div>
                </div>
                {/* form row 4 */}
                <div className='w-full mb-8'>
                    <div className='w-full'>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text ">Photo URL</span>
                            </div>
                            <input type="text" placeholder="Enter Photo URL" name='photo' className="input input-bordered w-full  " /> 
                        </label>
                    </div>
                </div>

                <input type="submit" name="Add Coffee" className="btn w-full text-white font-bold" />
                
            </form>
        </div>
    );
}

export default AddCoffee;
