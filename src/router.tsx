
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { FC } from "react";
import Home from "@/routes/Home/Index";
import NavBar from "@/components/NavBar/Index";
import Footer from "@/components/Footer/Index";

const Router: FC = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Router;
