import { FC } from "react";
import styled, { css } from "styled-components";

import { Stats } from "@containers/Stats";
import { Section } from "@components/layout";

const SectionMembership: FC = () => {
  return (
    <Section
      sx={css`
        background-color: ${({ theme }) => theme.palette.color.redMat};
      `}
    >
      <Stats />
    </Section>
  );
};

export default SectionMembership;
