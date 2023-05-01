import styled from "styled-components";

export const NewPlateContainer = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-rows: 107px auto 85px;
`

export const NewPlateContent = styled.div`
  max-width: 42.8rem;
  width: 100%;
  margin: 1rem auto 0;
  padding-inline: 3.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h1 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
  }

  @media(min-width: 1160px) {
    max-width: 112rem;
    width: 100%;
    gap: 0;
  }
`

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: 0;

  font-weight: 500;
  font-family: 'Poppins';
  color: ${({ theme }) => theme.colors["light-300"]};

  cursor: pointer;

  @media(min-width: 1160px) {
    margin-bottom: 2.4rem;

    font-size: 2.4rem;
    font-weight: 700;

    svg {
      width: 3.2rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-bottom: 5.5rem;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media(min-width: 1160px) {
    margin-top: 3.2rem;
    gap: 3.2rem;

    > div {
      flex-direction: row;
      gap: 3.2rem;
    }

    > button {
      max-width: 17.2rem;
      margin-left: auto;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &.plateImg {
    max-width: 24rem;
  }

  &.plateName {
    width: 100%;
  }

  &.plateCategory {
    max-width: 36.4rem;
  }

  &.platePrice {
    max-width: 25.1rem;
  }

  > label {
    color: ${({ theme }) => theme.colors["light-400"]};
  }

  > select {
    width: 100%;
    background: ${({ theme }) => theme.colors["dark-800"]};
    color: ${({ theme }) => theme.colors["light-400"]};

    border: 0;
    border-radius: 8px;
    
    padding: 1.6rem;
  }

  > input {
    height: 4.8rem;
    background: ${({ theme }) => theme.colors["dark-800"]};
  }

  > textarea {
    height: 17rem;
    background: ${({ theme }) => theme.colors["dark-800"]};
    border: 0;
    border-radius: 8px;

    padding: 1.4rem;

    ::placeholder {
      color: ${({ theme }) => theme.colors["light-500"]};
    }
  }
`

export const File = styled.div`
  label {
    width: 100%;
    background: ${({ theme }) => theme.colors["dark-800"]};
    
    padding: 1.2rem 3.2rem;

    display: flex;
    align-items: center;
    gap: 6px;

    border-radius: 8px;

    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme.colors["light-100"]};
    }

    > span {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors["light-100"]};
    }

    > input {
      display: none;
    }
  }
`

export const MarkersContainer = styled.div`
  
  background: ${({ theme }) => theme.colors["dark-800"]};
  border-radius: 8px;

  padding: 0.8rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;

  @media(min-width: 1160px) {
    grid-template-columns: repeat(5, 1fr);
  }
`