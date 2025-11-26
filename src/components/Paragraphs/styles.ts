import styled from "styled-components";
import { Props } from ".";

export const Paragraph = styled.p<
  Pick<Props, "type" | "fontSize" | "mt" | "mb" | "ml" | "mr">
>`
  color: ${(props) =>
    props.type === "secundario" ? "#949494" : "#282435"};

  font-size: ${(props) =>
    props.fontSize ? props.fontSize + "px" : "14px"};

  line-height: 22px;

  margin-top: ${(props) =>
    props.mt !== undefined ? props.mt + "px" : "0"};

  margin-bottom: ${(props) =>
    props.mb !== undefined ? props.mb + "px" : "0"};

  margin-left: ${(props) =>
    props.ml !== undefined ? props.ml + "px" : "0"};

  margin-right: ${(props) =>
    props.mr !== undefined ? props.mr + "px" : "0"};
`;
