
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { FC } from "react";
import Home from "@/routes/Home";

const Router: FC = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route index path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;
