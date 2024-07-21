import Flex from "./Flex";



export default function Container({children, ...props}) {
    const classes =["w-[80%] mx-auto ", props.className].join(" ");
    return props.flex ? (
        <Flex {...props} className={classes}>
            {children}
        </Flex>
    ) : (
        <div className={classes}>
            {children}
        </div>
    )

}