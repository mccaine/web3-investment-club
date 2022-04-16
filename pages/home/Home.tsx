import { useState } from "react";
import styled, { css } from "styled-components";

import MainTemplate from "@templates/Main";

import { CreateMember } from "@components/createMember";
import { ProposalList } from "@components/proposalList";
import { useData } from "@contexts/dataContext";
import HeroSection from "pages/home/herosection";
import Box from "@components/box";
import Video from "@components/Video";
import { Title } from "@components/typography";

export default function Home() {
  const { isMember, loading, account } = useData();
  const [muted, setMuted] = useState(true);

  // if (loading) {
  //   return (
  //     <div className="h-screen w-screen flex justify-center items-center">
  //       <div className="text-2xl font-bold text-gray-500">Loading...</div>
  //     </div>
  //   );
  // }
  // if (!account) {
  //   return (
  //     <div className="h-screen w-screen flex justify-center items-center">
  //       <div className="text-2xl font-bold text-gray-500">
  //         Please connect Metamask Wallet
  //       </div>
  //     </div>
  //   );
  // }
  const VideoSection = () => (
    <Box
      as="section"
      sx={css`
        background-color: #f8db47;
        min-height: 300px;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
      `}
    >
      <Box
        my={8}
        ml={6}
        sx={css`
          border: 12px #cb78f8 solid;
          border-radius: 12px;
          width: 55%;
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
      <Box ml={8}>
        <Title>
          <Box
            as="span"
            mr={3}
            sx={css`
              font-weight: 500;
              letter-spacing: -0.05rem;
              display: inline-block;
              /* margin: 0 0.32000000000000006rem; */
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
  );

  return (
    <MainTemplate>
      <HeroSection />
      <VideoSection />
      {!isMember && <CreateMember />}
      {isMember && <ProposalList />}
    </MainTemplate>
  );
}

const Heading = styled.h1`
  font-size: 44px;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.05rem;
  padding: 0;
  border: 0;
`;
