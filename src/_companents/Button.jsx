import { BsCart3 } from "react-icons/bs";
import Flex from "./Flex";
export default function Button ({prefix, suffix, ...props}) {
    return (
        <Flex as='button' gap={8} className="border border-black p-[6px_12px] rounded-md">
            {props.prefix ? props.prefix : null}
            <span>{props.children}</span>
            {props.suffix ? props.suffix: null}
        </Flex>
    )
}