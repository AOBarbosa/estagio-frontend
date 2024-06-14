import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  width: 100%;
  gap: 4rem;
  background-color: #0f172a;
  color: #f1f5f9;
`
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`

export const SalesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: auto;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #1a2335;
  color: #f1f5f9;
`

export const SaleCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f1f5f9;
  color: #0f172a;
`

export const SaleInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const IdSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: #cbd5e1;
  color: #0f172a;
`

export const CustomerNameSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 2rem;
  padding: 0 0.25rem;
  border-radius: 0.5rem;
  background-color: #cbd5e1;
  color: #0f172a;
`

export const ProductSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2rem;
  padding: 0 0.25rem;
  border-radius: 0.5rem;
  background-color: #cbd5e1;
  color: #0f172a;
`

export const SalePriceSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2rem;
  padding: 0 0.25rem;
  border-radius: 0.5rem;
  background-color: #cbd5e1;
  color: #0f172a;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const SalesActionButtons = styled.button`
  height: 2rem;
  width: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  border-style: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;
  background-color: #cbd5e1;
  color: #0f172a;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
`
