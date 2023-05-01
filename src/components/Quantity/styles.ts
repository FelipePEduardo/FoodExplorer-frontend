import styled from "styled-components"

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > button {
    background: 0;
    border: 0;
    line-height: 0;
    cursor: pointer;
  }

  @media(min-width: 1160px) {
    flex-direction: row;
    justify-content: center;
  }
`