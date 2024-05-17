import { Box, Container } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../store";

const RootLayout = () => {
    const isLogin = useAppSelector((state) => state.auth.isLogin);

    if (!isLogin) {
        return <Navigate to="/auth/login" />;
    }
    return (
        <Box className="container">
            <Container
                className="container"
                sx={{
                    display: "flex",
                    height: "100vh",
                    width: "100%",
                    color: "#fff",
                }}
            >
                <Box flex={1} sx={{}}>
                    <Sidebar />
                </Box>
                <Box
                    flex={2.5}
                    className="thread-container"
                    sx={{
                        borderLeft: "3px solid #3f3f3f",
                        borderRight: "3px solid #3f3f3f",
                        overflowY: "auto",
                    }}
                >
                    <Outlet />
                </Box>
                <Box flex={1.5} sx={{}}></Box>
            </Container>
        </Box>
    );
};

export default RootLayout;