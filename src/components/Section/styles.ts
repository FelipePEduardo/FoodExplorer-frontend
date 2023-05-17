import styled from "styled-components";

export const SectionContainer = styled.section`
  max-width: 240rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & + & {
    margin-top: 2.4rem;
  }

  > h2 {
    font-size: 1.8rem;
    font-weight: 500;
    font-family: 'Poppins';
    color: ${({ theme }) => theme.colors["light-300"]};

    margin-bottom: 2.4rem;
  }

  > div {
    width: 100%;

    display: flex;
  }

  @media(min-width: 1160px) {
    h2 {
      font-size: 3.2rem;
    }

    & + & {
      margin-top: 4.8rem;
    }
  }
`