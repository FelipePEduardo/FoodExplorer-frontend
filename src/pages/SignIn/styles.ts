import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 35.6rem;
  min-height: 100vh;

  margin: 0 auto;
  padding-inline: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(min-width: 1160px) {
    max-width: 116rem;
  }
`

export const SignInContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  span {
    font-size: 3.7rem;
    font-weight: 700;
  } 

  @media(min-width: 1160px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 4.2rem;
    }
  }
`

export const Form = styled.form`
  margin-top: 7.3rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h2 {
    display: none;
  }

  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.8rem;

    label {
      color: ${({ theme }) =>theme.colors["light-400"]};
    }
  }

  > a {
    font-size: 1.4rem;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) =>theme.colors["light-100"]};

    &:hover {
      color: ${({ theme }) =>theme.colors["light-400"]}
    }
  }

  @media(min-width: 1160px) {
    max-width: 47.6rem;
    background: ${({ theme }) =>theme.colors["dark-700"]};
    padding: 6.4rem;
    border-radius: 16px;

    h2 {
      display: inline;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
    }
  }
`