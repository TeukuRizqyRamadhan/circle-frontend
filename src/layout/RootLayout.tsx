import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { COLORS } from "../utils/constant/color";

const RootLayout = () => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                width: "100%",
                bgcolor: COLORS.BG_COLOR,
                color: "#fff",
            }}
        >
            <Box flex={1} sx={{}}>
                <Sidebar />
            </Box>
            <Box
                flex={2.5}
                sx={{
                    borderLeft: "3px solid #3f3f3f",
                    borderRight: "3px solid #3f3f3f",
                }}
            ></Box>
            <Box flex={1.5} sx={{}}></Box>
        </Box>
    );
};

export default RootLayout;