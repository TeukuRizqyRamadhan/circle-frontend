import { Box } from "@mui/material";
import MenuItem from "./MenuItem";

const Sidebar = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: 5,
                gap: 2,
            }}
        >
            <Box>CIRCLE</Box>
            <Box>
                <MenuItem />
            </Box>
            <Box>Button Create</Box>
            <Box sx={{ marginTop: "auto" }}>Logout</Box>
        </Box>
    );
};

export default Sidebar;