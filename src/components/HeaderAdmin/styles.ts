import styled from "styled-components";

export const HeaderAdminContainer = styled.header`
  background: ${({ theme }) => theme.colors["dark-700"]};
  padding: 5.6rem 2.8rem 2.4rem;

  @media(min-width: 1160px) {
    padding: 2.8rem;
  }
`

export const HeaderAdminContent = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  gap: 3.2rem;
  justify-content: space-between;

  @media(min-width: 1160px) {
    max-width: 112rem;
    width: 100%;
    margin: 0 auto;

    justify-content: initial;
    gap: 3.2rem;
  }
`

export const MenuButton = styled.button`
  background: 0;
  border: 0;

  cursor: pointer;

  @media(min-width: 1160px) {
    display: none;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  > div { 
    img {
      max-width: 2.4rem;
    }

    span {
      font-size: 2.1rem;
      font-weight: 700;
    }
  }

  > span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["cake-200"]};
  }

  @media(min-width: 1160px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
  }
`

export const InputContainer = styled.div`
  display: none;
  
  background: ${({ theme }) => theme.colors["dark-900"]};
  padding: 1.2rem 1.4rem;
  border-radius: 8px;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["cake-100"]};
  }

  &:has(input:focus) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["cake-100"]};
  }

  svg {
    margin-left: 15rem;
  }

  input {
    width: 100%;

    background: 0;
    border: 0;
    box-shadow: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors["light-500"]};
    }
  }

  @media(min-width: 1160px) {
    flex: 1;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
  }
`

export const RequestsButton = styled.button`
  background: 0;
  border: 0;

  cursor: pointer;

  position: relative;

  > span {
    display: none;
  }

  @media(min-width: 1160px) {
    background: ${({ theme }) => theme.colors["tomato-100"]};
    padding: 1.2rem 4.6rem;
    border-radius: 4px;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    &:hover {
      background: ${({ theme }) => theme.colors["tomato-200"]};
    }

    span {
      display: inline;
    }
  }
`

export const SignOutContainer = styled.button`
  background: 0;
  border: 0;
  line-height: 0;

  cursor: pointer;

  display: none;

  &:hover {
    opacity: 0.8;
  }

  @media(min-width: 1160px) {
    display: block;
  }
`