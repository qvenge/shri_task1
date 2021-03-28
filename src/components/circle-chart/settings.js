const dropShadowFilter = { inset: false, dx: 0, dy: 0, opacity: 0.17, blur: 7, spread: -2, radialOffset: 4 };
const lightingFilter = { inset: true, dx: -1.2, dy: 1, color: '#FFFFFF', opacity: 0.5, blur: 0.5, spread: 0 };
const glowFilterDark = { inset: true, dx: 0, dy: 0, opacity: 0.9, blur: 10, spread: 0 };
const glowFilterLight = { inset: true, dx: 0, dy: 0, opacity: 0.9, blur: 10, spread: -1 };

export default {
  origin: [120, 120],
  radius: 120,
  borderRadius: 4.4,
  innerRadiusRatio: 0.7,
  details: [
    {
      dark: {
        gradient: [
          { offset: 0.7, color: '#FFA300', opacity: 0.8 },
          { offset: 1, color: '#5B3A00', opacity: 0.8 },
        ],
        shadows: [
          { ...dropShadowFilter, color: '#F89E00' },
          { ...glowFilterDark, color: '#FFA200' },
          { ...lightingFilter },
        ],
      },
      light: {
        gradient: [
          { offset: '81.25%', color: '#FFB800', opacity: '56%' },
          { offset: '100%', color: '#FFEF99', opacity: '32%' },
        ],
        shadows: [{ ...glowFilterLight, color: '#FFB039', opacity: 0.9 }, { ...lightingFilter }],
      },
    },
    {
      dark: {
        gradient: [
          { offset: 0.7, color: '#633F00', opacity: 0.5 },
          { offset: 1, color: '#0F0900', opacity: 0.5 },
        ],
        shadows: [
          { ...dropShadowFilter, color: '#935D00' },
          { ...glowFilterDark, color: '#CA8100' },
          { ...lightingFilter },
        ],
      },
      light: {
        gradient: [
          { offset: '81.25%', color: '#FFB800', opacity: '24%' },
          { offset: '100%', color: '#FFEF99', opacity: '12%' },
        ],
        shadows: [{ ...glowFilterLight, color: '#FFB039', opacity: 0.4 }, { ...lightingFilter }],
      },
    },
    {
      dark: {
        gradient: [
          { offset: 0.7, color: '#9B9B9B', opacity: 0.5 },
          { offset: 1, color: '#382900', opacity: 0.5 },
        ],
        shadows: [
          { ...dropShadowFilter, color: '#000000' },
          { ...glowFilterDark, color: '#8B8B8B' },
          { ...lightingFilter },
        ],
      },
      light: {
        gradient: [
          { offset: '82.81%', color: '#A6A6A6', opacity: '17.25%' },
          { offset: '92.19%', color: '#CBCBCB', opacity: '5%' },
        ],
        shadows: [{ ...glowFilterLight, color: '#696969', opacity: 0.2 }, { ...lightingFilter }],
      },
    },
    {
      dark: {
        gradient: [
          { offset: 0.7, color: '#4D4D4D', opacity: 0.5 },
          { offset: 1, color: '#382900', opacity: 0.5 },
        ],
        shadows: [
          { ...dropShadowFilter, color: '#606060' },
          { ...glowFilterDark, color: '#262626' },
          { ...lightingFilter },
        ],
      },
      light: {
        gradient: [
          { offset: '82.81%', color: '#BFBFBF', opacity: '34.5%' },
          { offset: '92.19%', color: '#E4E4E4', opacity: '10%' },
        ],
        shadows: [{ ...glowFilterLight, color: '#838383', opacity: 0.6 }, { ...lightingFilter }],
      },
    },
  ],
};
