import Avatar from "../../components/Avatar"
import Paragraph from "../../components/Paragraphs"
import Title from "../../components/Title"
import { ButtonTheme, SidebarContainer } from "./styles"

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar/>
    <Title fontSize={20} textAlign="center">Shelton Cristian</Title>
    <Paragraph type="secundario" fontSize={16}>sheltonChris</Paragraph>

    <Paragraph fontSize={12} mt={24} mb={40}>Engenheiro Front-End</Paragraph>

    <ButtonTheme>Trocar tema</ButtonTheme>
    </SidebarContainer>

  </aside>
)

export default Sidebar
