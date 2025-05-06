'use client'

import { Box, Heading, Steps } from '@chakra-ui/react'
import { PersonalInfo } from './personal-info'
import { WorkInfo } from './work-info'
import { MoreDetails } from './more-details'
import { useState } from 'react'

const steps = [
  { title: 'Info Personal', id: 'info-personal' },
  {
    title: 'Info Trabajo',
    id: 'info-trabajo',
  },
  {
    title: 'Más detalles',
    id: 'mas-detalles',
  },
]

export function Register() {
  const [step, setStep] = useState(0)

  const goToNextStep = () => {
    setStep(step + 1)
  }

  return (
    <Box padding={5} maxW="600px" mx="auto" mt={'2'}>
      <Heading mb="10" textAlign="center" fontSize={'x-large'}>
        Formulario de Registro
      </Heading>

      <Steps.Root
        size={'lg'}
        colorPalette={'teal'}
        step={step}
        onStepChange={(e) => setStep(e.step)}
        count={steps.length}
      >
        <Steps.List>
          {steps.map((step, index) => (
            <Steps.Item key={index} index={index} title={step.title}>
              <Steps.Indicator />
              <Steps.Title>{step.title}</Steps.Title>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        <Steps.Content index={0}>
          <PersonalInfo
            onSubmit={(data) => {
              goToNextStep()
              console.log(data)
            }}
          />
        </Steps.Content>

        <Steps.Content index={1}>
          <WorkInfo
            onSubmit={(data) => {
              goToNextStep()
              console.log(data)
            }}
          />
        </Steps.Content>

        <Steps.Content index={2}>
          <MoreDetails
            onSubmit={(data) => {
              goToNextStep()
              console.log(data)
            }}
          />
        </Steps.Content>

        <Steps.CompletedContent>Gracias por registrarse</Steps.CompletedContent>
      </Steps.Root>
    </Box>
  )
}
