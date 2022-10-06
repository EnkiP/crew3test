import { ChangeEvent, ReactNode, useState } from "react";

interface TextInputData {
    node: ReactNode,
    value: string,
    clear: () => void,
}

export const fieldStyle = {
    display: "flex",
    width: '100%',
    justifyContent: "space-between",
    margin: "6px 0"
}

export const inputStyle = {
    border: "1px solid black", 
    padding: "0 6px"
}

export const useTextInput = (name: string): TextInputData => {
    const [value, setValue] = useState("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const node = <div style={fieldStyle}>
        <label>{name}</label>
        <input 
            style={inputStyle}
            value={value} 
            onChange={handleChange} 
            type="text"
        />
    </div>

    return {
        node, value, clear: () => setValue("")
    }
}