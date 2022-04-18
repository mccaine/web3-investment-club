import { FC, useCallback } from "react";
import styled, { css } from "styled-components";

import { device } from "@theme/index";
import { Section } from "@components/layout";
import { Title } from "@components/typography";
import Box from "@components/box";
import ButtonBase from "@components/buttonBase";

import TikTokRound from "@icons/tiktok_round.svg";
import TwitterRound from "@icons/twitter_round.svg";
import DiscordRound from "@icons/discord_round.svg";
import InstagramRound from "@icons/instagram_round.svg";

import { some } from "@utils/settings";

const SectionSocial: FC = () => {
  const handleOnSocial = useCallback((item) => {
    location.href = item.url;
  }, []);

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
              return (
                <ButtonBase my={1.5} mx={1.5} key={el.id} href={el.url} target="_blank">
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
  width: 44px;
  height: 44px;
  @media ${device.sm} {
    width: 64px;
    height: 64px;
  }
`;

export default SectionSocial;
