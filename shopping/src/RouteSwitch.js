import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ShopPage } from "./ShopPage";

export const RouteSwitch = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/shop" element={<ShopPage />}/>
            </Routes>
        </BrowserRouter>
  )
}
