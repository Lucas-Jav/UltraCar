import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";

const UserCard : FC = () => {
    // responsive
    const  media1125 =  useMediaQuery("(max-width: 1125px)");
    const  media550 =  useMediaQuery("(max-width: 550px)");
    const  media425 =  useMediaQuery("(max-width: 425px)");


    return (
        <Box
        className="fade-in-left"
        minHeight={
            media1125 
                ? media550
                    ? media425
                        ? 250
                        : 320
                    : 400 
                : 500
        }
        width="100%"
        sx={{
            bgcolor: "#08A65C",
            transition: "1s",
            borderRadius: 4,
            boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.2)",
            ":hover": {
                bgcolor: "#04D976",
            },
            display: "flex",
            px: media1125 
                ? media550
                    ? 2
                    : 4 
                : 0
        }}>
            <Box
            sx={{
                flex: 1,
                pl: media1125 ? 0 : 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: media1125 ? "center" : "flex-start",
                gap: 2
            }}>
                <Typography
                variant="h2"
                sx={{
                    fontSize: 
                        media550 
                            ? media425
                                ? 22
                                : 28 
                            : 40,
                    fontWeight: 700,
                    color: "#fff",
                    textAlign: media1125 ? "center" : "start"
                }}>
                    Solicite em segundos, viaje
                    em minutos
                </Typography>
                <Typography
                variant="body2"
                sx={{
                    fontSize: 
                        media550 
                            ? media425
                                ? 14
                                : 18 
                            : 20,
                    fontWeight: 500,
                    color: "#fff",
                    textAlign: media1125 ? "center" : "start"
                }}>
                    Disponível para dispositivos Android.
                </Typography>
                <Button
                variant="contained"
                color='white'
                sx={{ 
                    mt: 2,
                    textTransform: "none", 
                    fontSize: "1rem", 
                    fontWeight: 700,
                    borderRadius: "2rem",
                    width: "max-content",
                    ":hover": {
                        bgcolor: "#e8e8e8",
                    }
                }}
                size={media425 ? "medium" :"large"}
                disableElevation
                >Baixe o aplicativo</Button>

            </Box>
            {!media1125 && (
                <Box
                sx={{
                    flex: 1
                }}>
                    <img 
                    src="/images/mao-celular.png" 
                    alt="mao-celular" 
                    height="100%"
                    width="auto"
                    loading="lazy"/>
                </Box>
            )}
        </Box>
    )
}

export default UserCard;