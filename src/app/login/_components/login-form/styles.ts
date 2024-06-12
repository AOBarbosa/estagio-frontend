import styled from 'styled-components'

export const Title = styled.h1`
  color: #f8fafc;
  font-size: 3.75rem; /* 60px */
  line-height: 1;
  margin-bottom: 1rem;
`

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

export const Label = styled.label`
  color: #f1f5f9;
`

export const Input = styled.input`
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

export const SubmitButton = styled.button`
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem; /* md */
  border-style: none;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* medium */
  transition: color 0.3s;
  cursor: pointer;
  color: #0f172a;

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px var(--ring); /* Ajuste a cor do anel conforme necessário */
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`
