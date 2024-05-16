import { FC } from "react";
import { IThread } from "../../../types/app";
import { Avatar, Box, Typography } from "@mui/material";
import AuthorComponent from "./AuthorComponent";
import ImageComponent from "./ImageComponent";
import { DEFAULT_AVA } from "../../../utils/constant/defaultAva";

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
                borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
                py: 1,
            }}
        >
            <Avatar sx={{ width: 30, height: 30 }} alt="ava" src={thread.author.profile?.avatar ?? DEFAULT_AVA} />
            <Box
                sx={{
                    width: "100%",
                }}
            >
                <AuthorComponent author={thread.author} />
                <Typography>{thread.content}</Typography>
                {thread.image && thread.image.length > 0 && (
                    <ImageComponent image={thread.image} />
                )}
            </Box>
        </Box>
    );
};

export default ThreadCard;