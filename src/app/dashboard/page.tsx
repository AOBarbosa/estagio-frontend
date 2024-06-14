'use client'

import { Pencil, Trash } from 'lucide-react'

import { Title } from '../home/styles'
import SalesForm from './_components/sales-form'
import {
  ButtonsContainer,
  Container,
  CustomerNameSpan,
  IdSpan,
  MainContainer,
  ProductSpan,
  SaleCard,
  SaleInfo,
  SalePriceSpan,
  SalesActionButtons,
  SalesList,
} from './styles'

export default function Dashboard() {
  return (
    <Container>
      <Title>Dashboard</Title>

      <MainContainer>
        <SalesForm />

        <SalesList>
          <SaleCard>
            <SaleInfo>
              <IdSpan>id</IdSpan>

              <CustomerNameSpan>
                André de Oliveira Baasdasrbosa
              </CustomerNameSpan>

              <ProductSpan>Item 1</ProductSpan>

              <SalePriceSpan>R$ 90,00</SalePriceSpan>
            </SaleInfo>

            <ButtonsContainer>
              <SalesActionButtons>
                <Pencil />
              </SalesActionButtons>

              <SalesActionButtons>
                <Trash />
              </SalesActionButtons>
            </ButtonsContainer>
          </SaleCard>
        </SalesList>
      </MainContainer>
    </Container>
  )
}
