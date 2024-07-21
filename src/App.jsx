
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import RootLayout from './_pages/RootLayout';
import CartPage from "./_pages/CartPage";
import HomePage from "./_pages/HomePage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout/>}> 
                <Route index element={<HomePage/>}/>
                <Route path='cart' element={<CartPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}