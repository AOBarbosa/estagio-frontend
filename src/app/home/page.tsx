'use client'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import {
  Container,
  Header,
  HomePageContainer,
  LogoutButton,
  RedirectButton,
  RedirectContainer,
  Title,
  WelcomeSpan,
} from './styles'

export default function HomePage() {
  const router = useRouter()

  function handleRedirectToDashboard() {
    router.push('/dashboard')
  }

  function handleLogout() {
    router.push('/login')
  }

  return (
    <HomePageContainer>
      <Header>
        <Title>Olá, andre@dev.com!</Title>

        <LogoutButton onClick={handleLogout}>
          Logout
          <LogOut />
        </LogoutButton>
      </Header>

      <Container>
        <WelcomeSpan>
          Bem-vindo ao nosso sistema de gerenciamento de vendas!
        </WelcomeSpan>

        <WelcomeSpan>
          Simplifique suas operações, maximize seus lucros e leve seu negócio ao
          próximo nível.
        </WelcomeSpan>

        <RedirectContainer>
          <WelcomeSpan>
            Para acessar a página de gerenciamento, clique no botão abaixo.
          </WelcomeSpan>

          <RedirectButton onClick={handleRedirectToDashboard}>
            Gerenciar Vendas
          </RedirectButton>
        </RedirectContainer>
      </Container>
    </HomePageContainer>
  )
}
