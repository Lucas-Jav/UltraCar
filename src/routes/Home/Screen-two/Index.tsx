import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";

const ScreenTwo : FC = () => {
    const  media1024 =  useMediaQuery("(max-width: 1024px)");
    const  media500 =  useMediaQuery("(max-width: 500px)");


    return (
        <Box
        sx={{
            width: '100%',
            display: 'flex',
        }}>
            
        </Box>
    )
}

export default ScreenTwo;