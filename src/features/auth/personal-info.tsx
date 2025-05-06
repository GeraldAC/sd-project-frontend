'use client'

import { Button, Field, Input, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface FormValues {
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
}

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'Por favor, introduzca su nombre' }),
  lastName: z
    .string()
    .min(1, { message: 'Por favor, introduzca sus apellidos' }),
  emailAddress: z
    .string()
    .email('Por favor, introduce un correo electrónico válido.'),
  phoneNumber: z
    .string()
    .min(9, { message: 'Por favor, introduzca un número de teléfono válido' }),
})

interface PersonalInfoFormProps {
  onSubmit?: (data: FormValues) => void
}
export function PersonalInfo(props: PersonalInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    props.onSubmit?.(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4">
        <Field.Root invalid={!!errors.firstName}>
          <Field.Label>Nombres</Field.Label>
          <Input {...register('firstName')} />
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.lastName}>
          <Field.Label>Apellidos</Field.Label>
          <Input {...register('lastName')} />
          <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.emailAddress}>
          <Field.Label>Correo electrónico</Field.Label>
          <Input type="email" {...register('emailAddress')} />
          <Field.ErrorText>{errors.emailAddress?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.phoneNumber}>
          <Field.Label>Número de teléfono</Field.Label>
          <Input {...register('phoneNumber')} />
          <Field.ErrorText>{errors.phoneNumber?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Siguiente</Button>
      </Stack>
    </form>
  )
}
