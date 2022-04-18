import { useState } from "react";
import styled from "styled-components";

import MainTemplate from "@templates/Main";

import { CreateMember } from "@components/createMember";
import { ProposalList } from "@components/proposalList";
import { useData } from "@contexts/dataContext";

import SectionHero from "./SectionHero";
import SectionVideo from "./SectionVideo";
import SectionMembership from "./SectionMembership";
import SectionSocial from "./SectionSocial";
import SectionSheeshIcon from "@components/sheesh";

export default function Home() {
  const { isMember, loading, account } = useData();

  return (
    <MainTemplate>
      <SectionHero />
      <SectionVideo />
      <SectionMembership isMember={isMember} />
      {/* {isMember && <ProposalList />} */}
      <SectionSocial />
      <SectionSheeshIcon />
    </MainTemplate>
  );
}
