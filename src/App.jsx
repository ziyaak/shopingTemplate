
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import RootLayout from './_pages/RootLayout';
import CartPage from "./_pages/CartPage";
import HomePage from "./_pages/HomePage";
import ProductDetail from "./_pages/ProductDetail";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout/>}> 
                <Route index element={<HomePage/>}/>
                <Route path='cart' element={<CartPage/>} />
                <Route path='product/:id' element={<ProductDetail/>} />
                </Route>
                <Route path="*" element={<div>Not Found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}