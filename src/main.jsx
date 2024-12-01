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
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import AllCoffees from "./pages/AllCoffees.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>fetch("https://coffee-houser-server-second.vercel.app/coffee"),

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch("https://coffee-houser-server-second.vercel.app/coffee"),
      },
      {
        path: "/allCoffee",
        element: <AllCoffees></AllCoffees>,
        loader: ()=>fetch("https://coffee-houser-server-second.vercel.app/coffee"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/add-coffee",
        element: (
          <PrivateRoutes>
            
            <AddCoffee />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-coffee/:id",
        element: (
          <PrivateRoutes>
           
            <UpdateCoffee />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>fetch(`https://coffee-houser-server-second.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/coffee-details/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>fetch(`https://coffee-houser-server-second.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
        // loader: ()=>fetch("https://coffee-houser-server-second.vercel.app/users")
      },
      {
        path: "/users",
        element: (
          <PrivateRoutes>
            <Users />
          </PrivateRoutes>
        ),
        loader: () =>fetch("https://coffee-houser-server-second.vercel.app/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
