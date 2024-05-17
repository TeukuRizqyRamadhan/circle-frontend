import { Box, Typography, Avatar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ThreadCard from "../../components/common/ThreadCard";
import { getThreads } from "../../lib/api/call/thread";
import { IThread } from "../../types/app";
import Textarea from '@mui/joy/Textarea';
import { DEFAULT_AVA } from "../../utils/constant/defaultAva";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const Home = () => {
    const [thread, setThread] = useState<IThread[]>([]);

    const fetchThread = async () => {
        try {
            const { data } = await getThreads();
            data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            console.log(data);
            setThread(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchThread();
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
                <Textarea sx={{ color: "white", backgroundColor: "#1D1D1D" }} name="Solid" placeholder="What is happening?!" variant="solid" />
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