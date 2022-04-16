import styled from "styled-components";
import { device } from "@theme/index";

interface Props {
  sx?: any;
}

export const Section = styled.section<Props>`
  background-color: #fef7f6;
  padding-left: ${({ theme }) => theme.spacing(3)}px;
  padding-right: ${({ theme }) => theme.spacing(3)}px;
  display: block;
  width: 100%;
  @media ${device.sm} {
    padding-left: ${({ theme }) => theme.spacing(3)}px;
    padding-right: ${({ theme }) => theme.spacing(3)}px;
  }
  @media ${device.md} {
    padding-left: ${({ theme }) => theme.spacing(13)}px;
    padding-right: ${({ theme }) => theme.spacing(13)}px;
  }
  ${({ sx }) => sx && sx};
`;
