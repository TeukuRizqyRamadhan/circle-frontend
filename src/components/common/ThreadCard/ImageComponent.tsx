import { Box } from "@mui/material";
import React from "react";
import { IThreadImage } from "../../../types/app";

interface IProps {
    image?: IThreadImage[];
}

const ImageComponent: React.FC<IProps> = ({ image }) => {
    console.log(image);

    return (
        //   <Grid container sx={{ padding: 2 }}>
        //      {image?.map((item) => (
        //         <Grid item xs={6}>
        //            <img
        //               src={"http://localhost:5001/uploads/" + item.image}
        //               alt="image"
        //               style={{ width: "100%", height: "10rem", objectFit: "cover" }}
        //               key={item.id}
        //            />
        //         </Grid>
        //      ))}
        //   </Grid>
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                borderRadius: "10px",
            }}
        >

            {image?.map((item) => (
                <Box flex="1 1" minWidth={"50%"} key={item.url}>
                    <img
                        src={"http://localhost:5000/uploads/" + item.url}
                        alt="image"
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                </Box>
            ))}

        </Box>
    );
};

export default ImageComponent;