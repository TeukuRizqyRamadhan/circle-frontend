import React from "react";
import { API } from "../../../lib/api";
import { Box, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";


interface IProps {
    threadId?: string;
}

const LikeButton: React.FC<IProps> = ({ threadId }) => {
    const [liked, setLiked] = React.useState(false);
    const [likeCount, setLikeCount] = React.useState(0);

    const checkLike = async () => {
        try {
            const { data } = await API.get(`/like/current/${threadId}`);
            console.log({ "ini data": data })
            setLiked(data.like === null ? false : true);
            setLikeCount(data.totalLike);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLike = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("User not authenticated");

            const res = await API.post(
                `/like/${threadId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(res);
            await checkLike();
        } catch (error) {
            console.log(error);
        }
    };


    React.useEffect(() => {
        checkLike();
    }, []);

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="like" onClick={handleLike}>
                {liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder />}{" "}
            </IconButton>
            {likeCount}
        </Box>
    );
};

export default LikeButton;