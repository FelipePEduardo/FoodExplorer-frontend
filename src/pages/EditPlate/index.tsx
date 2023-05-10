import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { ButtonContainer, ButtonsContainer, Container, EditPlateContainer, EditPlateContent, File, Form, MarkersContainer } from "./styles";
import { Input } from "../../components/Input";
import { Markers } from "../../components/Marker";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Error } from "../Error";
import { useState } from "react";

export function EditPlate() {
  /* const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [price, setPrice] = useState<string>('') */

  const navigate = useNavigate()
  const { user } = useAuth()

  function handleNavigate() {
    navigate(-1)
  }

  return (
    <>
      {
        user.is_admin ? <EditPlateContainer>
          <HeaderAdmin />
    
          <EditPlateContent>
    
            <ButtonContainer onClick={handleNavigate}>
              <CaretLeft size={22}/>
              voltar
            </ButtonContainer>
    
            <h1>Novo prato</h1>
    
            <Form>
              <div>
                <Container className="plateImg">
                  <label htmlFor="avatar">Imagem do prato</label>
                  <File>
                    <label htmlFor="avatar">
                      <UploadSimple size={24}/>
                      <span>Selecione a imagem</span>
                      <input type="file" id="avatar"/>
                    </label>
                  </File>
                </Container>
              
                <Container className="plateName">
                  <label htmlFor="">Nome</label>
                  <Input type="text" placeholder="Ex.: Salada Ceasar" value="Salada Ceasar"/>
                </Container>
              
                <Container className="plateCategory">
                  <label htmlFor="">Categoria</label>
                  <select>
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
                    {/* <Markers/> 
                    <Markers />
                    <Markers isNew/> */}
                  </MarkersContainer>
                </Container>
              
                <Container className="platePrice">
                  <label htmlFor="">Preço</label>
                  <Input type="number" placeholder="R$ 00,00" />
                </Container>
              </div>
              
              <div>
                <Container>
                  <label htmlFor="">Descrição</label>
                  <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição">
                    A Salada César é uma opção refrescante para o verão.
                  </textarea>
                </Container>
              </div>
    
              <ButtonsContainer>
                <Button title="Excluir prato" type="button"/>
                <Button title="Salvar alterações" disabled type="submit"/>
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