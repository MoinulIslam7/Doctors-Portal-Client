import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
           
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes><Payment></Payment></AdminRoutes>
            },

        ]
    },
    {
        path: '*',
        element: <h2 className="text-3xl text-center mt-40">sorry! routes not Found</h2>
    }
]);

export default routes;