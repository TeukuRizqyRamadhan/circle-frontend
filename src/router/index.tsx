import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Followings from "../pages/Followings";

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
                element: <Search />,
            },
            {
                path: "follows",
                element: <Followings />,
            },
        ],
    },
];

export default router;