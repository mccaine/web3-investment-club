import { FC } from "react";
import styled from "styled-components";
import Head from "@components/head";
import Navbar from "@components/navbar";
import { Footer } from "@containers/Footer";

const MainTemplate: FC = ({ children }) => {
  return (
    <Main>
      <Head />
      <Navbar />
      {children}
      <Footer />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default MainTemplate;
