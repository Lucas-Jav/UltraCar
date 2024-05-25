import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";

const ScreenOne : FC = () => {
    const  media1024 =  useMediaQuery("(max-width: 1024px)");
    const  media500 =  useMediaQuery("(max-width: 500px)");


    return (
        <Box
        sx={{
            width: '100%',
            display: 'flex',
        }}>
            <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box>
                    <Typography
                    variant="h1"
                    sx={{
                        fontSize: media500 ? 40 : 60,
                        fontWeight: 800
                    }}>
                        Vá onde,
                    </Typography>
                    <Typography
                    variant="h1"
                    sx={{
                        fontSize: media500 ? 40 : 60,
                        fontWeight: 800,
                        lineHeight: 0.8
                    }}>
                        e quando quiser
                    </Typography>
                    
                </Box>
                <Typography
                mt={6}
                variant="body1"
                fontSize={media500 ? 20 : 20}
                color="#616368">
                    Ultra car é um aplicativo de mobilidade que se destaca pela 
                    praticidade ao proporcionar serviços de transporte com excelência. 
                    Destacando-se por atender as demandas dos passageiros com 
                    conforto até seu destino, contando com motoristas 
                    capacitados e selecionados.
                </Typography>

                <Button
                variant="contained"
                color='primary'
                sx={{ 
                    mt: 4,
                    textTransform: "none", 
                    fontSize: "1rem", 
                    borderRadius: "2rem",
                    width: "max-content" 
                }}
                size="large"
                disableElevation
                >Simular viagem</Button>

            </Box>
            {!media1024 && (
                <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <img 
                    src="/images/logo-preta.png" 
                    alt="logo-preta-ultra-car"
                    width="auto"
                    height={250} />
                </Box>
            )}
        </Box>
    )
}

export default ScreenOne;