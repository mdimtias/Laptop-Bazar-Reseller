import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import AddCategory from "../Pages/DashBoard/AddCategory/AddCategory";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AllProducts from "../Pages/Home/AllProducts/AllProducts";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/LogIn/LogIn";
import Registration from "../Pages/Login/Registration/Registration";
import ResetPassword from "../Pages/Login/ResetPassword/ResetPassword";
import ErrorPage from "../Pages/SharedPage/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <Main></Main>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, 
            {
                path: "/signup",
                element: <Registration></Registration>
            }, 
            {
                path: "/login",
                element: <LogIn></LogIn>
            }, 
            {
                path: "/reset-password",
                element: <ResetPassword></ResetPassword>
            }, 
        ]
    },
    {
        path: "/dashboard", 
        element: <DashBoard></DashBoard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <AllUsers></AllUsers>
            },
            {
                path: "/dashboard/products",
                element: <AllProducts></AllProducts>
            },
            {
                path: "/dashboard/add-product",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/dashboard/users",
                element: <AllUsers></AllUsers>
            },
            {
                path: "/dashboard/add-category",
                element: <AddCategory></AddCategory>
            },
        ]
    }
])