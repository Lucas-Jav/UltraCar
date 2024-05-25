import DriverCard from "@/components/CardsDownloadApp/DriverCard";
import UserCard from "@/components/CardsDownloadApp/UserCard";
import { Box, Button, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
import { FC, useEffect, useState } from "react";

const ScreenThree: FC = () => {
    // responsive
    const  media1024 =  useMediaQuery("(max-width: 1024px)");
    const  media425 =  useMediaQuery("(max-width: 425px)");



    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                gap: 6
            }}>
            {!media1024 && (
                <Box
                    flex={1}>
                    <img
                        src="/images/rua.png"
                        alt="rua"
                        width="100%"
                        height="auto"
                        loading="lazy" />
                </Box>
            )}

            <Box
                flex={1}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: media425 ? 30 : 40,
                        fontWeight: 700,
                        color: "#262626"
                    }}>
                    Sobre-nos
                </Typography>
                <Typography
                    variant="body1"
                    fontSize={20}
                    color="#616368">
                    Ultra Car é uma empresa de transporte de passageiros via aplicativo, que 
                    visa atender as necessidades dos passageiros, disponibilizando conforto, segurança, 
                    agilidade e praticidade, tudo em um único aplicativo moderno e acessível para todos.
                </Typography>

                <Button
                variant="contained"
                color='primary'
                sx={{
                    textTransform: "none", 
                    fontSize: "1rem", 
                    borderRadius: "2rem",
                    width: "max-content" 
                }}
                size="large"
                disableElevation
                >Veja mais</Button>

            </Box>
        </Box>
    )
}

export default ScreenThree;