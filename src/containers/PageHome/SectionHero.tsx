import styled, { css } from "styled-components";

import { Title, SubTitle } from "@components/typography";
import { device } from "@theme/index";

const titleBgCSS = css`
  background: ${({ theme }) => theme.palette.color.greenPastel};
  padding: 0 1.2rem;
  @media ${device.md} {
    padding: 0 1.6rem;
  }
`;

const SectionHero = () => {
  return (
    <Section>
      <Inner>
        <Box>
          <TitleWrapper as="h1">
            <Title sx={titleBgCSS} as="span" size="large">
              Invest
            </Title>
            <br />
            <Title sx={titleBgCSS} as="span" size="large">
              like a VC
            </Title>
          </TitleWrapper>
          <SubTitleWrapper>
            <SubTitle>Stake, vote and invest with friends!</SubTitle>
          </SubTitleWrapper>
        </Box>
        <Box>
          <ImageOuter>
            <Image src="/pic1.webp" alt="me" />
          </ImageOuter>
        </Box>
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  background-color: #fef7f6;
  padding-left: 12px;
  padding-right: 12px;
  display: block;
  width: 100%;
  @media ${device.sm} {
    padding-left: 14px;
    padding-right: 14px;
  }
  @media ${device.md} {
    padding-left: 52px;
    padding-right: 52px;
  }
`;

const Inner = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  @media ${device.sm} {
    flex-direction: row;
    align-items: center;
  }
`;

const Box = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  flex-grow: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  flex-direction: column;
  @media ${device.sm} {
    flex-basis: 50%;
    max-width: 50%;
  }
  @media ${device.md} {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

const TitleWrapper = styled.div`
  text-align: left;
`;

const ImageOuter = styled.div`
  padding-top: 48px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: flex-start;
  flex: 1;
  @media ${device.sm} {
    justify-content: center;
  }
`;

const SubTitleWrapper = styled.div`
  margin-top: 24px;
`;

const Image = styled.img`
  width: auto;
  height: 200px;
  @media ${device.sm} {
    width: auto;
    height: 326px;
  }
  @media ${device.md} {
    width: auto;
    height: 407px;
  }
`;

export default SectionHero;
