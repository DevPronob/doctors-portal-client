import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AppointmentSection from "../../Pages/AppointmentSection/AppointmentSection";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import RequireAuth from "../../Pages/Login/RequireAuth";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyAppointment from "../../Pages/Dashboard/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import Payment from "../../Pages/Dashboard/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";


export const  router =createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
           {
            path:'/',
            element: <Home></Home>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/Appointment',
            element:<RequireAuth><AppointmentSection></AppointmentSection></RequireAuth>
           },
           {
            path:'/SignUp',
            element:<SignUp></SignUp>
           },

        ]
    },

    {
        path:'/Dashboard',
        element:<RequireAuth><DashboardLayout></DashboardLayout></RequireAuth>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:"/Dashboard/",
                element:<MyAppointment></MyAppointment>
            },
            {
                path:"/Dashboard/AllUsers",
                element:<AllUsers></AllUsers>
            },
            {
                path:"/Dashboard/Payment/:id",
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/api/booking/book/${params.id}`)
            }
        ]
       }

])