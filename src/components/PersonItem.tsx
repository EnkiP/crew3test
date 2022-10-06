import { Box } from "@chakra-ui/react";
import { IPerson } from "./Person";
import { fieldStyle} from "./useTextInput";

interface PersonProps {
    person: IPerson
}

export const PersonItem = ({person}: PersonProps) => {
    const field = (name: string, value: string | number | undefined) => {
        if (!value) return <></>
        return <div style={{...fieldStyle, margin: "5px"}}>
            <label>{name}:&nbsp;</label>
            <div>{value}</div>
        </div>
    }
    
    return (
        <Box textAlign='center' fontSize='xl' style={{display: "flex"}}>
            {field("name", person.name)}
            {field("age", person.age)}
            {field("gender", person.gender)}
            {field("hairColor", person.hairColor)}
            {field("skinColor", person.skinColor)}
        </Box>
    );
}