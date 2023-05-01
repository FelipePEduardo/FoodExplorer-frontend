import styled from "styled-components";

export const LogoContainer = styled.div`
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  span {
    color: ${({ theme }) => theme.colors["light-100"]};
  }
`