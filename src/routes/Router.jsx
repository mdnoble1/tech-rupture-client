import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/productDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import MyProfile from "../pages/dashboard/MyProfile/MyProfile";
import AddProduct from "../pages/dashboard/addProduct/AddProduct";
import MyProduct from "../pages/dashboard/myProduct/MyProduct";
import AllUser from "../pages/dashboard/AllUser/AllUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/products/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "myProduct",
        element: <MyProduct></MyProduct>
      },

      // admin  

      {
        path: "allUsers",
        element: <AllUser></AllUser>
      }
    ]
  }
]);

export default router;
