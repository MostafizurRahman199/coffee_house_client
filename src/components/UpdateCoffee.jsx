import React, { useState } from 'react'
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from 'react-router-dom'

const UpdateCoffee = () => {
  const loadCoffee = useLoaderData()
  const {_id,  name, chef, supplier, taste, category, details, photo} = loadCoffee;
  console.log(_id);
  const navigate = useNavigate();

const [updatedCoffee, setUpdatedCoffee] = useState({
  name: name || "",
  chef: chef || "",
  supplier: supplier || "",
  taste: taste || "",
  category: category || "",
  details: details || "",
  photo: photo || "",
  

})



const handleInputChange = (e)=>{
  const {name, value} = e.target;
  setUpdatedCoffee((prev)=>({...prev, [name]:value}));
}

  const handleUpdate = (e) =>{
    e.preventDefault()
     
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            },
           body: JSON.stringify(updatedCoffee),
        }).then((res)=>res.json())
        .then(data => {
          if(data.modifiedCount  > 0){
            console.log(data);
            Swal.fire("Saved!", "", "success");
            navigate('/');
        }else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
        }
      )
      } 
    });

      // update logic here

     
    
  }

  return (
    <div className="w-full  md:w-10/12 mx-auto p-2 md:p-8 py-4   bg-[#F4F3F0] text-gray-800 sm:rounded-lg sm:shadow-lg md:my-8 my-4 font_2">
    <h1 className="text-4xl font-extrabold mb-2 text-center font_1">Update Coffee</h1>
    <p className="text-gray-600 mb-2 text-center">
      Discover the perfect blend of flavors and aromas...
    </p>

    <form className=" md:p-6  p-2" onSubmit={handleUpdate}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            onChange={handleInputChange}
          defaultValue={name}
            name="name"
            type="text"
            id="name"
            placeholder="Enter your name"
            className="block w-full  rounded-md shadow-sm p-3 bg-white  text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Chef
          </label>
          <input
            onChange={handleInputChange}
          defaultValue={chef}
            name="chef"
            type="text"
            id="quantity"
            placeholder="Enter your chef"
            className="block w-full  rounded-md shadow-sm p-3 bg-white  text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
        <div>
          <label
            htmlFor="supplier"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Supplier
          </label>
          <input
            onChange={handleInputChange}
          defaultValue={supplier}
            name="supplier"
            type="text"
            id="supplier"
            placeholder="Enter your supplier"
            className="block w-full  rounded-md shadow-sm p-3 bg-white  text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
        <div>
          <label
            htmlFor="taste"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Taste
          </label>
          <input
            onChange={handleInputChange}
          defaultValue={taste}
            name="taste"
            type="text"
            id="taste"
            placeholder="Enter your taste"
            className="block w-full  rounded-md shadow-sm p-3 bg-white  text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            onChange={handleInputChange}
          defaultValue={category}
            name="category"
            type="text"
            id="category"
            placeholder="Enter your category"
            className="block w-full  rounded-md shadow-sm p-3 bg-white  text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
        <div>
          <label
            htmlFor="details"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Details
          </label>
          <input
            onChange={handleInputChange}
          defaultValue={details}
            name="details"
            type="text"
            id="details"
            placeholder="Enter your details"
            className="block w-full  rounded-md shadow-sm p-3 bg-white  text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
        <div>
          <label
            htmlFor="photo"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Photo
          </label>
          <input
            onChange={handleInputChange}
          defaultValue={photo}
            name="photo"
            type="text"
            id="photo"
            placeholder="Enter your photo"
            className="block w-full  rounded-md shadow-sm p-3 bg-white  text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-[#D2B48C] my-4 font-semibold py-3 rounded-md hover:bg-brown-600 bg-brown-700 transition duration-200 ease-in-out border-2 border-[#331A15]"
      >
        Update Coffee
      </button>
      {/* Updated button styles */}
    </form>
  </div>
  )
}

export default UpdateCoffee