import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCards = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-phi-red.vercel.app/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Coffee has been deleted.",
                                icon: "success"
                            })
                            const remaining = coffees.filter(cof => cof.id !== _id);
                            setCoffees(remaining);
                        }

                    })

            }
        });
    }
    return (
        <div className="card card-side  shadow-xl p-2 ">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className=" w-full flex justify-between">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Supplier: {supplier}</p>
                    <p>Available Quantity: {quantity}</p>
                </div>
                <div className="card-actions justify-end pr-3">
                    <div className="join join-vertical gap-4">
                        <button className="btn join-item">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item bg-orange-600 ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoffeeCards;
