import { FC } from "react";
import { IThread } from "../../../types/app";
import { Avatar, Box, Typography } from "@mui/material";
import AuthorComponent from "./AuthorComponent";
import ImageComponent from "./ImageComponent";
import { DEFAULT_AVA } from "../../../utils/constant/defaultAva";
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LikeButton from "../LikeButton";


interface IProps {
    thread: IThread;
}

const ThreadCard: FC<IProps> = ({ thread }) => {

    return (
        <Box
            sx={{
                display: "flex",
                gap: 1,
                paddingX: 2,
                borderTop: "1px solid rgba(63, 63, 63, 1)",
                borderBottom: "1px solid rgba(63, 63, 63, 1)",
                py: 1,
            }}
        >
            <Avatar sx={{ width: 30, height: 30 }} alt="ava" src={thread.author.profile?.avatar ? "http://localhost:5000/uploads/" + thread.author.profile?.avatar : DEFAULT_AVA} />
            <Box
                sx={{
                    width: "100%",
                }}
            >
                <AuthorComponent author={thread.author} />
                <Typography sx={{ marginBottom: 1 }}>{thread.content}</Typography>
                {thread.image && thread.image.length > 0 && (
                    <ImageComponent image={thread.image} />
                )}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LikeButton threadId={thread.id} />
                    <SmsOutlinedIcon sx={{ color: 'gray' }} />{thread.replies?.length} Replies
                </Box>
            </Box>
        </Box>
    );
};

export default ThreadCard;