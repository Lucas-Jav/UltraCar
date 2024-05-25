import { Box, Typography, useMediaQuery } from "@mui/material";
import { FC, useState } from "react";

const Footer : FC = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    // responsive
    const media768 = useMediaQuery("(max-width: 768px)");
    const media425 = useMediaQuery("(max-width: 425px)");

    return (
        <Box
        sx={{
            py: "30px",
            px: media768 ? "25px" : "80px",
            background: "#0D0D0D",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            alignItems: media425 ? "center" : ""
        }}>
            <Box
            mt={10}>
                <img 
                src="/images/logotipo.png" 
                alt="logotipo" 
                height="18px"
                width="auto"
                loading="lazy"/>
            </Box>
            <Typography
            variant="body2"
            sx={{
                fontSize: 14,
                color: "#F2F2F2"
            }}>
                Acessar  central de ajuda
            </Typography>
            <Box>
                <img 
                src="/images/play-store.png" 
                alt="logotipo" 
                height="38px"
                width="auto"
                loading="lazy"/>
            </Box>

            <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: media425 ? "column-reverse" : "row",
                alignItems: "center",
                gap: media425 ? 1 : 0
            }}>
                <Typography
                variant="body2"
                color="#AFAFAF"
                fontSize={14}>
                    &copy; {year} Ultra Car
                </Typography>

                <Box
                sx={{
                    display: "flex",
                    gap: "10px"
                }}>
                    <Typography
                    variant="body2"
                    color="#AFAFAF"
                    fontSize={14}>
                        Privacidade
                    </Typography>
                    <Typography
                    variant="body2"
                    color="#AFAFAF"
                    fontSize={14}>
                        Acessibilidade
                    </Typography>
                    <Typography
                    variant="body2"
                    color="#AFAFAF"
                    fontSize={14}>
                        Termos
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;