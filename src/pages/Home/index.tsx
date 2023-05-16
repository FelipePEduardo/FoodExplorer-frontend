import { Header } from "../../components/Header"
import { HomeContainer, HomeContent, InputContainer, IntroContainer } from "./styles"
import macaronsMobile from '../../assets/macaronsMobile.png'
import macaronsDesktop from '../../assets/macaronsDesktop.png'
import { Section } from "../../components/Section"
import { FoodCard } from "../../components/FoodCard"
import { Footer } from "../../components/Footer"
import { useAuth } from "../../hooks/auth"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { FoodCardAdmin } from "../../components/FoodCardAdmin"
import { useEffect, useState, ChangeEvent } from "react"
import { api } from "../../services/api"
import { Input } from "../../components/Input"
import { MagnifyingGlass } from "@phosphor-icons/react"

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
  const [cartItems, setCartItems] = useState<Meal[]>([])

  const { user } = useAuth() 

  function addToCart(meal: Meal) {
    const mealAlreadyExistsInCart = cartItems.find(cartItem => cartItem.id === meal.id)

    if(!mealAlreadyExistsInCart) {
      setCartItems(state => [...state, meal])   
    } else {
      alert("Esse item já está no carrinho.")
    }
  }

  const productsInCart = cartItems.length

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }
  
  useEffect(() => {
    async function fetchMeals() {
      const response = await api.get(`/meals?search=${search}`)

      setMeals(response.data)
    }

    fetchMeals()
  }, [search])

  return (
    <>
      {
        user.is_admin ? 
          <HomeContainer>
            <HeaderAdmin onSearch={handleSearch}/>

            <HomeContent >
              <IntroContainer>
                <img src={macaronsMobile} className="imgMobile" alt="" />
                <img src={macaronsDesktop} className="imgDesktop" alt="" />

                <div>
                  <h2>Sabores inigualáveis</h2>
                  <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
              </IntroContainer> 

              <InputContainer > 
                <MagnifyingGlass size={24}/>
                <Input 
                  placeholder="Busque por pratos ou ingredientes"
                  onChange={e => setSearch(e.target.value)}
                />
              </InputContainer>
              
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
            <Header onSearch={handleSearch} productsInCart={productsInCart}/>

            <HomeContent >
              <IntroContainer>
                <img src={macaronsMobile} className="imgMobile" alt="" />
                <img src={macaronsDesktop} className="imgDesktop" alt="" />

                <div>
                  <h2>Sabores inigualáveis</h2>
                  <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
              </IntroContainer> 
              
              <InputContainer > 
                <MagnifyingGlass size={24}/>
                <Input 
                  placeholder="Busque por pratos ou ingredientes"
                  onChange={handleSearch}
                />
              </InputContainer>
              
              <Section title="Refeições">
                {
                  meals.filter(meal => meal.category == "Refeição").map(meal => (
                    <FoodCard 
                      key={meal.id} 
                      meal={meal}
                      onAddToCart={addToCart}
                    />
                  ))
                }
              </Section>

              <Section title="Sobremesas">
                {
                  meals.filter(meal => meal.category == "Sobremesa").map(meal => (
                    <FoodCard 
                      key={meal.id} 
                      meal={meal}
                      onAddToCart={addToCart}
                    />
                  ))
                }
              </Section>  

              <Section title="Bebidas">
                {
                  meals.filter(meal => meal.category == "Bebida").map(meal => (
                    <FoodCard 
                      key={meal.id}
                      meal={meal}
                      onAddToCart={addToCart}
                    />
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