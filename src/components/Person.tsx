import { Box } from "@chakra-ui/react";
import { fieldStyle} from "./useTextInput";

export interface IPerson {
    name: string,
    created: Date,
    firstMet?: Date | string,
    accessories: Array<string>,
    age?: number,
    email?: string,
    gender?: string,
    hairColor: string,
    interests: Array<string>,
    phone?: number,
    skinColor: string
}

interface PersonProps {
    person: IPerson
}

export const Person = ({person}: PersonProps) => {
    const field = (name: string, value: string | number | undefined) => {
        return <div style={fieldStyle}>
            <label>{name}</label>
            <div>{value}</div>
        </div>
    }
    
    return (
        <Box textAlign='center' fontSize='xl' style={{display: "flex", flexDirection: "column"}}>
            {field("name", person.name)}
            {field("created", person.created.toLocaleDateString("fr-FR"))}
            {field("firstMet", 
                person.firstMet instanceof Date ? 
                    person.firstMet.toLocaleDateString("fr-FR") :
                    person.firstMet
            )}
            {field("accessories", person.accessories.join(", "))}
            {field("age", person.age)}
            {field("email", person.email)}
            {field("gender", person.gender)}
            {field("hairColor", person.hairColor)}
            {field("interests", person.interests.join(", "))}
            {field("phone", person.phone)}
            {field("skinColor", person.skinColor)}
        </Box>
    );
}