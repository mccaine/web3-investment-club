import { FC } from "react";
import styled from "styled-components";
import Head from "@components/head";
import Navbar from "@components/navbar";

const MainTemplate: FC = ({ children }) => {
  return (
    <Main>
      <Head />
      <Navbar />
      {children}
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainTemplate;
