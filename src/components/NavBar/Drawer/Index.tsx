import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface DrawerNavBarProps {
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
}

const DrawerNavBar : FC<DrawerNavBarProps> = ({
    handleDrawerToggle,
    mobileOpen
}) => {
    const navItems = ['Dirigir', 'Sobre', 'Ajuda'];

    return (
        <nav>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                anchor="right"
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
                >
                <Box 
                onClick={handleDrawerToggle} 
                sx={{ 
                    textAlign: 'center', 
                    flex: 1, 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "space-between"
                }}>
                    <Box>
                        <Link to="/">
                            <Box
                            sx={{
                                px: 5,
                                py: 2
                            }}>
                                <img
                                    src="/images/ultra-car-preto.png"
                                    alt="MUI Logo"
                                    height="auto"
                                    width="100%"
                                />
                            </Box>
                        </Link>
                        
                        <Divider />
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center', fontWeight: 700 }}>
                                        <ListItemText sx={{ textAlign: 'center', fontWeight: 700 }} primary={item} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box
                    px={4}
                    py={2}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}>

                        <Button 
                        variant="contained" 
                        fullWidth
                        color="white"
                        size="large"
                        sx={{
                            textTransform: "none",
                            fontWeight: 700,
                        }}>
                            Fazer Login
                        </Button>
                        <Button 
                        size="large"
                        variant="contained" 
                        fullWidth
                        sx={{
                            textTransform: "none",
                            fontWeight: 700,
                        }}>
                            Cadastrar-se
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </nav>
    )
}

export default DrawerNavBar;