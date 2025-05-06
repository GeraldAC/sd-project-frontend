'use client'

import { Button, Field, Input, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PasswordInput } from '@/components/ui/password-input'

interface FormValues {
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
  password: string
}

const formSchema = z.object({
  firstName: z
    .string()
    .nonempty({ message: 'El nombre es obligatorio.' })
    .min(1, { message: 'Por favor, introduzca su nombre.' }),

  lastName: z
    .string()
    .nonempty({ message: 'Los apellidos son obligatorios.' })
    .min(1, { message: 'Por favor, introduzca sus apellidos.' }),

  emailAddress: z
    .string()
    .nonempty({ message: 'El correo electrónico es obligatorio.' })
    .email('Por favor, introduce un correo electrónico válido.'),

  phoneNumber: z
    .string()
    .nonempty({ message: 'El número de teléfono es obligatorio.' })
    .min(9, {
      message:
        'Por favor, introduzca un número de teléfono válido (al menos 9 dígitos).',
    }),

  password: z
    .string()
    .nonempty({ message: 'La contraseña es obligatoria.' })
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
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

        <Field.Root invalid={!!errors.phoneNumber}>
          <Field.Label>Número de teléfono</Field.Label>
          <Input {...register('phoneNumber')} />
          <Field.ErrorText>{errors.phoneNumber?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.emailAddress}>
          <Field.Label>Correo electrónico</Field.Label>
          <Input type="email" {...register('emailAddress')} />
          <Field.ErrorText>{errors.emailAddress?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
          <Field.Label>Contraseña</Field.Label>
          <PasswordInput {...register('password')} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Siguiente</Button>
      </Stack>
    </form>
  )
}
