import styled from 'styled-components'
import { Card } from 'antd'

import { COLOR_CODES, SPACES } from '../../assets/styles/constants'

// Transient props for styled-component not to pass the custom props to the DOM
// https://styled-components.com/docs/api#transient-props
interface CardProps {
    $first?: boolean;
    $transparent?: boolean;
}

// The dashboard cards are always placed vertically
export const LargeCard = styled(Card) <CardProps>`
  padding: 0 !important;
  .ant-card-body {
    padding: ${props => props.$first || props.$transparent ? 0 : SPACES.DASHBOARD_PADDING}  !important;
  }
  margin: 0 !important;
  margin-top: ${props => props.$first ? 0 : SPACES.DASHBOARD_PADDING} !important;
  background-color: ${props => props.$transparent ? "inherit" : "white"};
  box-shadow: ${props => props.$transparent ? "none" : `0.1px 0 0 0.3px ${COLOR_CODES.ANGILA.WATTLE}`};
`;

export const MediumCard = styled(Card) <CardProps>`
  padding: 0 !important;
  .ant-card-body {
    padding: ${props => props.$first || props.$transparent ? 0 : SPACES.DASHBOARD_PADDING}  !important;
  }
  margin: 0 !important;
  margin-top: ${props => props.$first ? 0 : SPACES.DASHBOARD_PADDING} !important;
  width: 1200px;
  max-width: 100%;
  background-color: ${props => props.$transparent ? "inherit" : "white"};
  box-shadow: ${props => props.$transparent ? "none" : `0.1px 0 0 0.3px ${COLOR_CODES.ANGILA.WATTLE}`};
`;

export const SmallCard = styled(Card) <CardProps>`
  padding: 0 !important;
  .ant-card-body {
    padding: ${props => props.$first || props.$transparent ? 0 : SPACES.DASHBOARD_PADDING}  !important;
  }
  margin: 0 !important;
  margin-top: ${props => props.$first ? 0 : SPACES.DASHBOARD_PADDING} !important;
  width: 700px;
  max-width: 100%;
  background-color: ${props => props.$transparent ? "inherit" : "white"};
  box-shadow: ${props => props.$transparent ? "none" : `0.1px 0 0 0.3px ${COLOR_CODES.ANGILA.WATTLE}`};
`;
