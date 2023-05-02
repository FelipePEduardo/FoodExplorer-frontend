import styled from "styled-components";

export const MenuContainer = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-rows: 107px auto 85px;
`

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors["dark-700"]};
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  button {
    background: none;
    border: 0;
    line-height: 0;

    cursor: pointer;
  }

  span {
    font-size: 2.1rem;
  }
`

export const MenuContent = styled.div`
  max-width: 42.8rem;
  width: 100%;
  margin: 3.6rem auto 0;
  padding: 0 2.8rem;


  display: flex;
  flex-direction: column;

  form {
    margin-bottom: 3.6rem;
  }

  button {
    background: 0;
    border: 0;
    padding: 1rem;

    font-family: 'Poppins';
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors["light-300"]};
    text-align: left;

    border-bottom: 1px solid  ${({ theme }) => theme.colors["dark-1000"]};

    cursor: pointer;
  }
`

export const InputContainer = styled.div`
  background: ${({ theme }) => theme.colors["dark-900"]};
  padding: 1.2rem 1.4rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 1.4rem;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["cake-100"]};
  }

  &:has(input:focus) {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["cake-100"]};
  }

  input {
    width: 100%;

    background: 0;
    border: 0;
    box-shadow: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors["light-500"]};
    }
  }
`