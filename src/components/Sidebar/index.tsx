import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../store";
import { SET_LOGOUT } from "../../store/slice/auth";
import ThreadPost from "../common/ThreadCard/ThreadPostComponent";
import MenuItem from "./MenuItem";


const Sidebar = () => {
    const dispatch = useAppDispatch();
    const [openLogout, setOpenLogout] = useState(false); // State untuk modal logout

    const handleLogout = () => {
        setOpenLogout(true);
    };

    const handleConfirmLogout = () => {
        dispatch(SET_LOGOUT());
    }

    const handleCloseLogout = () => {
        setOpenLogout(false);
    };

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
            <ThreadPost />
            <Box sx={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }} onClick={handleLogout}>
                <LogoutIcon sx={{ transform: "rotate(180deg)" }} />
                Logout
            </Box>
            <Modal
                open={openLogout}
                onClose={handleCloseLogout}
                aria-labelledby="logout-modal-title"
                aria-describedby="logout-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    color: '#fff',
                    backgroundColor: '#3f3f3f',
                    p: 2,
                    borderRadius: '10px'
                }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }} >
                        <HighlightOffIcon sx={{ color: "#909090", cursor: "pointer" }} onClick={handleCloseLogout} />
                    </Box>
                    <Box sx={{ textAlign: "center", mb: 2 }}>
                        Are you sure you want to logout?
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="contained" color="success" onClick={handleConfirmLogout}>Yes</Button>
                        <Button variant="contained" color="error" onClick={handleCloseLogout}>No</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default Sidebar;