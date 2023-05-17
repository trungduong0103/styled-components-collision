import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBarWrapper, ItemLine } from './PpProgressIndicator.styles';
import ProgressItem from './components/ProgressItem';

const PpProgressIndicator = (props) => {
  const { steps, activeStepIndex, theme } = props;

  const getIconTheme = (index) => {
    if (index < activeStepIndex) {
      return theme.past;
    }
    if (index > activeStepIndex) {
      return theme.future;
    }
    return theme.current;
  };

  return (
    <ProgressBarWrapper role="list">
      {steps.map((step, index) => {
        const iconTheme = getIconTheme(index);
        const isActiveStep = index === activeStepIndex;

        return (
          <React.Fragment key={step.label}>
            <ProgressItem
              iconBgColor={iconTheme.iconBgColor}
              iconColor={iconTheme.iconColor}
              labelColor={iconTheme.labelColor}
              lineColor={iconTheme.lineColor}
              labelFontSize={iconTheme.labelFontSize}
              key={step.label}
              label={step.label}
              isActive={isActiveStep}
              icon={step.icon}
            />
            {index !== steps.length - 1 && (
              <ItemLine backgroundColor={iconTheme.lineColor} />
            )}
          </React.Fragment>
        );
      })}
    </ProgressBarWrapper>
  );
};

const itemThemePropTypes = PropTypes.shape({
  iconBgColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  lineColor: PropTypes.string.isRequired,
  labelFontSize: PropTypes.number.isRequired,
});

PpProgressIndicator.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
  activeStepIndex: PropTypes.number,
  theme: PropTypes.shape({
    past: itemThemePropTypes.isRequired,
    current: itemThemePropTypes.isRequired,
    future: itemThemePropTypes.isRequired,
  }).isRequired,
};

PpProgressIndicator.defaultProps = {
  activeStepIndex: -1,
};

export default PpProgressIndicator;
