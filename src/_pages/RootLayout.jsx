import { Outlet } from "react-router-dom";
import Header from "../_companents/Header";
import Footer from "../_companents/Footer";



export default function RootLayout() {
    
    return( 
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}