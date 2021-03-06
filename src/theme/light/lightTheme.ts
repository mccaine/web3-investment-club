import {DefaultTheme} from 'styled-components';
import {color, ColorTypes} from '../color'

type Background = {
    primary: string;
  };
  
  type Text = {
    primary: string;
    secondary: string;
    tertiary: string;
    highlight: string;
    disabled: string;
    link: string;
  };
  
  type Palette = {
    type: 'DARK' | 'LIGHT';
    background: Background;
    text: Text;
    color: ColorTypes;
  };
  
  type Mixins = {
    activeOpacity: number;
    maxNavWidth: string;
    maxPageWidth: string;
    maxPageWidthNarrow: string;
  };

  type BreakPoints = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }

  declare module 'styled-components' {
    export interface DefaultTheme {
      palette: Palette;
      mixins: Mixins;
      spacing(params: number): number;
      hoverFix: string;
      bp: BreakPoints;
      bg: ColorTypes;
    }
  }
  
  import shared from '../shared';
  
  const lightTheme: DefaultTheme = {
    ...shared,
    palette: {
      type: 'LIGHT',
      background: {
        primary: '#f7f7f7',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        tertiary: 'rgba(0, 0, 0, 0.3)',
        highlight: 'rgba(0, 0, 0, 1)',
        disabled: 'rgba(0, 0, 0, 0.3)',
        link: '#0576fa',
      },
      color: color,
    },
    bg: color,
  };
  
  export default lightTheme;
  