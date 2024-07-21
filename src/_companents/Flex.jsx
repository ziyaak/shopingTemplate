const flexStyles = (props) => ({
    display: props.inline ? 'inline-flex' : 'flex',
    flexDirection: props.direction,
    alignİtems: props.alignİtems,
    justifyContent: props.justifyContent,
    gap: props.gap ? props.gap+'px' : undefined,
});


export default function Flex (
    {
       
        alignİtems = 'center',
        justifyContent,
        direction,
        gap,
        ...props
    }
) { 
    const AsElement = props.as ??   "div";


    return(
      
        <AsElement className={props.className} style={flexStyles( {alignİtems, justifyContent, direction, gap})}>
            {props.children}
        </AsElement>
    )

}
