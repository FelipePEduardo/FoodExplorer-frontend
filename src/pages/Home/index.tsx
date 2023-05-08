import { Header } from "../../components/Header"
import { HomeContent, IntroContainer } from "./styles"
import macaronsMobile from '../../assets/macaronsMobile.png'
import macaronsDesktop from '../../assets/macaronsDesktop.png'
import { Section } from "../../components/Section"
import { FoodCard } from "../../components/FoodCard"
import { Footer } from "../../components/Footer"
import { useAuth } from "../../hooks/auth"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { FoodCardAdmin } from "../../components/FoodCardAdmin"

export function Home() {
  const { user } = useAuth()

  return (
    <>
      {
        user.is_admin ? 
          <>
            <HeaderAdmin />

            <HomeContent >
              <IntroContainer>
                <img src={macaronsMobile} className="imgMobile" alt="" />
                <img src={macaronsDesktop} className="imgDesktop" alt="" />

                <div>
                  <h2>Sabores inigualáveis</h2>
                  <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
              </IntroContainer> 
              
              <Section title="Refeições">
                <FoodCardAdmin />
                <FoodCardAdmin />
                <FoodCardAdmin />
                <FoodCardAdmin />
                <FoodCardAdmin />
                <FoodCardAdmin />
                <FoodCardAdmin />
                <FoodCardAdmin />
                <FoodCardAdmin />
              </Section>

              <Section title="Sobremesas">
                <FoodCardAdmin />
                <FoodCardAdmin />
              </Section>  

              <Section title="Bebidas">
                <FoodCardAdmin />
                <FoodCardAdmin />
              </Section>    
            </HomeContent>

            <Footer />
          </> : 
          <>
            <Header />

            <HomeContent >
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
            </HomeContent>

            <Footer />
          </>
      }
    </>
  )
}