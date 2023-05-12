import { Header } from "../../components/Header"
import { HomeContainer, HomeContent, IntroContainer } from "./styles"
import macaronsMobile from '../../assets/macaronsMobile.png'
import macaronsDesktop from '../../assets/macaronsDesktop.png'
import { Section } from "../../components/Section"
import { FoodCard } from "../../components/FoodCard"
import { Footer } from "../../components/Footer"
import { useAuth } from "../../hooks/auth"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { FoodCardAdmin } from "../../components/FoodCardAdmin"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface Meal {
  id: number
  image: string
  name: string
  category: string
  ingredients: {
    id: number
    name: string
  }[]
  price:  string
  description: string
}

export function Home() {
  const [meals, setMeals] = useState<Meal[]>([])
  
  const [search, setSearch] = useState<string>('')

  const { user } = useAuth()
  
  useEffect(() => {
    async function fetchMeals() {
      const response = await api.get(`/meals?name=${search}`)

      setMeals(response.data)
    }

    fetchMeals()
  }, [search])

  return (
    <>
      {
        user.is_admin ? 
          <HomeContainer>
            <HeaderAdmin setSearch={setSearch}/>

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
                {
                  meals.filter(meal => meal.category == "Refeição").map(meal => (
                    <FoodCardAdmin key={meal.id} meal={meal}/>
                  ))
                }
              </Section>

              <Section title="Sobremesas">
                {
                  meals.filter(meal => meal.category == "Sobremesa").map(meal => (
                    <FoodCardAdmin key={meal.id} meal={meal}/>
                  ))
                }
              </Section>  

              <Section title="Bebidas">
                {
                  meals.filter(meal => meal.category == "Bebida").map(meal => (
                    <FoodCardAdmin key={meal.id} meal={meal}/>
                  ))
                }
              </Section>    
            </HomeContent>

            <Footer />
          </HomeContainer> 
          : 
          <HomeContainer>
            <Header setSearch={setSearch}/>

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
                {
                  meals.filter(meal => meal.category == "Refeição").map(meal => (
                    <FoodCard key={meal.id} meal={meal}/>
                  ))
                }
              </Section>

              <Section title="Sobremesas">
                {
                  meals.filter(meal => meal.category == "Sobremesa").map(meal => (
                    <FoodCard key={meal.id} meal={meal}/>
                  ))
                }
              </Section>  

              <Section title="Bebidas">
                {
                  meals.filter(meal => meal.category == "Bebida").map(meal => (
                    <FoodCard key={meal.id} meal={meal}/>
                  ))
                }
              </Section>    
            </HomeContent>

            <Footer />
          </HomeContainer>
      }
    </>
  )
}