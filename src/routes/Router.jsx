import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,

        children: [
            {
                index: true, 
                Component: Home,
            },
            {
                path: 'rider',
                loader: ()=> fetch('/serviceCenter.json').then(res => res.json()),
                element: <PrivateRoute><Rider></Rider></PrivateRoute>,
            },
             

             {
                path: 'send-parcel',
                loader: ()=> fetch('/serviceCenter.json').then(res => res.json()),
                element: <SendParcel></SendParcel>,
            
            },
            {
                path: "coverage",
                Component: Coverage,
                 loader: ()=> fetch('/serviceCenter.json').then(res => res.json())
            }
        ]
    },

    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component: Login,

            },
            {
                path: '/register',
                Component: Register,
            },
        
        ]

    },
        {
                path: 'dashboard',
                Component: DashboardLayout,

                children:[
                    {
                        path: "my-parcels",
                        Component: MyParcels,
                    },
                    {
                        path: 'payment/:parcelId',
                        Component: Payment
                    },
                    {
                        path: 'payment-history',
                        Component: PaymentHistory,
                    },
                    {
                        path: 'payment-success',
                        Component: PaymentSuccess,
                    },
                    {
                        path: 'payment-cancelled',
                        Component: PaymentCancelled,
                    },
                    {
                        path: 'approve-riders',
                        Component: ApproveRiders
                    },
                    {
                        path: 'users-management',
                        Component: UsersManagement
                    }
                ]
            }
])