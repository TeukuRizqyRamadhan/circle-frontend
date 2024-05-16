import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Profile from "../pages/Profile";

const router: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "search",
                element: <Home />,
            },
            {
                path: "follows",
                element: <Home />,
            },
        ],
    },
];

export default router;