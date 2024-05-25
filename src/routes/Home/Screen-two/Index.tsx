import DriverCard from "@/components/CardsDownloadApp/DriverCard";
import UserCard from "@/components/CardsDownloadApp/UserCard";
import { Box, Button, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
import { FC, useEffect, useState } from "react";

const ScreenTwo : FC = () => {
    const [chipSelected, setChipSelected] = useState("user");

    const handleShip = (current?: string) => {
        if (!(current === chipSelected)) {
            setChipSelected(chipSelected === "user"? "driver" : "user");
        }
    }

    // responsive
    const  media1275 =  useMediaQuery("(max-width: 1275px)");


    return (
        <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            position: "relative"
        }}>
            {!media1275 && (
                <img 
                src="/images/people-car.png" 
                alt="people-car" 
                style={{
                    height: "250px",
                    width: "auto",
                    position: "absolute",
                    top: -130,
                    right: 30,
                    zIndex: -1
                }}
                loading="lazy"/>
            )}

            <Typography
            color="#262626"
            variant="h1"
            fontSize={30}
            textAlign="center"
            fontWeight={700}>Baixe nosso aplicativo</Typography>

            <Stack
            mt={2}
            mb={4}
            direction="row"
            spacing={2}>
                <Chip label="Usuários" color={chipSelected === "user" ? "primary" : "default"} onClick={() => handleShip("user")}/>
                <Chip label="Motorista" color={chipSelected === "driver" ? "primary" : "default"} onClick={() => handleShip("driver")}/>
            </Stack>

            {chipSelected === "user" ? (
                <UserCard />
            ) : (
                <DriverCard />
            )}
            
        </Box>
    )
}

export default ScreenTwo;