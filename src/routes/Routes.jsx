import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import OurShop from "../pages/OurShop";
import LogIn from "../pages/LogIn";
import Registration from "../pages/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/ourShop/:category",
                element: <OurShop />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/registration",
                element: <Registration />,
            }
        ],
    },
]);

