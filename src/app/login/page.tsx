'use client'

import { LoginForm } from './_components/login-form'
import { Card, LoginContainer } from './styles'

export default function LoginPage() {
  return (
    <LoginContainer>
      <Card>
        <LoginForm />
      </Card>
    </LoginContainer>
  )
}
