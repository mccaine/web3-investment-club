import { FC } from "react";

import { PageProposals } from "@containers/PageProposals";
import MainTemplate from "@templates/Main";

const Proposals: FC = () => {
  return (
    <MainTemplate>
      <PageProposals />
    </MainTemplate>
  );
};

export default Proposals;
