
import { Box, useMediaQuery } from "@mui/material";
import { FC } from "react";
import ScreenOne from "@/routes/Home/Screen-one/Index";
import ScreenTwo from "@/routes/Home/Screen-two/Index";
import ScreenThree from "@/routes/Home/Screen-three/Index";


const Home : FC = () => {
    // responsive
    const  media1440 =  useMediaQuery("(max-width: 1440px)");
    const  media768 =  useMediaQuery("(max-width: 768px)");
    const  media375 =  useMediaQuery("(max-width: 375px)");

    return (
        <Box
        py={8}
        mt={media375 ? 4 : 9}
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

            <ScreenOne />

            <ScreenTwo />

            <ScreenThree />
            
        </Box>
    )
}

export default Home;