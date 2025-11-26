import { Paragraph as ParagraphStyle } from "./styles"

export type Props = {
  children: string;
  type?: 'principal' | 'secundario';
  fontSize?: number;

  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;

  className?: string; // necessário para styled-components
}

const Paragraph = (props: Props) => (
  <ParagraphStyle
    fontSize={props.fontSize}
    type={props.type}
    mt={props.mt}
    mb={props.mb}
    ml={props.ml}
    mr={props.mr}
    className={props.className}
  >
    {props.children}
  </ParagraphStyle>
);

export default Paragraph;
