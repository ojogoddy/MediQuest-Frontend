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
import Page1 from "../pages/admin/Page"
import AccessAccount from "../pages/AccessAccount"
import LabLogin from "../pages/labpage/LabLogin"
import LabRegister from "../pages/labpage/LabRegister"
import Page2 from "../pages/admin/Page2"
import MediQuestLandingPage from "../pages/landing/MediQuestLandingPage"
import Test from "../pages/admin/Test"

import Userdashboardlayout from "../layout/userDashboardLayout/Userdashboardlayout"
import Overview from "../pages/users/Overview"



export const Index = createBrowserRouter([
    {
        path: "/",
        element: <LandingWebLayout/>,
        children: [
            {
                index: true,
                element: <MediQuestLandingPage />
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
                path: "page",
                element: <Page1/>
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
            {
                path: "page2",
                element: <Page2/>
            },

            
        ],

    },
    
    {
        path:"/userdashboard",
        element:<Userdashboardlayout/>,
        
            children:
            [
                {
                    index:true,
                    element:<Overview/>

                },

           
            ]

        
    }


        
])