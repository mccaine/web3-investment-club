export interface Margin {
  mt?: number;
  mx?: number;
  my?: number;
  mb?: number;
  mr?: number;
  ml?: number;
}

export interface Padding {
  pb?: number;
  pt?: number;
  px?: number;
  py?: number;
  pr?: number;
  pl?: number;
}

import { css } from "styled-components";

export const marginCSS = css<Margin>`
  ${({ mt, theme }) => mt && `margin-top: ${theme.spacing(mt)}px`};
  ${({ mb, theme }) => mb && `margin-bottom: ${theme.spacing(mb)}px`};
  ${({ mr, theme }) => mr && `margin-right: ${theme.spacing(mr)}px`};
  ${({ ml, theme }) => ml && `margin-left: ${theme.spacing(ml)}px`};
  ${({ mx, theme }) => mx && `margin-left: ${theme.spacing(mx)}px`};
  ${({ mx, theme }) => mx && `margin-right: ${theme.spacing(mx)}px`};
  ${({ my, theme }) => my && `margin-top: ${theme.spacing(my)}px`};
  ${({ my, theme }) => my && `margin-bottom: ${theme.spacing(my)}px`};
`;

export const paddingCSS = css<Padding>`
  ${({ pt, theme }) => pt && `padding-top: ${theme.spacing(pt)}px`};
  ${({ pb, theme }) => pb && `padding-bottom: ${theme.spacing(pb)}px`};
  ${({ pr, theme }) => pr && `padding-right: ${theme.spacing(pr)}px`};
  ${({ pl, theme }) => pl && `padding-left: ${theme.spacing(pl)}px`};
  ${({ px, theme }) => px && `padding-left: ${theme.spacing(px)}px`};
  ${({ px, theme }) => px && `padding-right: ${theme.spacing(px)}px`};
  ${({ py, theme }) => py && `padding-top: ${theme.spacing(py)}px`};
  ${({ py, theme }) => py && `padding-bottom: ${theme.spacing(py)}px`};
`;
