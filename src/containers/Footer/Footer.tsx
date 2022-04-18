import { FC } from "react";
import styled, { css } from "styled-components";

import { device } from "@theme/index";
import { Section } from "@components/layout";
import { Caption } from "@components/typography";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <Section
      as="footer"
      sx={css`
        background-color: ${({ theme }) => theme.palette.color.pinkGhost};
        padding-top: ${({ theme }) => theme.spacing(10)}px;
        padding-bottom: ${({ theme }) => theme.spacing(10)}px;
        @media ${device.sm} {
          padding-top: ${({ theme }) => theme.spacing(11)}px;
          padding-bottom: ${({ theme }) => theme.spacing(11)}px;
        }
        @media ${device.md} {
          padding-top: ${({ theme }) => theme.spacing(13)}px;
          padding-bottom: ${({ theme }) => theme.spacing(13)}px;
        }
      `}
    >
      <Caption>All rights reserved. ® 2022 Sheesh VC</Caption>
    </Section>
  );
};

export default Footer;
