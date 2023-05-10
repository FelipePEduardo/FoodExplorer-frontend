import styled, { DefaultTheme } from "styled-components";

interface MarkersContainerProps {
  theme: DefaultTheme
  isNew?: boolean
}

export const MarkersContainer = styled.div<MarkersContainerProps>`
  max-width: 13rem;
  height: 3.2rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  padding: 0.8rem 1.6rem;

  background: ${({ theme, isNew }) => isNew ? "transparent": theme.colors["light-600"]};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.colors["light-500"]}`: "none"};

  border-radius: 8px;

  &:has(input:focus) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["cake-100"]};
  }

  input {
    width: 100%;
    background: transparent;
    border: 0;

    color: ${({theme}) => theme.colors["light-100"]};

    &::placeholder {
      color: ${({theme}) => theme.colors["light-500"]};
    }

    box-shadow: none;
  }

  button {
    border: 0;
    background: transparent;
    line-height: 0;

    cursor: pointer;
  }
`