import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //form data

    const formData = {
      name: e.target.name.value,
      chef: e.target.chef.value,
      supplier: e.target.supplier.value,
      taste: e.target.taste.value,
      category: e.target.category.value,
      details: e.target.details.value,
      photo: e.target.photoURL.value,
    };

    console.log(typeof formData);
  

    //send data to server

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
              
        Swal.fire({
            title: 'Success',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }

        e.target.reset();
    })
    .catch(error => console.log(error.message));

  };
  return (
  <div className=' w-10/12 mx-auto my-2'>
    <div className='mb-4'>
  
      <Link to={`/`} className="inline-flex items-center border-2 border-[#8B5E3C] text-[#8B5E3C] font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg  hover:scale-105  transition-all duration-300  ">
        <IoMdArrowBack className="mr-2" />
        Back to Home
      </Link>
    </div>
      <div className="w-full p-2 md:p-8 py-4   bg-[#F4F3F0] text-gray-800 sm:rounded-lg sm:shadow-lg md:my-8 my-4">
      <h1 className="text-4xl font-extrabold mb-2 text-center text-[#331A15]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Add Coffee</h1>
      <p className="text-gray-600 mb-2 text-center">
        Discover the perfect blend of flavors and aromas...
      </p>

      <form className=" md:p-6  p-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-start text-xl font-medium text-gray-700"
            >
              Name
            </label>
            <input
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
              className="block text-start text-xl font-medium text-gray-700"
            >
              Chef
            </label>
            <input
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
              className="block text-start text-xl font-medium text-gray-700"
            >
              Supplier
            </label>
            <input
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
              className="block text-start text-xl font-medium text-gray-700"
            >
              Taste
            </label>
            <input
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
              className="block text-start text-xl font-medium text-gray-700"
            >
              Category
            </label>
            <input
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
              className="block text-start text-xl font-medium text-gray-700"
            >
              Details
            </label>
            <input
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
              className="block text-start text-xl font-medium text-gray-700"
            >
              Photo
            </label>
            <input
              name="photoURL"
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
          Add Coffee
        </button>{" "}
        {/* Updated button styles */}
      </form>
    </div>
  </div>
  );
};

export default AddCoffee;
