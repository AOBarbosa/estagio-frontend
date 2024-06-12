'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormContainer, Input, Label, SubmitButton, Title } from './styles'

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Endereço de e-mail inválido!' }),
  password: z
    .string()
    .min(8, { message: 'A senha precisa ter pelo menos 8 caracteres' }),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { isLoading },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  function handleLogin({ email, password }: LoginFormSchema) {
    console.log(JSON.stringify({ email, password }, null, 2))
  }
  return (
    <>
      <Title>Login</Title>

      <FormContainer onSubmit={handleSubmit(handleLogin)}>
        <Label>
          E-mail
          <Input
            type="email"
            required
            placeholder="seu@email.com"
            {...register('email')}
          />
        </Label>

        <Label>
          Senha
          <Input
            type="password"
            required
            placeholder="*************"
            {...register('password')}
          />
        </Label>

        <SubmitButton type="submit" disabled={isLoading}>
          Enviar
        </SubmitButton>
      </FormContainer>
    </>
  )
}
