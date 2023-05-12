import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-rows: 107px auto 85px;
`

export const HomeContent = styled.main`
  max-width: 116rem;
  width: 100%;

  margin: 4.4rem auto 2.5rem;
  padding: 0 2.4rem;

  @media(min-width: 1160px) {
    margin: 16.4rem auto 4.8rem;
    padding: 0 2rem;
  }
`

export const IntroContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["gradients-200"]};

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 6.2rem;

  > img.imgMobile {
    max-width: 20rem;
    margin-top: -3rem;
  }

  > img.imgDesktop {
    display: none;
  }

  > div {
    text-align: center;
    padding-inline: 1.2rem;
    
    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.8rem;
      font-weight: 600;

      color: ${({ theme }) => theme.colors["light-300"]};
      margin-bottom: 3px;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
      color: ${({ theme }) => theme.colors["light-300"]};

      margin-bottom: 1.5rem;
    }
  }

  @media(min-width: 480px) {
    flex-direction: row;
    justify-content: center;

    img {
      margin-left: -2.8rem;
    }

    > div {
      p {
        padding-inline: initial;
        margin-bottom: initial;
      }
    }
  }

  @media(min-width: 1160px) {
    > img.imgMobile {
      display: none;
    }

    > img.imgDesktop {
      display: block;

      max-width: 65.6rem;
      margin: -13.5rem 0 0 -8.5rem;
    }

    > div {

      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }
`