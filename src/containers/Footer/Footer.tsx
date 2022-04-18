import { FC } from "react";
import styled, { css } from "styled-components";

import { device } from "@theme/index";
import { Section } from "@components/layout";
import { Caption } from "@components/typography";
import Box from "@components/box";
import ButtonBase from "@components/buttonBase";

import { some } from "@utils/settings";

import TikTokIcon from "@icons/tiktok.svg";
import TwitterIcon from "@icons/twitter.svg";
import DiscordIcon from "@icons/discord.svg";
import InstagramIcon from "@icons/instagram.svg";

interface Props {}

const Footer: FC<Props> = () => {
  const someIcon = {
    tiktok: <TikTokIcon />,
    twitter: <TwitterIcon />,
    facebook: <TikTokIcon />,
    discord: <DiscordIcon />,
    instagram: <InstagramIcon />,
  };

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
      <Box
        sx={css`
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          @media ${device.sm} {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        `}
      >
        <SomeLinksWrapper>
          {" "}
          {some.map((el) => {
            if (el.active) {
              return (
                <ButtonBase key={el.id} my={1.5} mx={1.5} href={el.url} target="_blank">
                  <SoMeIconWrapper>{someIcon[el.id]}</SoMeIconWrapper>
                </ButtonBase>
              );
            }
          })}
        </SomeLinksWrapper>
        <Box>
          <Caption>All rights reserved. ® 2022 Sheesh VC</Caption>
        </Box>
      </Box>
    </Section>
  );
};

const SomeLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
  margin-right: 0;
  @media ${device.sm} {
    padding-top: 0;
    margin-right: ${({ theme }) => theme.spacing(-2)}px;
  }
`;

const SoMeIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  @media ${device.sm} {
    width: 24px;
    height: 24px;
  }
`;

export default Footer;
