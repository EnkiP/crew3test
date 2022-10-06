import { Box, Heading } from "@chakra-ui/react";
import { PersonItem } from "./PersonItem";
import { IPerson } from "./Person";

interface PeopleProps {
    people: IPerson[]
}

export const PeopleList = ({people}: PeopleProps) => {
    return (
        <Box textAlign='center' fontSize='xl' style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <Heading>List of people</Heading>
            {people.map((person: IPerson) => <PersonItem person={person}/>)}
        </Box>
    );
}