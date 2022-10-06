import { Box, Heading, Button } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { fieldStyle, inputStyle, useTextInput } from "./useTextInput";
import Select from 'react-select';
import { IPerson } from "./Person";

interface AddPersonProps {
    onAdd: (person: IPerson) => void
}

export const AddPerson = ({onAdd}: AddPersonProps) => {
    const name = useTextInput("Name");
    const firstMet = useTextInput("Met first time");
    const accessories = useTextInput("Accessories");
    const email = useTextInput("Email");
    const hairColor = useTextInput("Hair color");
    const interests = useTextInput("Interests");
    const skinColor = useTextInput("Skin color");

    const [age, setAge] = useState(undefined as undefined | number)
    const handleChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (isNaN(value)) return;
        setAge(value);
    }

    const [gender, setGender] = useState(null as null | {value: string, label: string})
    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

    const [phone, setPhone] = useState(undefined as undefined | number)
    const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (isNaN(value)) return;
        setPhone(value);
    }

    const addPerson = () => {
        const firstMetDate = new Date(firstMet.value)
        onAdd({
            name: name.value,
            created: new Date(),
            firstMet: isNaN(firstMetDate.getTime()) ? firstMet.value : firstMetDate,
            accessories: accessories.value.split(","),
            age,
            email: email.value,
            gender: gender?.value,
            hairColor: hairColor.value,
            interests: interests.value.split(","),
            phone,
            skinColor: skinColor.value
        })

        name.clear()
        firstMet.clear()
        accessories.clear()
        setAge(undefined)
        email.clear()
        setGender(null)
        hairColor.clear()
        interests.clear()
        setPhone(undefined)
        skinColor.clear()

        console.log("person added")
    }
    
    
    return (
        <Box textAlign='center' fontSize='xl' style={{display: "flex", flexDirection: "column"}}>
            <Heading>Add person</Heading>
            {name.node}
            {firstMet.node}
            {accessories.node}
            {email.node}
            <div style={fieldStyle}>
                <label>Age</label>
                <input 
                    type="number"
                    style={inputStyle}
                    value={age}
                    onChange={handleChangeAge}
                />
            </div>
            <div style={fieldStyle}>
                <label>Gender</label>
                <Select
                    defaultValue={gender}
                    onChange={setGender}
                    options={options}
                />
            </div>
            {hairColor.node}
            {interests.node}
            {skinColor.node}
            <div style={fieldStyle}>
                <label>Phone</label>
                <input 
                    type="tel"
                    pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                    value={phone}
                    onChange={handleChangePhone}
                />
            </div>
            <Button onClick={addPerson}>Add</Button>
        </Box>
    );
}