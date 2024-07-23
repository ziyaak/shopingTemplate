import { Link, Navigate, useNavigate } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";
import { BsCart3 } from "react-icons/bs";
import { SiPanasonic } from "react-icons/si";



const navLinks = [
    {
        label: ' Home',
        path: '/',
    },

    {
        label: 'About',
        path: '/about',
    }
]


export default function Header() {
    const navigate = useNavigate();   
    
    
    const buttonSuffix = (
        <Flex inline justifyContent={'center'} 
        className="bg-black w-5 h-5
         text-white
          rounded-full 
           text-[12px]"
        >0</Flex>

    );
    

    
    return (

      

       <header className="h-14">
         <Container flex justifyContent='space-between'  gap={24}>
            <div className="text-[20px]">
                <Link to='/'>Start Bootstrap</Link>
            </div>
            <nav className="grow">
                <Flex gap={6} >
                    {navLinks.map(({label, path}, idx) => (
                        <Link key={idx} to ={path} className="p-2">{label}</Link>
                    ))}
                </Flex>
            </nav>
            <div>
                <Button
                    prefix={<BsCart3/>}
                    suffix={buttonSuffix}
                    onClick={()=> navigate('/cart', {replace:true})}
                >
                    Cart
                    </Button>
            </div>
         </Container>
       </header>
    )
}