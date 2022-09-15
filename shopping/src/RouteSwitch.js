import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ShopPage } from "./ShopPage";
import { ProductInfo } from "./components/ProductInfo";

export const RouteSwitch = () => {
  return (
    <HashRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/shop" element={<ShopPage />}/>
                <Route path="/shop/:id" element={<ProductInfo/>}/>
            </Routes>
        </HashRouter>
  )
}
