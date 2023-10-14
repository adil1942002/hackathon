// import * as React from 'react';
import { TextField } from "@mui/material"
type propsARType = {
    type?: "text" | "number" | "file" | "password" | "email" | "date",
    style?: {}
    styleTheem?: "light" | "dark"
    value?: any
    label?:string
    onChange?:any
    disabled?:any
    variant?: "outlined" | "filled" |"standard"
}

export default function ARInput(props: propsARType) {
    const { disabled,label,type,onChange,style, styleTheem, value,variant } = props
    return <>
        <TextField
        disabled= {disabled}
            variant={variant}
            style={style ? style
                : styleTheem == "light" ? {}
                    : {}
            }
            type={type??'text'}
          placeholder={label}
            value={value}
            onChange={onChange}
        />
    </>
}


// type propsType = {
//     label: string;
//     onChange?: any;
//     type?: string;
//     value?: any;
// };

// export default function BAInput(props: propsType) {
//     const { label, onChange, type, value } = props;
//     return (
//         <input
//             className="p-3   outline-none  "
//             placeholder={label}
//             value={value}
//             onChange={onChange}
//             type={type ?? "text"}
//         />
//     );
// }