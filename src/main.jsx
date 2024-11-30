import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails.jsx";

import SignUp from "./pages/SignUp.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Profile from "./pages/Profile.jsx";
import Users from "./pages/Users.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/Signin.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: ()=> fetch("http://localhost:5000/coffee"),
    
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}` )
      },
      {
        path:"/coffee-details/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}` )
    
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
      ,
      {
        path:"/profile",
        element: <Profile></Profile>,
        // loader: ()=>fetch("http://localhost:5000/users")
      },
      {
        path:"/users",
        element:<Users></Users>,
        loader: ()=>fetch("http://localhost:5000/users")
      }
    ]
  },
  

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>
);
