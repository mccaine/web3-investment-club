const UNITS = 4;

function spacing(units: number) {
  return units * UNITS;
}

const sharedStyles = {
  spacing,
  mixins: {
    activeOpacity: 0.72,
  },
};

export default sharedStyles;