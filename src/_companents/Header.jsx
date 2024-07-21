import { Link } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";

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
    return (
       <header className="h-14">
         <Container flex justifyContent='space-between' className="h-full" gap={24}>
            <div className="text-[20px]">
                <Link to='/'>Start Bootstrap</Link>
            </div>
            <nav className="grow">
                <Flex gap={6} >
                    {navLinks.map(({label, path}) => (
                        <Link to ={path} className="p-2">{label}</Link>
                    ))}
                </Flex>
            </nav>
            <div>
                <Button>salam</Button>
            </div>
         </Container>
       </header>
    )
}