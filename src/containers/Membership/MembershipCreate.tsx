import { FC, useCallback } from "react";
import styled, { css } from "styled-components";

import { Title } from "@components/typography";
import Box from "@components/box";
import Button from "@components/button";

import { useData } from "@contexts/dataContext";

interface Props {}

const MembershipCreate: FC<Props> = () => {
  const { createStakeholder } = useData();

  const handleMemshipStake = useCallback(
    (item) => {
      createStakeholder(item.stake);
    },
    [createStakeholder]
  );

  return (
    <Box
      sx={css`
        display: flex;
        justify-content: space-around;
      `}
    >
      <Box
        sx={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Title>Scout</Title>
        <Button title="0.1 Matic" item={{ stake: "0.1" }} onClick={handleMemshipStake} />
      </Box>
      <Box
        sx={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Title>Invest</Title>
        <Button title="0.2 Matic" item={{ stake: "0.2" }} onClick={handleMemshipStake} />
      </Box>
    </Box>
  );
};

export default MembershipCreate;
