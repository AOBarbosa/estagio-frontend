import { Plus } from 'lucide-react'

import {
  CreateSaleButton,
  FormContainer,
  InputsContainer,
  Label,
  NumberInput,
  TextInput,
} from './styles'

export default function SalesForm() {
  return (
    <>
      <FormContainer>
        <InputsContainer>
          <Label>
            Nome do Cliente
            <TextInput type="text" /> {/* Nome do Cliente */}
          </Label>

          <Label>
            Produto
            <TextInput type="text" /> {/* Produto */}
          </Label>

          <Label>
            Valor
            <NumberInput type="number" /> {/* Valor da Venda */}
          </Label>

          <CreateSaleButton type="submit">
            <Plus />
          </CreateSaleButton>
        </InputsContainer>
      </FormContainer>
    </>
  )
}
