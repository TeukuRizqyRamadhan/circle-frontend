import { Box, Button } from "@mui/material";
import MenuItem from "./MenuItem";
import LogoutIcon from '@mui/icons-material/Logout';

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
            <Box>      <Button variant="contained" color="success" sx={{ width: "200px", color: 'white', borderRadius: '20px' }}>
                Create Post
            </Button></Box>
            <Box sx={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 1 }}><LogoutIcon sx={{ transform: "rotate(180deg)" }} />Logout</Box>
        </Box>
    );
};

export default Sidebar;