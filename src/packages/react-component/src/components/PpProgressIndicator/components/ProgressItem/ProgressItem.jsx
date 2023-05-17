import React from 'react';
import PropTypes from 'prop-types';
import { ItemContainer, ItemIcon, ItemLabel } from './ProgressItem.styles';

const ProgressItem = ({
  label,
  icon: Icon,
  iconColor,
  iconBgColor,
  labelColor,
  labelFontSize,
  isActive,
}) => {
  return (
    // Note:
    // Should use role=listitem aria-current=true instead of data-testid
    // but getByRole in @testing-library/dom#7 does not support aria-current
    // -> Need upgrade to @testing-library/dom#8
    <ItemContainer data-testid={isActive ? 'step active' : ''} role="listitem">
      <ItemIcon>
        <Icon bgColor={iconBgColor} color={iconColor} />
      </ItemIcon>
      <ItemLabel
        color={labelColor}
        isActive={isActive}
        labelFontSize={labelFontSize}
      >
        {label}
      </ItemLabel>
    </ItemContainer>
  );
};

ProgressItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconBgColor: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  labelFontSize: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ProgressItem;
