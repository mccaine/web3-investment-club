import { FC } from "react";
import styled, { css } from "styled-components";

import { device } from "@theme/index";
import { Section } from "@components/layout";
import { Title } from "@components/typography";
import Box from "@components/box";

import TikTokRound from "@icons/tiktok_round.svg";
import TwitterRound from "@icons/twitter_round.svg";
import DiscordRound from "@icons/discord_round.svg";
import InstagramRound from "@icons/instagram_round.svg";

import { some } from "@utils/settings";

const SectionSocial: FC = () => {
  const someIcon = {
    tiktok: <TikTokRound />,
    twitter: <TwitterRound />,
    facebook: <TikTokRound />,
    discord: <DiscordRound />,
    instagram: <InstagramRound />,
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
              return <SoMeIconWrapper>{someIcon[el.id]}</SoMeIconWrapper>;
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
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  @media ${device.sm} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SomeLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  margin-right: 0;
  @media ${device.sm} {
    padding-top: 0;
    margin-right: ${({ theme }) => theme.spacing(-2)}px;
  }
`;

const SoMeIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  @media ${device.sm} {
    padding-top: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export default SectionSocial;
