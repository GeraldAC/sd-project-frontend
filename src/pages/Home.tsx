import CardHorizontal from '@/components/common/CardHorizontal'
import Layout from '@/layouts/Layout'
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

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Layout>
      <VStack gap="6" mt={'1'}>
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
            icon={<LuImagePlus color="tomato" fontSize="lg" />}
            description="Precios"
          />
          <PromptButton
            icon={<LuCode color="tomato" fontSize="lg" />}
            description="Ubicaciones"
          />
          <PromptButton
            icon={<LuChartArea color="tomato" fontSize="lg" />}
            description="Tipos"
          />
          <PromptButton
            icon={<LuPartyPopper color="tomato" fontSize="lg" />}
            description="Productores  "
          />
        </HStack>
        <SimpleGrid columns={2} gap="40px">
          <CardHorizontal />
          <CardHorizontal />
        </SimpleGrid>
      </VStack>
    </Layout>
  )
}

export default Home

interface PromptButtonProps {
  icon?: React.ReactElement
  description: string
}

function PromptButton(props: PromptButtonProps) {
  const { icon, description } = props
  return (
    <Button colorPalette={'orange'} variant="ghost" borderRadius="full">
      {icon}
      <Span color="fg.muted">{description}</Span>
    </Button>
  )
}
