import styled from "styled-components";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Section>
      <Inner>
        <Box>
          <TitleWrapper>
            <Title>Invest</Title>
            <br />
            <Title>like a VC</Title>
          </TitleWrapper>
          <SubTitleWrapper>
            <SubTitle>Stake, vote and invest with friends!</SubTitle>
          </SubTitleWrapper>
        </Box>
        <Box>
          <ImageOuter>
            <Image src="/pic1.webp" alt="me" width="343" height="407" />
          </ImageOuter>
        </Box>
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  background-color: #fef7f6;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  display: block;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin: 0 auto;
`;

const Box = styled.div`
  flex-basis: 50%;
  flex-grow: 0;
  max-width: 50%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  flex-direction: row;
`;

const TitleWrapper = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.05rem;
  text-align: center;
  display: inline-block;
  padding: 0 1.6rem;
  background: #a6fa9f;
  border: 0;
`;

const ImageOuter = styled.div`
  padding-top: 48px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex: 1;
`;

const SubTitleWrapper = styled.div`
  margin-top: 24px;
`;

const SubTitle = styled.p`
  font-size: 2rem;
`;

export default HeroSection;
