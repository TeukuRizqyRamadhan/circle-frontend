import {
    Box,
    Button,
    TextField,
    Modal, Avatar, Divider,
} from "@mui/material";
import React, { useState } from "react";
import { createThread } from "../../../lib/api/call/thread";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getThreadsAsync } from "../../../store/async/threadAsync";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { DEFAULT_AVA } from "../../../utils/constant/defaultAva";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface IThreadPostProps {
    threadId?: string;
    callback?: () => Promise<void>;
}

const ThreadPost: React.FC<IThreadPostProps> = ({ threadId, callback }) => {
    const [threadPost, setThreadPost] = useState<{
        content: string;
        image: FileList | null;
        threadId?: string;
    }>({ content: "", image: null });
    useAppSelector((state) => state.thread.thread);
    const dispatch = useAppDispatch();

    const handlePostThread = async (e: React.MouseEvent) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.append('content', threadPost.content);
            if (threadId) {
                formData.append('threadId', threadId);
            }
            if (threadPost.image) {
                Array.from(threadPost.image).forEach(file => {
                    formData.append('image', file);
                });
            }

            await createThread(formData);

            if (callback) {
                await callback();
            } else {
                await dispatch(getThreadsAsync());
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleOpen} sx={{ width: "200px", color: 'white', borderRadius: '20px', bgcolor: "#04A51E" }}>
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
                                value={threadPost.content}
                                onChange={(e) =>
                                    setThreadPost({ ...threadPost, content: e.target.value })
                                }
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

                        <label htmlFor="contained-button-file">
                            <AddPhotoAlternateOutlinedIcon
                                sx={{ color: "#04A51E", cursor: "pointer" }}

                            /> {threadPost.image?.length}
                        </label>

                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            max={4}
                            type="file"
                            hidden
                            onChange={(e) => {
                                setThreadPost({ ...threadPost, image: e.target.files });
                            }}
                        />
                        <Button onClick={handlePostThread} variant="contained" color="success" sx={{ color: 'white', borderRadius: '20px', maxHeight: 30 }}>
                            Post
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ThreadPost;
