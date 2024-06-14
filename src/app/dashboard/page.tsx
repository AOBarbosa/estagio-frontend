'use client'

import { Pencil, Trash } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Title } from '../home/styles'
import SalesForm from './_components/sales-form'
import {
  ButtonsContainer,
  Container,
  CustomerNameSpan,
  DeleteSaleButton,
  EditSaleButton,
  IdSpan,
  MainContainer,
  ProductSpan,
  SaleCard,
  SaleInfo,
  SalePriceSpan,
  SalesList,
} from './styles'

interface SalesProps {
  id: number
  customer_name: string
  product: string
  price: number
}

export default function Dashboard() {
  const [sales, setSales] = useState<SalesProps[]>([])
  const [isListUpdated, setIsListUpdated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  async function getSales() {
    await fetch('http://localhost:3000/api/sales')
      .then((response) => {
        return response.json()
      })
      .then((data: SalesProps[]) => {
        setSales(data)
        setIsLoading(!isLoading)
      })
  }

  async function handleDeleteSale(id: number) {
    await fetch(`http://localhost:3000/api/sales?id=${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setIsListUpdated(!isListUpdated)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getSales()
  }, [isListUpdated])

  return (
    <Container>
      <Title>Dashboard</Title>

      <MainContainer>
        <SalesForm
          setIsListUpdated={setIsListUpdated}
          isListUpdated={isListUpdated}
        />

        <SalesList>
          {sales.map((sale) => {
            return (
              <SaleCard key={sale.id}>
                <SaleInfo>
                  <IdSpan>{sale.id}</IdSpan>

                  <CustomerNameSpan>{sale.customer_name}</CustomerNameSpan>

                  <ProductSpan>{sale.product}</ProductSpan>

                  <SalePriceSpan>R$ {sale.price}</SalePriceSpan>
                </SaleInfo>

                <ButtonsContainer>
                  <EditSaleButton>
                    <Pencil />
                  </EditSaleButton>

                  <DeleteSaleButton onClick={() => handleDeleteSale(sale.id)}>
                    <Trash />
                  </DeleteSaleButton>
                </ButtonsContainer>
              </SaleCard>
            )
          })}
        </SalesList>
      </MainContainer>
    </Container>
  )
}
