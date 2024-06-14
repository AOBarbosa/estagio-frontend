import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  justify-content: center;
`

export const Label = styled.label`
  color: #f1f5f9;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
`

export const TextInput = styled.input`
  display: flex;
  height: 2.25rem;
  width: 26rem;
  color: #f1f5f9;
  border-radius: 0.375rem;
  border: 1px solid #f1f5f9;
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: color 0.3s;
  margin-top: 0.5rem;

  &::placeholder {
    color: '#707a83';
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px #f1f5f9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const NumberInput = styled.input`
  display: flex;
  height: 2.25rem;
  width: 100%;
  color: #f1f5f9;
  border-radius: 0.375rem;
  border: 1px solid #f1f5f9;
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: color 0.3s;
  margin-top: 0.5rem;

  &::placeholder {
    color: '#707a83';
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px #f1f5f9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const CreateSaleButton = styled.button`
  height: 2.25rem;
  width: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  margin-top: 1.75rem;
  white-space: nowrap;
  border-radius: 0.375rem; /* md */
  border-style: none;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* medium */
  transition: color 0.3s;
  cursor: pointer;
  color: #0f172a;
  background-color: #f1f5f9;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
`
