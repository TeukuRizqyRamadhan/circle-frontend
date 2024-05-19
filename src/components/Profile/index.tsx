import { Avatar, Box, Button, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { getProfileAsync } from "../../store/async/profileAsync";
import { IProfile } from "../../types/app";
import { DEFAULT_AVA } from "../../utils/constant/defaultAva";
import { DEFAULT_COVER } from "../../utils/constant/defaultCover";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Profile: FC<IProfile> = () => {
    const profile = useAppSelector((state) => state.profile.profile);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProfileAsync());
    }, []);
    console.log(profile);
    return (
        <>
            <Box sx={{ position: "relative", display: "flex", flexDirection: "column", m: 2, p: 2, backgroundColor: "#262626", width: "100%", borderRadius: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                    <Typography fontSize={14} fontWeight={"bold"} sx={{ color: "white" }}>My Profile</Typography>
                </Box>
                <Box sx={{ position: "relative", size: "small", width: "100%", borderRadius: "10px", paddingTop: 2 }}>
                    <img
                        src={profile?.cover ? "http://localhost:5000/uploads/" + profile?.cover : DEFAULT_COVER}
                        alt="cover"
                        style={{ width: "100%", height: "100px", borderRadius: "10px" }}
                    />
                    <Avatar
                        style={{}}
                        sx={{
                            position: "absolute",
                            width: 80,
                            height: 80,
                            border: "3px solid black",
                            top: "70%",
                            left: "10%",
                        }}
                        alt="ava"
                        src={profile?.avatar ? "http://localhost:5000/uploads/" + profile?.avatar : DEFAULT_AVA}
                    />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", marginTop: 1 }}>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            color: "white",
                            borderColor: "white",
                            borderRadius: "50px",
                            padding: "4px 10px"
                        }}
                    >
                        Edit Profile
                    </Button>
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
            <Box sx={{ display: "flex", flexDirection: "column", m: 2, p: 2, backgroundColor: "#262626", width: "100%", borderRadius: "10px" }}>
                <Typography fontSize={14} fontWeight={"bold"} sx={{ color: "white" }}>Suggested For You</Typography>
                <Box key={profile.username} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Avatar
                            sx={{
                                width: 30,
                                height: 30,
                                border: "3px solid black",
                            }}
                            alt="ava"
                            src={profile?.avatar ? "http://localhost:5000/uploads/" + profile?.avatar : DEFAULT_AVA}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography fontSize={12} sx={{ color: "white" }}>
                                {profile.user?.fullname}
                            </Typography>
                            <Typography fontSize={12} sx={{ color: "gray" }}>
                                @{profile.username}
                            </Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            color: "white",
                            borderColor: "white",
                            borderRadius: "50px",
                            padding: "4px 10px"
                        }}
                    >
                        Follow
                    </Button>
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", m: 2, p: 2, backgroundColor: "#262626", width: "100%", borderRadius: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography fontSize={12} fontWeight={"bold"} sx={{ color: "white", marginRight: 1 }}>Developed by Anthrax •</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                        <GitHub sx={{ color: "white", width: 15, height: 15 }} />
                        <LinkedInIcon sx={{ color: "white", width: 15, height: 15 }} />
                        <FacebookIcon sx={{ color: "white", width: 15, height: 15 }} />
                        <InstagramIcon sx={{ color: "white", width: 15, height: 15 }} />
                    </Box>
                </Box>
                <Box>
                    <Typography fontSize={10} sx={{ color: "gray" }}>Powered by <img src="https://dumbways.id/assets/images/brandred.png" alt="Powered by logo" style={{ width: 15, height: 8 }} /> Dumbways Indonesia • #1 Coding Bootcamp</Typography>
                </Box>
            </Box>
        </>
    )
};

export default Profile;