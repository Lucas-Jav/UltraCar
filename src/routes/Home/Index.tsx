import { FC } from "react";
import ScreenOne from "@/routes/Home/Screen-one/Index";
import ScreenTwo from "@/routes/Home/Screen-two/Index";
import ScreenThree from "@/routes/Home/Screen-three/Index";


const Home : FC = () => {

    return (
        <>
            <ScreenOne />

            <ScreenTwo />

            <ScreenThree />
        </>
    )
}

export default Home;