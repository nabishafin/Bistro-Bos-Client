import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import OurShop from "../pages/OurShop";
import LogIn from "../pages/LogIn";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import Cart from "../DashBoard/Cart";
import AllUsers from "../DashBoard/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "ourShop/:category",
                element: <OurShop />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "registration",
                element: <Registration />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <DashBoard />,
        children: [
            {
                path: "cart",
                element: <Cart />,
            },

            // admin routes
            {
                path: "/dashboard/allUsers",
                element: <AllUsers />,
            },

        ],
    },
]);
