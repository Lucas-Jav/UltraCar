
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { FC } from "react";
import Home from "@/routes/Home/Index";
import NavBar from "@/components/NavBar/Index";
import Footer from "@/components/Footer/Index";
import Body from "@/components/Body/Index";

const Router: FC = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <NavBar />

        <Body>
          <Routes>
            <Route index path="/" element={<Home />}/>
          </Routes>
        </Body>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Router;
