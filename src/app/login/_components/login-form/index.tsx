'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { api } from '@/lib/axios'

import { FormContainer, Input, Label, SubmitButton, Title } from './styles'

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Endereço de e-mail inválido!' }),
  password: z
    .string()
    .min(8, { message: 'A senha precisa ter pelo menos 8 caracteres' }),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    getValues,
    formState: { isLoading },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin() {
    const response = await api.post('/api/auth', {
      email: getValues('email'),
      password: getValues('password'),
    })

    const { token } = response.data

    localStorage.setItem('jwt', token)

    router.push('/home')

    // try {
    //   await fetch('http://localhost:3000/api/auth', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: getValues('email'),
    //       password: getValues('password'),
    //     }),
    //   }).then((response) => {
    //     if (response.status === 200) {
    //       redirect('/home')
    //     }
    //   })
    // } catch (error) {
    //   alert('Erro ao fazer login!')
    // }
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
