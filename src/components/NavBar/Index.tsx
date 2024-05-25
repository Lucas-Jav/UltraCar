import { AppBar, Box, Button, IconButton, useMediaQuery } from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import BtnSobre from "./Buttons/BtnSobre";
import MenuIcon from '@mui/icons-material/Menu';
import DrawerNavBar from "./Drawer/Index";

type BtnDefaultProps = {
    text?: string;
    onClick?: () => void;
}

const NavBar: FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Responsive
    const media860 = useMediaQuery("(max-width: 860px)");
    const media768 = useMediaQuery("(max-width: 768px)");


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const BtnDefault: FC<BtnDefaultProps> = ({
        text,
        onClick = () => { }
    }) => (
        <Button
            variant="text"
            color='white'
            sx={{ textTransform: "capitalize", fontSize: "1rem" }}
            disableElevation
            onClick={onClick}>
            {text}
        </Button>
    )


    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    py: "15px",
                    px: media768 ? "25px" : "80px",
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
                        {!media860 && (
                            <>
                                <BtnDefault text="Dirigir" />
                                <BtnSobre />
                            </>
                        )}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }}>
                        {!media860 ? (
                            <>
                                <BtnDefault text="Ajuda" />
                                <BtnDefault text="Fazer Login" />
                                <Button
                                    variant="contained"
                                    color='white'
                                    sx={{ textTransform: "none", fontSize: "1rem", borderRadius: "2rem" }}
                                    disableElevation
                                >Cadastre-se</Button>
                            </>
                        ) : (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </AppBar>
            {mobileOpen && (
                <DrawerNavBar
                    handleDrawerToggle={handleDrawerToggle}
                    mobileOpen={mobileOpen}/>
            )}
        </>
    )
}

export default NavBar;