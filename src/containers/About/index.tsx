import Paragraph from "../../components/Paragraphs";
import Title from "../../components/Title";
import { GithubSecao } from "./styles";


const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph type="secundario">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam laborum quam voluptatibus sint ex quod vero accusantium? Accusantium rerum quibusdam facilis eius dolor dicta ipsa sunt laborum, quia, temporibus earum?</Paragraph>
    <GithubSecao>
      <img src="https://github-two-pink.vercel.app
/api?username=sheltonChris&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img  src="https://github-two-pink.vercel.app/api/top-langs/?username=sheltonChris&layout=compact&langs_count=7&theme=dracula" />

    </GithubSecao>
  </section>
)

export default About
