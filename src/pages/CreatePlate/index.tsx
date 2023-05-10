import { CaretLeft, UploadSimple } from "@phosphor-icons/react"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { ButtonContainer, File, Form, MarkersContainer, NewPlateContainer, NewPlateContent, Container } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Markers } from "../../components/Marker"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { Error } from "../Error"
import { useState, ChangeEvent, FormEvent } from "react";
import { api } from "../../services/api"

interface FileProps{
  name: string
  size: number
  type: string
}

export function CreatePlate() {
  const { user } =  useAuth()

  const [name, setName] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [ingredients, setIngredients] = useState<string[]>([])
  const [newIngredient, setNewIngredient] = useState<string>('')

  const [mealImage, setMealImage] = useState({} as FileProps)

  const navigate = useNavigate()

  function handleNavigate() {
    navigate(-1)
  }

  function handleChangeImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    if(!file) {
      return alert('Erro ao carregar a imagem')
    } else {
      setMealImage(file)
    }
  }

  function handleAddIngredient() {
    setIngredients((state) => [...state, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted: string) {
    setIngredients(state => state.filter(ingredient => ingredient !== deleted))
  }

  async function handleCreateNewMeal(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if(!name || !price || !description) {
      return alert('Você precisa preencher todos os campos para criar um novo prato')
    }

    if(ingredients.length < 1) {
      return alert('Ensira um ingrediente')
    }

    await api.post('/meals', {
      mealImage,
      name,
      category,
      description,
      price
    })

    alert('Refeição cadastrada')
    navigate('/')
  }

  return (
    <>
      {
        user.is_admin ? <NewPlateContainer>
          <HeaderAdmin />
    
          <NewPlateContent>
    
            <ButtonContainer onClick={handleNavigate}>
              <CaretLeft size={22}/>
              voltar
            </ButtonContainer>
    
            <h1>Novo prato</h1>
    
            <Form onSubmit={handleCreateNewMeal}>
              <div>
                <Container className="plateImg">
                  <label htmlFor="image">Imagem do prato</label>
                  <File>
                    <label htmlFor="image">
                      <UploadSimple size={24}/>
                      <span>
                        {
                          mealImage.name ? mealImage.name : 'Insira a imagem'
                        }
                      </span>
                      <input 
                        id="image"
                        type="file"
                        onChange={handleChangeImage}
                      />
                    </label>
                  </File>
                </Container>
              
                <Container className="plateName">
                  <label htmlFor="">Nome</label>
                  <Input 
                    type="text" 
                    placeholder="Ex.: Salada Ceasar"
                    onChange={e => setName(e.target.value)}
                  />
                </Container>
              
                <Container className="plateCategory">
                  <label htmlFor="">Categoria</label>
                  <select onChange={e => setCategory(e.target.value)}>
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesa">Sobremesa</option>
                    <option value="Bebida">Bebida</option>
                  </select>
                </Container>
              </div>
    
              <div>
                <Container className="plateIngredients">
                  <label htmlFor="">Ingredientes</label>
                  <MarkersContainer>
                    {
                      ingredients.map(ingredient => (
                        <Markers 
                          key={ingredient}
                          value={ingredient}
                          onClick={() => handleRemoveIngredient(ingredient)}
                        />
                      ))
                    }
                    {
                      ingredients.length < 5 && 
                      <Markers 
                        isNew
                        placeholder="Adicionar"
                        value={newIngredient}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => setNewIngredient(e.target.value)}
                        onClick={handleAddIngredient}
                      />
                    }
                  </MarkersContainer>
                </Container>
              
                <Container className="platePrice">
                  <label htmlFor="">Preço</label>
                  <Input 
                    type="number" 
                    placeholder="R$ 00,00" 
                    onChange={e => setPrice(e.target.value)}
                  />
                </Container>
              </div>
              
              <div>
                <Container>
                  <label htmlFor="">Descrição</label>
                  <textarea 
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={e => setDescription(e.target.value)}
                  >

                  </textarea>
                </Container>
              </div>
                    
              <Button 
                title="Salvar alterações" 
                type="submit"
              />
            </Form>
    
          </NewPlateContent>
    
          <Footer />
        </NewPlateContainer>
        :
        <Error />
      }
    </>
  )
}