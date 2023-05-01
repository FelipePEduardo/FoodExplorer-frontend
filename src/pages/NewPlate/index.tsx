import { CaretLeft, UploadSimple } from "@phosphor-icons/react"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { ButtonContainer, File, Form, MarkersContainer, NewPlateContainer, NewPlateContent, Container } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Markers } from "../../components/Marker"
import { useNavigate } from "react-router-dom"

export function NewPlate() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate(-1)
  }

  return (
    <NewPlateContainer>
      <HeaderAdmin />

      <NewPlateContent>

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
              <Input type="text" placeholder="Ex.: Salada Ceasar"/>
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
                <Markers/> 
                <Markers />
                <Markers isNew/>
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
              <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
            </Container>
          </div>
                 
          <Button title="Salvar alterações" disabled type="submit"/>
        </Form>

      </NewPlateContent>

      <Footer />
    </NewPlateContainer>
  )
}