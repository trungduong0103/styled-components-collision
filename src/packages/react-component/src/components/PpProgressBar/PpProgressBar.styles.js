import styled from 'styled-components';

const ICON_HEIGHT = 40;
const ICON_WIDTH = 40;

export const ProgressBarWrapper = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`;

export const ItemIcon = styled.div`
  width: ${ICON_WIDTH}px;
  height: ${ICON_HEIGHT}px;
  border-radius: 50%;
  margin: 0 auto 2px auto;
  position: relative;
`;

export const ItemLine = styled.div`
  flex: 1;
  max-width: 48px;
  height: 1px;
  margin-top: ${ICON_HEIGHT / 2}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ItemContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50px;
  text-align: center;
  position: relative;
  text-transform: uppercase;
  &:first-child ${ItemLine} {
    display: none;
  }
`;

export const ItemLabel = styled.span`
  font-size: ${({ labelFontSize }) => labelFontSize}px;
  font-size: ${({ labelLineHeight }) => labelLineHeight}px;
  color: ${({ color }) => color};
  display: ${({ isActive }) => (isActive ? 'inline-block' : 'none')};
  width: 100%;
  overflow: hidden;
  word-break: break-word;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;
