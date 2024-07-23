import Button from "./Button"
import Flex from "./Flex"


export default () => {
    return (
        <article className="border border-[#bbb] rounded-lg overflow-hidden">
            <div className="">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            </div>
            <Flex justifyContent={'center'} direction={'column'} gap={8}>
                <h3>Name</h3>
                <span>$40.00 - $80.00</span>
                <Button>Add to cart</Button>
            </Flex>
        </article>
    )
}