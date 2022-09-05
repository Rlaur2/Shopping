import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ShopPage } from "./ShopPage";
import { Header } from "./components/Header";

export const RouteSwitch = () => {
  return (
    <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/shop" element={<ShopPage />}/>
            </Routes>
        </BrowserRouter>
  )
}
