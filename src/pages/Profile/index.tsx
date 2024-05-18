import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { getProfileAsync } from "../../store/async/profileAsync";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { IProfile } from "../../types/app";
import { FC } from "react";
import { DEFAULT_AVA } from "../../utils/constant/defaultAva";
import { DEFAULT_COVER } from "../../utils/constant/defaultCover";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";


const Profile: FC<IProfile> = () => {
    const profile = useAppSelector((state) => state.profile.profile);
    const dispatch = useAppDispatch();
    const Navigate = useNavigate();

    useEffect(() => {
        dispatch(getProfileAsync());
    }, []);

    const handleBackClick = () => {
        Navigate(-1); // Navigate to the previous page
    };
    console.log(profile);
    return (
        <>
            <Box sx={{ position: "relative", display: "flex", flexDirection: "column", m: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                    <KeyboardBackspaceIcon onClick={handleBackClick} sx={{ cursor: "pointer" }} /> <Typography fontSize={20} fontWeight={"semibold"} sx={{ color: "white" }}>{profile.user?.fullname}</Typography>
                </Box>
                <Box sx={{ position: "relative", width: "100%", height: 200, borderRadius: "10px", gap: 2 }}>
                    <img
                        src={profile?.cover ? "http://localhost:5000/uploads/" + profile?.cover : DEFAULT_COVER}
                        alt="cover"
                        style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "10px" }}
                    />
                    <Avatar
                        style={{ left: 100, bottom: -60 }}
                        sx={{
                            position: "absolute",
                            bottom: "-30px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 100,
                            height: 100,
                            border: "5px solid black",
                            gap: 2
                        }}
                        alt="ava"
                        src={profile?.avatar ? "http://localhost:5000/uploads/" + profile?.avatar : DEFAULT_AVA}
                    />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", marginTop: 2 }}>
                    <Button variant="outlined" sx={{ color: "white", borderColor: "white", borderRadius: "50px" }}>Edit Profile</Button>
                </Box>
                <Typography fontSize={20} fontWeight={"semibold"} sx={{ color: "white", marginTop: 2 }}>{profile.user?.fullname}</Typography>
                <Typography fontSize={12} sx={{ color: "gray" }}>
                    @{profile.username}
                </Typography>
                <Typography fontSize={12} sx={{ color: "white", marginTop: 1 }}>
                    {profile.bio}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                    <Typography>
                        {profile.user?.following.length} <Typography component="span" sx={{ color: "gray" }}>Following</Typography>
                    </Typography>
                    <Typography>
                        {profile.user?.followedBy.length} <Typography component="span" sx={{ color: "gray" }}>Followers</Typography>
                    </Typography>
                </Box>
            </Box >
        </>
    )
};

export default Profile;