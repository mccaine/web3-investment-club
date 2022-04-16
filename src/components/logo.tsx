import { FC } from "react";
import styled from "styled-components";

import LogoDefault from "@icons/logo.svg";
import { paddingCSS, marginCSS, Margin, Padding } from "@components/css";

const Logo: FC<Margin & Padding> = (props) => {
  return (
    <Container {...props}>
      <LogoDefault />
    </Container>
  );
};

const Container = styled.div`
  ${marginCSS};
  ${paddingCSS};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Logo;
