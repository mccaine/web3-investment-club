import styled from "styled-components";
import Link from "next/link";

import LogoDefault from "@icons/logo.svg";

const Logo = () => {
  return (
    <Container>
      <LogoDefault />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Logo;
