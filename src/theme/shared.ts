const UNITS = 4;

// break points
export const bp = {
  xs: 0,
  sm: 690,
  md: 950,
  lg: 1440,
  xl: 1920,
}

type DeviceTypes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

/**
 * Sets media query break point
 * @param {string} xs min 0px
 * @param {string} sm min 690px
 * @param {string} md min 950px
 * @param {string} lg min 1440px
 * @param {string} xl min 1920px
 */
export const device:DeviceTypes = {
  xs: `(min-width: ${bp.xs}px)`,
  sm: `(min-width: ${bp.sm}px)`,
  md: `(min-width: ${bp.md}px)`,
  lg: `(min-width: ${bp.lg}px)`,
  xl: `(min-width: ${bp.xl}px)`,
}


function spacing(units: number) {
  return units * UNITS;
}

const sharedStyles = {
  spacing,
  mixins: {
    activeOpacity: 0.72,
  },
  hoverFix: '@media (hover: hover)',
  bp: {
    xs: `(min-width: ${bp.xs}px)`,
    sm: `(min-width: ${bp.sm}px)`,
    md: `(min-width: ${bp.md}px)`,
    lg: `(min-width: ${bp.lg}px)`,
    xl: `(min-width: ${bp.xl}px)`,
  },
};

export default sharedStyles;