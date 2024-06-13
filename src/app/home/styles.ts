import styled from 'styled-components'

export const HomePageContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  gap: 4rem;
  color: #0f172a;
`
export const Header = styled.header`
  width: 70rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 3.75rem; /* 60px */
  line-height: 1;
  margin-bottom: 1rem;
`

export const LogoutButton = styled.button`
  height: 2.25rem;
  width: 6rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem; /* md */
  border-style: none;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* medium */
  transition: color 0.3s;
  cursor: pointer;
  color: #f1f5f9;
  background-color: #f23d3d;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`

export const Container = styled.main`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`

export const WelcomeSpan = styled.span`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
`

export const RedirectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const RedirectButton = styled.button`
  height: 2.25rem;
  width: 10rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem; /* md */
  border-style: none;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* medium */
  transition: color 0.3s;
  cursor: pointer;
  color: #f1f5f9;
  background-color: #0f172a;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`
