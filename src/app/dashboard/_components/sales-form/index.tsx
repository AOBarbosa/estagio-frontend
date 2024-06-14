import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  CreateSaleButton,
  FormContainer,
  InputsContainer,
  Label,
  NumberInput,
  TextInput,
} from './styles'

interface SalesFormComponentProps {
  setIsListUpdated: Dispatch<SetStateAction<boolean>>
  isListUpdated?: boolean
}

const salesFormSchema = z.object({
  id: z.number(),
  customer_name: z.string(),
  product: z.string(),
  price: z.number().min(1),
})

type SalesFormSchema = z.infer<typeof salesFormSchema>

export default function SalesForm({
  isListUpdated,
  setIsListUpdated,
}: SalesFormComponentProps) {
  const { handleSubmit, register, getValues, reset } = useForm<SalesFormSchema>(
    {
      resolver: zodResolver(salesFormSchema),
    },
  )

  async function handleCreateSale() {
    console.log('entrou')
    await fetch('http://localhost:3000/api/sales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_name: getValues('customer_name'),
        product: getValues('product'),
        price: getValues('price'),
      }),
    }).then(() => {
      setIsListUpdated(!isListUpdated)

      reset()
    })
  }

  return (
    <form onSubmit={handleSubmit(handleCreateSale)}>
      <FormContainer>
        <InputsContainer>
          <Label>
            Nome do Cliente
            <TextInput type="text" {...register('customer_name')} />
          </Label>

          <Label>
            Produto
            <TextInput type="text" {...register('product')} />
          </Label>

          <Label>
            Valor
            <NumberInput type="number" {...register('price')} />
          </Label>

          <CreateSaleButton type="submit">
            <Plus />
          </CreateSaleButton>
        </InputsContainer>
      </FormContainer>
    </form>
  )
}
