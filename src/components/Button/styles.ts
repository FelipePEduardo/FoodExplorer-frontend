import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${({ theme }) =>theme.colors["tomato-100"]};
  border: 0;
  border-radius: 4px;
  padding: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  font-size: 1.4rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;

  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${({ theme }) =>theme.colors["tomato-200"]};
  }

  &:disabled {
    background-color: ${({ theme }) =>theme.colors["tomato-400"]};
    cursor: not-allowed;
  }
`