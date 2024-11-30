import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  return (

   <div className='w-10/12 mx-auto my-12'>
     <div className='mb-4'>
  
  <Link to={`/`} className="inline-flex items-center border-2 border-[#8B5E3C] text-[#8B5E3C] font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg  hover:scale-105  transition-all duration-300  ">
    <IoMdArrowBack className="mr-2" />
    Back to Home
  </Link>
</div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-gray-100 rounded-lg shadow-md ">


      {/* Image Section */}
      <div className="md:w-1/2 w-full flex-1">
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="lg:w-8/12  h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 w-full  flex-1  p-6  space-y-4">
        <h2 className="text-3xl font-extrabold text-gray-800">{coffee.name}</h2>
        <div className="space-y-2 font_2">
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold text-gray-900">Chef:</span> {coffee.chef}
          </p>
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold text-gray-900">Supplier:</span> {coffee.supplier}
          </p>
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold text-gray-900">Taste:</span> {coffee.taste}
          </p>
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold text-gray-900">Category:</span> {coffee.category}
          </p>
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold text-gray-900">Details:</span> {coffee.details}
          </p>
        </div>

        {/* Call to Action */}
   
      </div>
    </div>
   </div>
  );
};

export default CoffeeDetails;
