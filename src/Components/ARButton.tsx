import { Button } from '@mui/material';
type propsType = {
    label?: string,
    onClick?:any,
    style?:any
    // theme?: "light" | "dark",
    color?: "error" | "info" | "inherit" | "primary" | "secondary" | "success" | "warning"
}
export default function ARButton(props: propsType) {
    const { style,label, onClick, color } = props

    return <>
        <Button
        
            variant={'contained'}
            color={color}
            style={ style
                // theme == "dark" ?
                //     { backgroundColor: "darkblue" }
                //     : { backgroundColor: "lightseagreen" }
            }
            onClick={onClick}>{label}</Button>
    </>
}