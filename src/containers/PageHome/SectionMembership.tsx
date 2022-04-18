import { FC } from "react";
import styled, { css } from "styled-components";

import { MembershipCreate } from "@containers/Membership";
import { Section } from "@components/layout";
import { device } from "@theme/index";

interface Props {
  isMember: boolean;
}

const SectionMembership: FC<Props> = ({ isMember }) => {
  return (
    <Section
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
      <Inner>
        <MembershipCreate />
      </Inner>
    </Section>
  );
};

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.mixins.maxPageWidthNarrow};
`;

export default SectionMembership;
