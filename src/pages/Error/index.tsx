import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ErrorContainer, ErrorContent } from "./styles";

export function Error() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate("/")
  }

  return (
    <ErrorContainer id="error-page">
      <Header />

      <ErrorContent>
        <h1>404...</h1>
        <p>Essa não é a página que você está procurando</p>
        <Button title="Retornar a página principal" onClick={handleNavigate}/>

      </ErrorContent>

      <Footer />
    </ErrorContainer>
  )
}