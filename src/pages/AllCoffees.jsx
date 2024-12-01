import React, { useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'; // Make sure to import the icon if needed
import { useFirebaseAuth } from '../Providers/AuthProvider';
import { handleDelete } from '../utils/delete';

const AllCoffees = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState([]);
  const {user} = useFirebaseAuth();

    
  const handleDeleteCoffee = (id) => {
    handleDelete(id);
    const remainingCoffee = coffees.filter(coffee => coffee._id !== id);
    setCoffees(remainingCoffee); 
  };

  useEffect(() => {
    if (loadedCoffee) {
      setCoffees(loadedCoffee);
    }
  }, [loadedCoffee]);

  if(loadedCoffee.length == 0){
    return (
        <div className="flex items-center justify-center h-screen  text-center px-4">
        <h1 className="bg-gradient-to-r from-[#8B5E3C] to-[#D2B48C] text-white text-3xl md:text-4xl lg:text-5xl font-bold shadow-lg animate-fadeIn">
          No coffees found
        </h1>
      </div>
      
    )
  }

  return (
    <div className="container mx-auto p-4 font_2 min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">Our Coffee Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {coffees.map((coffee) => (
          <div
            key={coffee._id}
            className="bg-gradient-to-r from-[#8B5E3C] to-[#D2B48C] text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={coffee.photo}
              alt={coffee.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-3xl font-semibold  font_1">{coffee.name}</h3>
              <p className="text-lg mt-2">{coffee.taste}</p>
            
              <p className="text-sm mt-2 text-gray-200">Supplier: {coffee.supplier}</p>
         
            </div>
            <div className="p-4">
            <div className="flex  justify-around items-center gap-4   w-full md:w-auto ">
              <Link to={`/coffee-details/${coffee._id}`}>
                <FaEye
                  className="text-[#331A15] hover:text-blue-500 cursor-pointer text-xl transition-transform transform hover:scale-110"
                
                />
              </Link>

            {
              user &&   <Link to={`/update-coffee/${coffee._id}`}>
              <FaEdit
                className="text-[#331A15] hover:text-[#8B5E3C] cursor-pointer text-xl transition-transform transform hover:scale-110"
                
              />  
            </Link>
            }

             {
              user &&  <FaTrashAlt 
              className="text-[#331A15] hover:text-red-600 cursor-pointer text-xl transition-transform transform hover:scale-110"
              onClick={() => handleDeleteCoffee(coffee._id)}
            />  
             }
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCoffees;
