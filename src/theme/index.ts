import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        black: Palette['secondary'];
        white: Palette['primary'];
        ultraCar: Palette['success'];
    }

    interface PaletteOptions {
        black?: PaletteOptions['secondary'];
        white?: Palette['primary']
        ultraCar?: Palette['success'];
    }
}


declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        black: true;
        white: true;
        ultraCar: true;
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#04D976',
            light: '#04D976',
            dark: '#08A65C',
            contrastText: '#fff',
        },
        white: {
            main: '#fff',
            light: '#fff',
            dark: '#04D976',
            contrastText: '#000'
        },
        
    },
});