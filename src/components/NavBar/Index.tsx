import { AppBar, Box, Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import BtnSobre from "./Buttons/BtnSobre";

type BtnDefaultProps = {
    text?: string;
    onClick?: () => void;
}

const NavBar : FC = () => {

    const BtnDefault: FC<BtnDefaultProps> = ({
        text,
        onClick = () => {}
    }) => (
        <Button
        variant="text"
        color='white'
        sx={{ textTransform: "capitalize", fontSize: "1rem"  }}
        disableElevation
        onClick={onClick}>
            {text}
        </Button>
    )

    return (
        <AppBar
        position="fixed"
        sx={{
            py: "15px",
            px: "80px",
            background: "#0D0D0D"
        }}
        >
            <Box
            sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Box
                sx={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center"
                }}>
                    <Link to="/">
                        <img src="/images/logotipo.png" alt="logotipo" />
                    </Link>
                    <BtnDefault text="Dirigir"/>
            
                    <BtnSobre />
                </Box>
                <Box
                sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "flex-end"
                }}>
                    <BtnDefault text="Ajuda"/>
                    <BtnDefault text="Fazer Login"/>
                    <Button
                    variant="contained"
                    color='white'
                    sx={{ textTransform: "none", fontSize: "1rem", borderRadius: "2rem"   }}
                    disableElevation
                    >Cadastre-se</Button>
                </Box>
            </Box>
        </AppBar>
    )
}

export default NavBar;