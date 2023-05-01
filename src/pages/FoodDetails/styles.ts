import styled from "styled-components";

export const FoodDetailsContainer = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-rows: 107px auto 85px;
`

export const FoodDetailsContent = styled.div`
  max-width: 36.4rem;
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 2.4rem;

  > button {
    background: none;
    border: 0;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    font-size: 2.4rem;
    font-family: 'Poppins';
    font-weight: 500;

    cursor: pointer;
  }

  @media(min-width: 1120px) {
    max-width: 112rem;
  }
`

export const PlateContainer = styled.div`
  margin-top: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  > img {
    max-width: 26.4rem;
    margin-bottom: 1.6rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h2 {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 2.7rem;
      color: ${({ theme }) => theme.colors["light-300"]};
    }

    > p {
      font-family: 'Poppins';
      color: ${({ theme }) => theme.colors["light-300"]};
    }

    > span {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors["cake-200"]};
    }
  }
 
  @media(min-width: 1120px) {
    margin-top: 4.2rem;

    flex-direction: row;
    justify-content: center;
    gap: 5rem;

    text-align: left;

    > img {
      max-width: 39rem;
      margin-bottom: unset;
    }

    > div {
      align-items: flex-start;

      > h2 {
        font-size: 4rem;
      }

      > p {
        font-size: 2.4rem;
      }

      > span {
        font-size: 3.2rem;
      }
    }
  }
`

export const TagsContainer = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.4rem;

    background: ${({ theme }) => theme.colors["dark-1000"]};
    padding: 4px 8px;
    border-radius: 4px;
  }

  @media(min-width: 1120px) {
    display: flex;
    gap: 1.2rem;
  }
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  div {
    svg {
      width: 2.7rem;
    }

    span {
      font-size: 2.2rem;
      font-weight: 700;
    }
  }

  @media(min-width: 1120px) {
    gap: 3.3rem;

    > button {
      max-width: 16rem;
    }
  }
`