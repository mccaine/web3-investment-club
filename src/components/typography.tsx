import styled, { css } from "styled-components";
import { device } from "@theme/index";

type Props = {
  size?: "small" | "medium" | "large";
  rotate?: boolean | number;
  sx?: any;
};

const titleSmall = css`
  font-size: 19px;
  @media ${device.md} {
    font-size: 21px;
  }
`;

const titleMedium = css`
  font-size: 36px;
  @media ${device.md} {
    font-size: 44px;
  }
`;

const titleLarge = css`
  font-size: 44px;
  @media ${device.md} {
    font-size: 60px;
  }
`;

const titleSizes = {
  small: titleSmall,
  medium: titleMedium,
  large: titleLarge,
};

export const Title = styled.div<Props>`
  ${({ size = "medium" }) => titleSizes[size]};
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.05rem;
  text-align: left;
  display: inline-block;
  ${({ sx }) => sx && sx};
`;

const subTitleSmall = css`
  font-size: 14px;
  @media ${device.md} {
    font-size: 16px;
  }
`;

const subTitleMedium = css`
  font-size: 19px;
  @media ${device.md} {
    font-size: 22px;
  }
`;

const subTitleLarge = css`
  font-size: 20px;
  @media ${device.md} {
    font-size: 22px;
  }
`;

const subTitleSizes = {
  small: subTitleSmall,
  medium: subTitleMedium,
  large: subTitleLarge,
};

export const SubTitle = styled.div<Props>`
  ${({ size = "medium" }) => subTitleSizes[size]};
  letter-spacing: -0.05rem;
  text-align: left;
  display: inline-block;
  ${({ sx }) => sx && sx};
`;

export const Caption = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 14px;
`;
