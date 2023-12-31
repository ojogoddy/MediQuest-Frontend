import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/userPage/Login"
import Register from "../pages/userPage/Register"
import LandingWebLayout from "../layout/landingPageLayout/LandingWebLayout"

import DashboardLayout from "../layout/adminDashboardLayout/DashboardLayout"
import AdminDashBoard from "../pages/admin/AdminDashBoard"
import AddNewUser from "../pages/admin/AddNewUser"
import AdminPatient from "../pages/admin/AdminPatient"
import PatientProfile from "../pages/admin/PatientProfile"
import Documents from "../pages/admin/Documents"
import Notification from "../pages/admin/Notification"
import Appointment from "../pages/admin/Appointment"
import Logout from "../pages/admin/Logout"
import AccessAccount from "../pages/AccessAccount"
import LabLogin from "../pages/labpage/LabLogin"
import LabRegister from "../pages/labpage/LabRegister"
import MediQuestLandingPage from "../pages/landing/MediQuestLandingPage"
import Test from "../pages/admin/Test"
import Userdashboardlayout from "../layout/userDashboardLayout/Userdashboardlayout"
import SignLayout from "../layout/landingPageLayout/SignLayout"



export const Index = createBrowserRouter([
    {
        path: "/",
        element: <LandingWebLayout/>,
        children: [
            {
                index: true,
                element: <MediQuestLandingPage />
            },
            
        ]
    },

    {
        path: "/access-account",
        element: <SignLayout/>,
        children: [
            {
                index: true,
                element: <AccessAccount/>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "access-account",
                element: <AccessAccount/>
            },
            {
                path: "lab-login",
                element: <LabLogin/>
            },
            {
                path: "lab-register",
                element: <LabRegister/>
            }
        ]
    },

    {
		path: "admin-dashboard",
		element: <DashboardLayout/>,
		children: [
			{
				index: true,
				element: < AdminDashBoard/>,
			},
            {
                path: "addnewuser",
                element: <AddNewUser/>
            },
            {
                path: "adminpatients",
                element: <AdminPatient/>
            },
            {
                path: "patientprofile",
                element: <PatientProfile/>
            },
            {
                path: "documents",
                element: <Documents/>
            },
            {
                path: "notification",
                element: <Notification/>
            },
            {
                path: "test",
                element: <Test/>
            },
            {
                path: "appointment",
                element: <Appointment/>
            },
            {
                path: "logout",
                element: <Logout/>
            },
        ],

    },
    
    {
        path:"/userdashboard",
        element:<Userdashboardlayout/>,
            children:
            [
               
            ]

        
    }


        
])