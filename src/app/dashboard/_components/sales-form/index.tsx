import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { api } from '@/lib/axios'

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
  customer_name: z.string(),
  product: z.string(),
  price: z.number(),
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
    try {
      const response = await api.post('api/sales', {
        customer_name: getValues('customer_name'),
        product: getValues('product'),
        price: getValues('price'),
      })

      if (response.status === 201) {
        setIsListUpdated(!isListUpdated)
        reset()
      }
    } catch (error) {
      alert(error)
    }
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
            <NumberInput
              type="number"
              {...register('price', { valueAsNumber: true })}
            />
          </Label>

          <CreateSaleButton type="submit">
            <Plus />
          </CreateSaleButton>
        </InputsContainer>
      </FormContainer>
    </form>
  )
}
