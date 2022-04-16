import styled, { css } from "styled-components";

import Box from "@components/box";
import Video from "@components/Video";
import { Title } from "@components/typography";
import { device } from "@theme/index";

import { Section } from "@components/layout";

const SectionVideo = () => (
  <Section
    sx={css`
      background-color: ${({ theme }) => theme.palette.color.yellowBright};
      min-height: 300px;
    `}
  >
    <Box
      sx={css`
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        flex-wrap: wrap;
        max-width: 1600px;
        margin: 0 auto;
        padding-top: ${({ theme }) => theme.spacing(4)}px;
        padding-bottom: ${({ theme }) => theme.spacing(4)}px;
        @media ${device.sm} {
          flex-direction: row;
          align-items: center;
          padding-top: ${({ theme }) => theme.spacing(13)}px;
          padding-bottom: ${({ theme }) => theme.spacing(13)}px;
        }
      `}
    >
      <Box
        sx={css`
          flex-basis: 100%;
          max-width: 100%;
          flex-grow: 0;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin: 0;
          flex-direction: column;
          @media ${device.sm} {
            flex-basis: 55%;
            max-width: 55%;
          }
          @media ${device.md} {
            flex-basis: 55%;
            max-width: 55%;
          }
        `}
      >
        <Box
          sx={css`
            border: 12px #cb78f8 solid;
            border-radius: 12px;
            width: 100%;
          `}
        >
          <Video
            muted={false}
            playing={true}
            loop={true}
            url="/sheesh-meme-1080.mp4"
            controls={true}
            light="/poster.png"
          />
        </Box>
      </Box>
      <Box
        sx={css`
          flex-basis: 100%;
          max-width: 100%;
          flex-grow: 0;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin: 0;
          flex-direction: column;
          padding: ${({ theme }) => theme.spacing(6)}px 0;
          @media ${device.sm} {
            flex-basis: 45%;
            max-width: 45%;
          }
          @media ${device.md} {
            flex-basis: 45%;
            max-width: 45%;
          }
        `}
      >
        <Box
          sx={css`
            align-self: center;
          `}
        >
          <Title as="h2">
            <Box
              as="span"
              mr={3}
              sx={css`
                font-weight: 500;
                letter-spacing: -0.05rem;
                display: inline-block;
                padding: 0 0.96rem;
                background-color: #f46c47;
                transform: rotate(-5.5deg);
              `}
            >
              Sheesh
            </Box>
            it...
            <br />
            you&apos;re the boss
          </Title>
        </Box>
      </Box>
    </Box>
  </Section>
);

export default SectionVideo;
