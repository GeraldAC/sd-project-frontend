'use client'

import { Button, Field, Icon, Input, InputGroup, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LuLock, LuUser } from 'react-icons/lu'
import { PasswordInput } from '@/components/ui/password-input'

interface FormValues {
  emailAddress: string
  password: string
}

const formSchema = z.object({
  emailAddress: z
    .string()
    .nonempty({ message: 'El correo electrónico es obligatorio.' })
    .email('Por favor, introduce un correo electrónico válido.'),
  password: z
    .string()
    .nonempty({ message: 'La contraseña es obligatoria.' })
    .min(5, { message: 'La contraseña debe tener al menos 5 caracteres.' }),
})

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4">
        <Field.Root invalid={!!errors.emailAddress}>
          <Field.Label>Correo electrónico</Field.Label>
          <InputGroup
            startElement={
              <Icon size="md" color={'brand.500'}>
                <LuUser />
              </Icon>
            }
          >
            <Input type="email" {...register('emailAddress')} />
          </InputGroup>

          <Field.ErrorText>{errors.emailAddress?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
          <Field.Label>Contraseña</Field.Label>
          <InputGroup
            startElement={
              <Icon size="md" color={'brand.500'}>
                <LuLock />
              </Icon>
            }
          >
            <PasswordInput {...register('password')} />
          </InputGroup>
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Iniciar sesión</Button>
      </Stack>
    </form>
  )
}

export default LoginForm
