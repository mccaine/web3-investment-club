import { FC } from "react";
import styled, { css } from "styled-components";

import { device } from "@theme/index";
import { Section } from "@components/layout";
import { Title } from "@components/typography";
import Box from "@components/box";
import ButtonBase from "@components/buttonBase";

import TikTokIcon from "@icons/tiktok_round.svg";
import TwitterIcon from "@icons/twitter_round.svg";
import DiscordIcon from "@icons/discord_round.svg";
import InstagramIcon from "@icons/instagram_round.svg";

import { some } from "@utils/settings";

const SectionSocial: FC = () => {
  const someIcon = {
    tiktok: <TikTokIcon />,
    twitter: <TwitterIcon />,
    facebook: <TikTokIcon />,
    discord: <DiscordIcon />,
    instagram: <InstagramIcon />,
  };

  return (
    <Section
      sx={css`
        display: flex;
        background-color: ${({ theme }) => theme.palette.color.brownPure};
        min-height: 110px;
      `}
    >
      <Inner>
        <Box>
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
        <SomeLinksWrapper>
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
  padding-top: ${({ theme }) => theme.spacing(8)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  @media ${device.sm} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SomeLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  margin-right: 0;
  @media ${device.sm} {
    padding-top: 0;
    margin-right: ${({ theme }) => theme.spacing(-2)}px;
  }
`;

const SoMeIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  @media ${device.sm} {
    width: 64px;
    height: 64px;
  }
`;

export default SectionSocial;
