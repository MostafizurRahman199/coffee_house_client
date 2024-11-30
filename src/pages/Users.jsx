import { LuClipboardEdit } from "react-icons/lu";
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


    const deleteUser = (id)=>{



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
                fetch(`http://localhost:5000/users/${id}`,{
                    method:"DELETE",
                    headers:{
                        'content-type':'application/json'
                    },
        
                }).then(res => res.json())
                .then(data => {
                    if(data.success){
                        setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
                      
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });








      
    }

    return (
      <div className="min-h-screen w-10/12 mx-auto bg-white py-8 font_2">

        <h1 className='font_1 text-4xl text-center py-4 text-[#331A15]'>All Users</h1>
        
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-[#331A15]">
            {/* Head */}
            <thead>
              <tr className="border-b">
                <th className="text-center py-4 px-6">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className="text-center py-4 px-6">Name</th>
                <th className="text-center py-4 px-6">Email</th>
                <th className="text-center py-4 px-6">Profession</th>
                <th className="text-center py-4 px-6">Join Date</th>
                <th className="text-center py-4 px-6">Last Login</th>
                <th className="text-center py-4 px-6">Action</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {users?.map((user) => (
                <tr key={user?._id} className="border-b hover:bg-gray-100 transition">
                  <th className="text-center py-4 px-6">
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td className="text-center py-4 px-6">
                    <div className="flex items-center justify-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photoURL }
                            alt="Avatar"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-start">
                        <div className="font-bold">{user?.name || 'No Name Available'}</div>
                        <div className="text-sm text-gray-500">{user?.country || 'Country not specified'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">{user?.email || 'Not mentioned'}</td>
                  <td className="text-center py-4 px-6">{user?.profession || 'Not mentioned'}</td>
                  <td className="text-center py-4 px-6">{user?.createdAt || 'Not mentioned'}</td>
                  <td className="text-center py-4 px-6">{user?.lastSignInTime || 'Not mentioned'}</td>
                 
                  <td className="text-center py-4 px-6 ">
                    <div className="flex justify-center item-center gap-2">
                    <button onClick={()=>deleteUser(user._id)}  className="btn btn-circle hover:scale-110 transition-all text-xl">❌</button>
                    <button className="btn btn-circle">
                    <LuClipboardEdit  className="hover:scale-110 transition-all text-2xl text-green-500"/>
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Foot */}
           
          </table>
        </div>
      </div>
    );
};

export default Users;
