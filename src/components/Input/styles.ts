import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors["dark-900"]};
  
  padding: 1.2rem 1.4rem;

  border-radius: 8px;
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors["light-500"]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["cake-100"]};
  }
`
