import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import BlogDetail from "../Pages/Blogs/BlogDetail/BlogDetail";
import Blogs from "../Pages/Blogs/Blogs/Blogs";
import Category from "../Pages/Category/Category";
import AddCategory from "../Pages/DashBoard/AddCategory/AddCategory";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import AllCategory from "../Pages/DashBoard/AllCategory/AllCategory";
import AllProductsData from "../Pages/DashBoard/AllProductsData/AllProductsData";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/LogIn/LogIn";
import Registration from "../Pages/Login/Registration/Registration";
import ResetPassword from "../Pages/Login/ResetPassword/ResetPassword";
import ErrorPage from "../Pages/SharedPage/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/blogs/:id",
                element: <BlogDetail></BlogDetail>
            },
            {
                path: "/category/:id",
                element: <Category></Category>
            }

        ]
    },
    {
        path: "/dashboard", 
        element: <DashBoard></DashBoard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <AdminRoute><PrivateRoute><AllUsers></AllUsers></PrivateRoute></AdminRoute>
            },
            {
                path: "/dashboard/products",
                element: <AdminRoute><PrivateRoute><AllProductsData></AllProductsData></PrivateRoute></AdminRoute>
            },
            {
                path: "/dashboard/add-product",
                element: <AdminRoute><PrivateRoute><AddProduct></AddProduct></PrivateRoute></AdminRoute>
            },
            {
                path: "/dashboard/users",
                element: <AdminRoute><PrivateRoute><AllUsers></AllUsers></PrivateRoute></AdminRoute>
            },
            {
                path: "/dashboard/category",
                element: <AdminRoute><PrivateRoute><AllCategory></AllCategory></PrivateRoute></AdminRoute>
            },
            {
                path: "/dashboard/add-category",
                element: <AdminRoute><PrivateRoute> <AddCategory></AddCategory></PrivateRoute></AdminRoute>
            },
        ]
    }
])