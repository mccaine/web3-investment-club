import { FC } from "react";
import styled, { css } from "styled-components";

import { device } from "@theme/index";
import { Section } from "@components/layout";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <Section
      as="footer"
      sx={css`
        background-color: ${({ theme }) => theme.palette.color.pinkGhost};
        padding-top: ${({ theme }) => theme.spacing(6)}px;
        padding-bottom: ${({ theme }) => theme.spacing(6)}px;
        @media ${device.sm} {
          padding-top: ${({ theme }) => theme.spacing(10)}px;
          padding-bottom: ${({ theme }) => theme.spacing(10)}px;
        }
        @media ${device.md} {
          padding-top: ${({ theme }) => theme.spacing(13)}px;
          padding-bottom: ${({ theme }) => theme.spacing(13)}px;
        }
      `}
    >
      FOOTER
    </Section>
  );
};

export default Footer;
