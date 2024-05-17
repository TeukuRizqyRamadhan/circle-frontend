import { Box, Typography, Avatar, Button, TextField } from "@mui/material";
import { useEffect } from "react";
import ThreadCard from "../../components/common/ThreadCard";
import { DEFAULT_AVA } from "../../utils/constant/defaultAva";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useAppDispatch, useAppSelector } from "../../store";
import { getThreadsAsync } from "../../store/async/threadAsync";

const Home = () => {

    const thread = useAppSelector((state) => state.thread.thread);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getThreadsAsync());
    }, []);


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

    return (<>
        <Box><Typography sx={{ marginLeft: 2, marginTop: 1.5, marginBottom: 2 }} variant="h6">Home</Typography></Box>
        <Box sx={{ display: "flex", flexwrap: "wrap", gap: 1, alignItems: "center", paddingX: 2, marginBottom: 1.5 }}>
            <Avatar sx={{ width: 30, height: 30 }} alt="ava" src={DEFAULT_AVA} />
            <Box sx={{ width: "100%" }}>
                <TextField
                    placeholder="What is happening?!"
                    multiline
                    rows={2}
                    // maxRows={4}
                    variant="outlined" // Anda bisa menggunakan 'filled' atau 'standard' sesuai kebutuhan
                    sx={{
                        width: "100%",
                        color: "white",
                        backgroundColor: "#1D1D1D",
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#1D1D1D', // Border warna latar belakang
                            },
                            '&:hover fieldset': {
                                borderColor: 'white', // Border warna saat hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#1D1D1D', // Border warna saat fokus (sama dengan background untuk menghilangkan outline)
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
                {/* <Textarea sx={{ color: "white", backgroundColor: "#1D1D1D" }}  placeholder="What is happening?!" variant="solid" /> */}
            </Box>
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
        <Box>
            {thread &&
                thread.map((item) => <ThreadCard key={item.id} thread={item} />)}
        </Box>
    </>
    );
};

export default Home;