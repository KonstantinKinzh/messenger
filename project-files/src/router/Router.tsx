// React
import { Fragment } from "react";

// React router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import { Auth } from "@/pages/auth";
import { Register } from "@/pages/register";
import { Chat } from "@/pages/chat";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />
    },

    {
        path: "/register",
        element: <Register />
    },

    {
        path: "/chat",
        element: <Chat />
    },

    
]);

export function Router() {
    return (
        <Fragment>
            <RouterProvider router={router} />
        </Fragment>
    );
};