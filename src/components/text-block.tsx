import styled from "@emotion/styled";
import { fontSizes, colors } from "../constants";

export const TextBlock = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: ${fontSizes[0]};
  @media (max-width: 767px ) {
    font-size: ${fontSizes[2]};
  }
`;

export const H3 = styled.h3`
  font-family: 'Merriweather', serif;
  color: ${colors.purple};
  @media (max-width: 767px){
    font-size: ${fontSizes[2]};
  }
`;


export const H2 = styled.h2`
  font-family: 'Merriweather', serif;
  color: black;
  font-size: ${fontSizes[2]};
`;


