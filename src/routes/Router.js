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
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import MyWishlist from "../Pages/DashBoard/MyWishlist/MyWishlist";
import ReportProducts from "../Pages/DashBoard/ReportProducts/ReportProducts";
import BrandProducts from "../Pages/Home/BrandProducts/BrandProducts";
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
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },
            {
                path: "/brand/:name",
                element: <BrandProducts></BrandProducts>
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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/dashboard/users",
                element: <PrivateRoute><AdminRoute><AllUsers></AllUsers></AdminRoute></PrivateRoute>
            },
            {
                path: "/dashboard/category",
                element: <PrivateRoute><AdminRoute><AllCategory></AllCategory></AdminRoute></PrivateRoute>
            },
            {
                path: "/dashboard/add-category",
                element: <PrivateRoute> <AdminRoute><AddCategory></AddCategory></AdminRoute></PrivateRoute>
            },
            {
                path: "/dashboard/my-orders",
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: "/dashboard/my-products",
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },
            {
                path: "/dashboard/my-wishlist",
                element: <PrivateRoute><MyWishlist></MyWishlist> </PrivateRoute>
            },
            {
                path: "/dashboard/report-product",
                element: <PrivateRoute><AdminRoute><ReportProducts></ReportProducts></AdminRoute> </PrivateRoute>
            }
        ]
    }
])