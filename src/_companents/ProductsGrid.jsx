

import Container from "./Container";
import ProductsGridİtem from "./ProductsGridİtem";




export default function ProductsGrid (){
    return (
       <section>
            <Container className='p-20'>
                <div className="grid grid-cols-4">
                    <ProductsGridİtem/>
                </div>
            </Container>
       </section>
    );
}