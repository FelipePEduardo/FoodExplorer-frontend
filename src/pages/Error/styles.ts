import styled from "styled-components";

export const ErrorContainer = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    font-size: 12rem;
    color: ${({theme}) => theme.colors["cake-100"]};
  }

  p {
    font-size: 2.4rem;
    margin-bottom: 4rem;
  }

  button {
    max-width: 30rem;
    height: 6rem;
  }
`