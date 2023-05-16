import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { ButtonContainer, ButtonsContainer, Container, EditPlateContainer, EditPlateContent, File, Form, MarkersContainer } from "./styles";
import { Input } from "../../components/Input";
import { Markers } from "../../components/Marker";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Error } from "../Error";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { api } from "../../services/api";

interface Ingredient {
  name: string
}

export function EditPlate() {
  const [name, setName] = useState<string>('')
  const [category, setCategory] = useState<string>('Refeição')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  
  const [ingredients, setIngredients] = useState<string[]>([])
  const [newIngredient, setNewIngredient] = useState<string>('')

  const [mealImage, setMealImage] = useState<null | any>(null) // alterar

  const { user } = useAuth()
  const { id } = useParams()
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
    setIngredients((state) => [...state, newIngredient ]);
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted: string) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
    setNewIngredient("");
  }

  async function handleUpdateMeal(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if(!name || !price || !description) {
      return alert('Você precisa preencher todos os campos para atualizar o prato')
    }

    if (newIngredient != '') {
      return alert('Clique no + para adicionar o ingrediente ou limpe o campo!')
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

    await api.put(`/meals/${id}`, formData)

    alert("Prato editado com sucesso")
    navigate(-1)
  }

  async function handleDeleteMeal() {
    const confirm = window.confirm("Deseja realmente remover o prato?")

    if(confirm) {
      await api.delete(`/meals/${id}`)
      navigate('/')
    }
  }
  
  useEffect(() => {
    async function fetchMeal() {
      const response = await api.get(`/meals/${id}`)

      const {name, description, price, ingredients } = response.data;
      setName(name)
      setDescription(description)
      setPrice(price)
      setIngredients(ingredients.map((ingredient: Ingredient) => ingredient.name))
    }

    fetchMeal()
  }, [])

  return (
    <>
      {
        user.is_admin ? <EditPlateContainer>
          <HeaderAdmin />
    
          <EditPlateContent>
    
            <ButtonContainer onClick={handleNavigateBack}>
              <CaretLeft size={22}/>
              voltar
            </ButtonContainer>
    
            <h1>Novo prato</h1>
    
            <Form onSubmit={handleUpdateMeal}>
              <div>
                <Container className="plateImg">
                  <label htmlFor="avatar">Imagem do prato</label>
                  <File>
                    <label htmlFor="avatar">
                      <UploadSimple size={24}/>
                      <span>Selecione a imagem para alterá-la</span>
                      <input 
                        type="file" 
                        id="avatar"
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
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </Container>
              
                <Container className="plateCategory">
                  <label htmlFor="category">Categoria</label>
                  <select 
                    id="category"
                    value={category}
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
                  <label htmlFor="ingredient">Ingredientes</label>
                  <MarkersContainer id="ingredient">
                    {
                      ingredients.map(ingredient => {
                        return (
                          <Markers 
                            key={ingredient}
                            value={ingredient}
                            onClick={() => handleRemoveIngredient(ingredient)}
                          /> 
                        )
                      })
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
                    type="number" 
                    placeholder={`R$ ${price}`}
                    onChange={e => setPrice(e.target.value)}
                  />
                </Container>
              </div>
              
              <div>
                <Container>
                  <label htmlFor="description">Descrição</label>
                  <textarea
                    id="description" 
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                  >
                  </textarea>
                </Container>
              </div>
    
              <ButtonsContainer>
                <Button 
                  title="Excluir prato" 
                  type="button"
                  onClick={handleDeleteMeal}
                />
                <Button title="Salvar alterações" type="submit"/>
              </ButtonsContainer>
            </Form>
          </EditPlateContent>
    
          <Footer />
        </EditPlateContainer>
        :
        <Error />
      }
    </>
  )
}