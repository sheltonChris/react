import { Title as TitleStyle } from "./styles"

export type Props = {
  children: string;
  fontSize?: number;
  textAlign?: "start" | "center" | "end" | "left" | "right" | "justify";
}

const Title = (props: Props) =>
  <TitleStyle
    fontSize={props.fontSize}
    textAlign={props.textAlign}
  >
    {props.children}
  </TitleStyle>

export default Title


