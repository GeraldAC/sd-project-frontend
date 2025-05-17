import { Button, HStack, Span } from '@chakra-ui/react'
import React from 'react'
import { LuChartArea, LuCode, LuImagePlus, LuPartyPopper } from 'react-icons/lu'

const Prompt = () => {
  return (
    <HStack gap="2">
      <PromptButton
        icon={<LuImagePlus color="green" fontSize="lg" />}
        description="Precios"
      />
      <PromptButton
        icon={<LuCode color="green" fontSize="lg" />}
        description="Ubicaciones"
      />
      <PromptButton
        icon={<LuChartArea color="green" fontSize="lg" />}
        description="Tipos"
      />
      <PromptButton
        icon={<LuPartyPopper color="green" fontSize="lg" />}
        description="Productores  "
      />
    </HStack>
  )
}

export default Prompt

interface PromptButtonProps {
  icon?: React.ReactElement
  description: string
}

function PromptButton(props: PromptButtonProps) {
  const { icon, description } = props
  return (
    <Button colorPalette={'green'} variant="ghost" borderRadius="full">
      {icon}
      <Span color="fg.muted">{description}</Span>
    </Button>
  )
}
