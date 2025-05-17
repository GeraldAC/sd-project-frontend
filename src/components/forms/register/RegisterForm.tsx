'use client'

import { Steps } from '@chakra-ui/react'
import { PersonalInfo } from './personal-info'
import { WorkInfo } from './work-info'
import { MoreDetails } from './more-details'
import { useState } from 'react'

const steps = [
  { title: 'Personal', id: 'info-personal' },
  {
    title: 'Laboral',
    id: 'info-trabajo',
  },
  {
    title: 'Más detalles',
    id: 'mas-detalles',
  },
]

const RegisterForm = () => {
  const [step, setStep] = useState(0)

  const goToNextStep = () => {
    setStep(step + 1)
  }

  return (
    <Steps.Root
      size={'lg'}
      colorPalette={'orange'}
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
  )
}

export default RegisterForm
