import styled from 'styled-components';
import { ICON_HEIGHT, ICON_WIDTH } from '../../PpProgressIndicator.constants';

export const ItemIcon = styled.div`
  width: ${ICON_WIDTH}px;
  height: ${ICON_HEIGHT}px;
  border-radius: 50%;
  margin: 0 auto 2px auto;
  position: relative;
`;

export const ItemContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50px;
  text-align: center;
  position: relative;
  text-transform: uppercase;
`;

export const ItemLabel = styled.span`
  font-size: ${({ labelFontSize }) => labelFontSize}px;
  color: ${({ color }) => color};
  display: ${({ isActive }) => (isActive ? 'inline-block' : 'none')};
  width: 100%;
  overflow: hidden;
  word-break: break-word;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;
