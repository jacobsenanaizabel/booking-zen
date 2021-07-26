import { css } from 'styled-components';

export default {
  xs: (...args) => css`
    @media
      (-webkit-min-device-pixel-ratio: 2.2) and (max-device-width: 490px),
      (min-width: 320px) and (max-width: 968px) and (orientation: landscape),
      (max-width: 480px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: 481px) and (max-width: 1024px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
  @media (min-width: 1200px) {
    ${css(...args)};
  }
  `,
  xxl: (...args) => css`
  @media (min-width: 1366px) {
    ${css(...args)};
  }
  `,
  xxxl: (...args) => css`
  @media (min-width: 1600px) {
    ${css(...args)};
  }
  `,
};
