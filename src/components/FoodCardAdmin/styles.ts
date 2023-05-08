import styled from "styled-components";

export const CardContainer = styled.div`
  min-width: 21rem;
  max-width: 21rem;
  height: 30rem;

  background: ${({ theme }) => theme.colors["dark-200"]};
  border: 1px solid ${({ theme }) => theme.colors["dark-200"]};
  border-radius: 8px;
  padding: 2.4rem;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  cursor: pointer;

  > button:first-child {
    position: absolute;
    top: 16px;
    right: 16px;

    background: 0;
    border: 0;
    line-height: 0;
    cursor: pointer;
  }

  > img {
    width: 8.8rem; 
    border-radius: 999999px;
  }

  > a {
    font-family: 'Poppins';
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.colors["light-300"]};

    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  > p {
    display: none;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["light-400"]};
  }

  > span {
    color: ${({ theme }) => theme.colors["cake-200"]};
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }

  @media(min-width: 1160px) {
    width: 30rem;
    height: 46.2rem;

    gap: 1.5rem;

    > img {
      width: 17.6rem;
    }

    > a {
      font-size: 2.4rem;
      font-weight: 700;
    }

    > p {
      display: inline-block;
      text-align: center;
    }

    > span {
      font-size: 3.2rem;
    }

    > div {
      flex-direction: row;
    }
  }
`