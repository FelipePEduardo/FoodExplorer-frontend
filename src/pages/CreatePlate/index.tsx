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

  const [mealImage, setMealImage] = useState<null | any>(null) // alterar

  const navigate = useNavigate()

  function handleNavigateBack() {
    navigate(-1)
  }

  function handleSelectImage(e: ChangeEvent<HTMLInputElement>) {
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
    
    if(newIngredient) {
      return alert('Você deixou um ingrediente para adicionar mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio')
    }

    if(!name || !price || !description) {
      return alert('Você precisa preencher todos os campos para criar um novo prato')
    }

    if(ingredients.length < 2) {
      return alert('Ensira pelo menos dois ingredientes')
    }

    const formData = new FormData()
    formData.append("image", mealImage)
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    ingredients.map(ingredient => (
        formData.append("ingredients", ingredient)
    ))

    await api.post('/meals', formData)

    alert('Prato cadastrado com sucesso!')
    navigate('/')
  }

  return (
    <>
      {
        user.is_admin ? <NewPlateContainer>
          <HeaderAdmin />
    
          <NewPlateContent>
    
            <ButtonContainer onClick={handleNavigateBack}>
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
                          mealImage?.name ? mealImage?.name : 'Insira a imagem'
                        }
                      </span>
                      <input 
                        id="image"
                        type="file"
                        onChange={handleSelectImage}
                      />
                    </label>
                  </File>
                </Container>
              
                <Container className="plateName">
                  <label htmlFor="name">Nome</label>
                  <Input
                    id="name" 
                    type="text" 
                    placeholder="Ex.: Salada Ceasar"
                    onChange={e => setName(e.target.value)}
                  />
                </Container>
              
                <Container className="plateCategory">
                  <label htmlFor="category">Categoria</label>
                  <select 
                    id="category"
                    onChange={e => setCategory(e.target.value)}
                  >
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
                      ingredients.length < 10 && 
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
                  <label htmlFor="price">Preço</label>
                  <Input 
                    id="price"
                    type="string" 
                    placeholder="R$ 00,00" 
                    onChange={e => setPrice(e.target.value)}
                  />
                </Container>
              </div>
              
              <div>
                <Container>
                  <label htmlFor="description">Descrição</label>
                  <textarea 
                    id="description"
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