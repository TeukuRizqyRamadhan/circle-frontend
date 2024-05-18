import { Box, Button, Modal, Avatar, Divider, TextField } from "@mui/material";
import MenuItem from "./MenuItem";
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { DEFAULT_AVA } from "../../utils/constant/defaultAva";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useAppDispatch } from "../../store";
import { SET_LOGOUT } from "../../store/slice/auth";


const Sidebar = () => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const [openLogout, setOpenLogout] = useState(false); // State untuk modal logout

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddFileClick = () => {
        // Pemicu klik pada elemen input file yang tersembunyi
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Handle the file here
            console.log('Selected file:', file);
        }
    };

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
            <Button onClick={handleOpen} variant="contained" color="success" sx={{ width: "200px", color: 'white', borderRadius: '20px' }}>
                Create Post
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    color: '#fff',
                    backgroundColor: '#3f3f3f',
                    p: 2,
                    borderRadius: '10px'
                }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}> <HighlightOffIcon sx={{ color: "#909090", cursor: "pointer" }} onClick={handleClose} /></Box>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <Avatar sx={{ width: 30, height: 30 }} alt="ava" src={DEFAULT_AVA} />
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                placeholder="What is happening?!"
                                multiline
                                rows={2}
                                variant="outlined" // Anda bisa menggunakan 'filled' atau 'standard' sesuai kebutuhan
                                sx={{
                                    width: "100%",
                                    color: "white",
                                    backgroundColor: "#3F3F3F",
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#3F3F3F', // Border warna latar belakang
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white', // Border warna saat hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#3F3F3F', // Border warna saat fokus (sama dengan background untuk menghilangkan outline)
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'white', // Warna teks
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white', // Warna placeholder
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, mt: 3 }}>
                        <Divider sx={{ flexGrow: 1, borderColor: '#1D1D1D', borderBottomWidth: 1 }} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>

                        <AddPhotoAlternateOutlinedIcon
                            sx={{ color: "#04A51E", cursor: "pointer" }}
                            onClick={handleAddFileClick}
                        />
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <Button variant="contained" color="success" sx={{ color: 'white', borderRadius: '20px', maxHeight: 30 }}>
                            Post
                        </Button>
                    </Box>
                </Box>
            </Modal>
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