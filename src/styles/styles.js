import styled from "styled-components";

const theme = {
  black: "hsl(0, 0%, 0%)",
  primary: "hsl(199, 92%, 74%)",
  primaryDark: "hsl(197, 53%, 54%)",
  primaryLight: "hsl(180, 100%, 86%)",
  secondary: "hsl(354, 100%, 90%)",
  secondaryFade: "hsla(354, 100%, 90%, .14)",
  secondaryDark: "hsl(354, 31%, 70%)",
  white: "hsl(0, 0%, 100%)"
};
// Secondary Light is white

const AbsoluteCenter = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SiteHeader = styled.h1`
  margin: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;
`;

export { theme, AbsoluteCenter, SiteHeader };
