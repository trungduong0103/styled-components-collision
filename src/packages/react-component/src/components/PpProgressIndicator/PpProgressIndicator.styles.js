import styled from 'styled-components';

import { ICON_HEIGHT } from './PpProgressIndicator.constants';

export const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemLine = styled.div`
  flex: 1;
  max-width: 48px;
  height: 1px;
  margin-top: ${ICON_HEIGHT / 2}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
