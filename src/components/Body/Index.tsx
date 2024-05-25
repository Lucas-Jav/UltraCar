import { Box, useMediaQuery } from "@mui/material";
import { FC } from "react";

interface BodyProps {
    children?: React.ReactNode;
}

const Body : FC<BodyProps> = ({
    children
}) => {
    // responsive
    const  media1440 =  useMediaQuery("(max-width: 1440px)");
    const  media768 =  useMediaQuery("(max-width: 768px)");
    const  media375 =  useMediaQuery("(max-width: 375px)");

    return (
        <Box
        py={8}
        my={media375 ? 4 : 9}
        px={
            media1440 
                ? media768
                    ? media375
                        ? 4
                        : 6
                    : 12
                : 30
        }
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16
        }}>
            {children}
        </Box>
    )
}

export default Body;