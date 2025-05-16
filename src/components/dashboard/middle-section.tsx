import {
  Button,
  Center,
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  SimpleGrid,
  Span,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  LuChartArea,
  LuCode,
  LuEthernetPort,
  LuImagePlus,
  LuPartyPopper,
  LuSearch,
} from 'react-icons/lu'
import CardHorizontal from '../common/CardHorizontal'

interface PromptButtonProps {
  icon?: React.ReactElement
  description: string
}

function PromptButton(props: PromptButtonProps) {
  const { icon, description } = props
  return (
    <Button variant="outline" borderRadius="full">
      {icon}
      <Span color="fg.subtle">{description}</Span>
    </Button>
  )
}

export function MiddleSection() {
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <VStack gap="6">
      <Heading size="3xl">¿Qué productos está buscando?</Heading>
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
            onChange={handleInputValue}
          />
        </InputGroup>
      </Center>

      <HStack gap="2">
        <PromptButton
          icon={<LuImagePlus color="green.500" fontSize="lg" />}
          description="Precios"
        />
        <PromptButton
          icon={<LuCode color="blue.500" fontSize="lg" />}
          description="Ubicaciones"
        />
        <PromptButton
          icon={<LuChartArea color="cyan.400" fontSize="lg" />}
          description="Tipos"
        />
        <PromptButton
          icon={<LuPartyPopper color="cyan.400" fontSize="lg" />}
          description="Productores  "
        />
        <PromptButton description="Más" />
      </HStack>
      <SimpleGrid columns={2} gap="40px">
        <CardHorizontal />
        <CardHorizontal />
        <CardHorizontal />
        <CardHorizontal />
      </SimpleGrid>
    </VStack>
  )
}
