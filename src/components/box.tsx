import styled from "styled-components";
import { marginCSS, paddingCSS, Margin, Padding } from "@components/css";

type Sx = {
  sx?: any;
};

const Box = styled.div<Margin & Padding & Sx>`
  ${marginCSS};
  ${paddingCSS};
  ${({ sx }) => sx && sx};
`;

export default Box;
