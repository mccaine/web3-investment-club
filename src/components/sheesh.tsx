import { FC } from "react";
import styled from "styled-components";

import SheeshIcon from "@icons/sheesh_text.svg";

const Sheesh = () => {
  return (
    <Container>
      <SheeshIcon />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f46c47;
`;

export default Sheesh;
