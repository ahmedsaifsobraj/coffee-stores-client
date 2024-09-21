import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers]=useState(loadedUsers);

    const handleDelete = id =>{
        fetch(`https://coffee-store-server-phi-red.vercel.app/user/${id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert("User Removed Successfully");
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
            }
        })

    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Logged At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr key={user._id}>
                            <th>1</th>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user?.lastLoggedAt}</td>
                            <td><button onClick={()=>handleDelete(user._id)} className='btn btn-warning'>Remove</button></td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Users;
