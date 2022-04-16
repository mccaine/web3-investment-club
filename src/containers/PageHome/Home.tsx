import { useState } from "react";
import styled from "styled-components";

import MainTemplate from "@templates/Main";

import { CreateMember } from "@components/createMember";
import { ProposalList } from "@components/proposalList";
import { useData } from "@contexts/dataContext";

import SectionHero from "./SectionHero";
import SectionVideo from "./SectionVideo";

export default function Home() {
  const { isMember, loading, account } = useData();

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

  return (
    <MainTemplate>
      <SectionHero />
      <SectionVideo />
      {!isMember && <CreateMember />}
      {isMember && <ProposalList />}
    </MainTemplate>
  );
}
