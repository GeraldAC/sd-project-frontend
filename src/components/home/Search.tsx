import {
  Center,
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
  IconButton,
  Input,
  InputGroup,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { LuEthernetPort, LuSearch } from 'react-icons/lu'

const Search = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Center>
      <InputGroup
        minW="768px"
        startElement={
          <FileUploadRoot>
            <FileUploadTrigger asChild>
              <LuSearch fontSize="2xl" color="fg" />
            </FileUploadTrigger>
            <FileUploadList />
          </FileUploadRoot>
        }
        endElement={
          <IconButton
            fontSize="2xl"
            size="sm"
            borderRadius="full"
            disabled={inputValue.trim() === ''}
          >
            <LuEthernetPort fontSize="2xl" />
          </IconButton>
        }
      >
        <Input
          placeholder="Buscar..."
          variant="subtle"
          size="lg"
          borderRadius="3xl"
          value={inputValue}
          colorPalette={'brand'}
          onChange={handleInputValue}
        />
      </InputGroup>
    </Center>
  )
}

export default Search
