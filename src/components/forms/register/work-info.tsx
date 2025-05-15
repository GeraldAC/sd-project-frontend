'use client'

import { Button, Field, HStack, Input, Stack, Steps } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

interface FormValues {
  jobTitle: string
  company: string
  yearsOfExperience: string
}

const formSchema = z.object({
  jobTitle: z.string().min(2, { message: 'Se requiere un tipo de trabajo' }),
  company: z
    .string()
    .min(2, { message: 'Se requiere un nombre de asociación' }),
  yearsOfExperience: z
    .string()
    .min(1, { message: 'Indique sus años de experiencia' }),
})

interface WorkInfoFormProps {
  onSubmit?: (data: FormValues) => void
}

export function WorkInfo(props: WorkInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    props.onSubmit?.(data)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4">
        <Field.Root invalid={!!errors.jobTitle}>
          <Field.Label>Tipo de comercio</Field.Label>
          <Input {...register('jobTitle')} />
          <Field.ErrorText>{errors.jobTitle?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.company}>
          <Field.Label>Asociación</Field.Label>
          <Input {...register('company')} />
          <Field.ErrorText>{errors.company?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.yearsOfExperience}>
          <Field.Label>Años de experiencia</Field.Label>
          <Input {...register('yearsOfExperience')} />
          <Field.ErrorText>{errors.yearsOfExperience?.message}</Field.ErrorText>
        </Field.Root>

        <HStack gap="4">
          <Steps.PrevTrigger asChild flex="1">
            <Button variant="outline">Anterior</Button>
          </Steps.PrevTrigger>

          <Button type="submit" flex="1">
            Siguiente
          </Button>
        </HStack>
      </Stack>
    </form>
  )
}
