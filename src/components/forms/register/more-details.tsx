'use client'

import {
  Button,
  Field,
  HStack,
  NativeSelect,
  Stack,
  Steps,
  Textarea,
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface FormValues {
  careerGoal: string
  learningStyle: string
}

const formSchema = z.object({
  careerGoal: z
    .string()
    .min(2, { message: 'Se requiere un objetivo profesional' }),
  learningStyle: z
    .string()
    .min(2, { message: 'Por favor, seleccione un estilo de aprendizaje' }),
})

interface MoreDetailsFormProps {
  onSubmit?: (data: FormValues) => void
}

export function MoreDetails(props: MoreDetailsFormProps) {
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
        <Field.Root invalid={!!errors.careerGoal}>
          <Field.Label>Objetivo profesional</Field.Label>
          <Textarea {...register('careerGoal')} />
          <Field.ErrorText>{errors.careerGoal?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.learningStyle}>
          <Field.Label>Especialización</Field.Label>

          <NativeSelect.Root size="sm" width="240px">
            <NativeSelect.Field
              placeholder="Seleccione una opción"
              {...register('learningStyle')}
            >
              <option value="independiente">Independiente</option>
              <option value="empresario">Empresario</option>
              <option value="vendedor">Vendedor</option>
              <option value="administrador">Administrador</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
          <Field.ErrorText>{errors.learningStyle?.message}</Field.ErrorText>
        </Field.Root>

        <HStack gap="4">
          <Steps.PrevTrigger asChild flex="1">
            <Button variant="outline">Anterior</Button>
          </Steps.PrevTrigger>

          <Button type="submit" flex="1">
            Enviar
          </Button>
        </HStack>
      </Stack>
    </form>
  )
}
