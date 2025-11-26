import Paragraph from "../Paragraphs";
import Title from "../Title";
import { Card, LinkButton } from "./styles";


const Project = () => (
  <Card>
    <Title>Projeto</Title>
    <Paragraph type="secundario">Lista de tarefas</Paragraph>
    <LinkButton href="https://google.com.br">Visualizar</LinkButton>
  </Card>
)

export default Project
