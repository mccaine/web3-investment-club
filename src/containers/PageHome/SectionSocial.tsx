import { FC } from "react";
import styled, { css } from "styled-components";

import { device } from "@theme/index";
import { Section } from "@components/layout";
import { Title } from "@components/typography";
import Box from "@components/box";

const SectionSocial: FC = () => {
  return (
    <Section
      sx={css`
        display: flex;
        background-color: ${({ theme }) => theme.palette.color.brownPure};
        min-height: 110px;
      `}
    >
      <Inner>
        <Box py={2}>
          <Title
            size="small"
            as="h3"
            sx={css`
              color: #fff;
              text-transform: uppercase;
            `}
          >
            Join the community
          </Title>
        </Box>
        <Box>Social links</Box>
      </Inner>
    </Section>
  );
};

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${device.sm} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default SectionSocial;
