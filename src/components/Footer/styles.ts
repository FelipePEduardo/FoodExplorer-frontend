import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors["dark-600"]};
  padding: 3rem 2.8rem;
`

export const FooterContent = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 2.2rem;
    filter: grayscale(1);
  }

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors["light-700"]};
  }

  > p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors["light-200"]};
  }

  @media(min-width: 1160px) {
    img {
      max-width: 3rem;
    }

    span {
      font-size: 2.4rem;
    }
  }
`