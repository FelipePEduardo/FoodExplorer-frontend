import { Header } from "../../components/Header"
import { HomeContainer, IntroContainer } from "./styles"
import macaronsMobile from '../../assets/macaronsMobile.png'
import macaronsDesktop from '../../assets/macaronsDesktop.png'
import { Section } from "../../components/Section"
import { FoodCard } from "../../components/FoodCard"
import { Footer } from "../../components/Footer"

export function Home() {
  return (
    <>
      <Header />

      <HomeContainer >
        <IntroContainer>
          <img src={macaronsMobile} className="imgMobile" alt="" />
          <img src={macaronsDesktop} className="imgDesktop" alt="" />

          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </IntroContainer> 
        
        <Section title="Refeições">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </Section>

        <Section title="Sobremesas">
          <FoodCard />
          <FoodCard />
        </Section>  

        <Section title="Bebidas">
          <FoodCard />
          <FoodCard />
        </Section>    
      </HomeContainer>

      <Footer />
    </>
  )
}