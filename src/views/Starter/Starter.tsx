import { Box, Button, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AddPerson } from "../../components/AddPerson";
import { PeopleList } from "../../components/PeopleList";
import { IPerson } from "../../components/Person";
import { useLocalStorage } from "../../components/useLocalStorage";
import { useTextInput } from "../../components/useTextInput";

export const Starter = () => {
  const [people, setPeople] = useLocalStorage("people", []);
  const [searchResults, setSearchResults] = useState([] as IPerson[]);

  const search = useTextInput("search");

  const clearPeople = () => {
    setPeople([])
  }

  const addPerson = (person: IPerson) => {
    setPeople([...people, person])
  }

  useEffect(() => {
    if (!search.value) {
      setSearchResults(people)
      return
    }
    const words = search.value.split(" ")
    const newResults: {person: IPerson, matches: number}[] = people.map((person: IPerson) => { 
      let matches = 0
      words.forEach((word) => {
        if (`${person.name}
          ${person.firstMet}
          ${person.accessories}
          ${person.age}ans
          ${person.gender}
          ${person.hairColor}
          ${person.interests}
          ${person.skinColor}
          `.includes(word)
        ) {
          matches ++
        }
      })
      return {person, matches}
    })

    setSearchResults(newResults
      .filter(({matches}) => matches > 0).sort((a, b) => a.matches - b.matches)
      .map(({person}) => person)
    )
  }, [people, search.value]); 

  return (
    <Box textAlign='center' fontSize='xl'>
      <VStack spacing={4}>
        <div>
          {search.node}
        </div>
        <PeopleList people={searchResults}/>
        <AddPerson onAdd={addPerson}/>
        <Button onClick={clearPeople}>Clear List</Button>
      </VStack>
    </Box>
  );

};
