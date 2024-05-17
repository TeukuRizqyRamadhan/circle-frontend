import { Box, Button, Modal, Avatar, Divider } from "@mui/material";
import MenuItem from "./MenuItem";
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Textarea from "@mui/joy/Textarea";
import { DEFAULT_AVA } from "../../utils/constant/defaultAva";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Sidebar = () => {
    const [open, setOpen] = useState(false);

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
                            <Textarea
                                sx={{
                                    width: "100%",
                                    color: "white",
                                    backgroundColor: "transparent"
                                }}
                                name="Solid"
                                placeholder="What is happening?!"
                                variant="solid"
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
            <Box sx={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 1 }}><LogoutIcon sx={{ transform: "rotate(180deg)" }} />Logout</Box>
        </Box>
    );
};

export default Sidebar;