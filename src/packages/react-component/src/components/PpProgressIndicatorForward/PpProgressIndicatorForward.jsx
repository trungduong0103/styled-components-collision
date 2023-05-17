import React from 'react';
import PropTypes from 'prop-types';
import PARCEL_STAGE from './parcelStage.constants';
import PpProgressIndicator from '../PpProgressIndicator';
import {
  mapStagesToSteps,
  getShipmentStages,
  getActiveStageIndex,
  hasIssue,
  updateIssueStep,
  updateIssueTheme,
} from './PpProgressIndicatorForward.utils';
import { IssueIcon } from './components/DefaultIcons';
import { ForwardProgressIndicatorWrapper } from './PpProgressIndicatorForward.styles';

const ForwardProgressIndicator = (props) => {
  const {
    stage,
    hasCustomsStage,
    isHideCustomsPhase,
    issueState,
    progressItemThemes,
    translation,
    events,
    selectedTheme,
  } = props;

  const shipmentStages = getShipmentStages({
    hasCustomsStage,
    isHideCustomsPhase,
  });

  const activeStageIndex = getActiveStageIndex(shipmentStages, stage, {
    isHideCustomsPhase,
    hasCustomsStage,
  });

  let steps = mapStagesToSteps(
    shipmentStages,
    events,
    {
      texts: progressItemThemes.texts,
      icons: progressItemThemes.icons,
    },
    translation,
  );

  let theme = {
    past: progressItemThemes.past,
    current: progressItemThemes.current,
    future: progressItemThemes.future,
  };

  if (hasIssue(issueState)) {
    const issueIcon = progressItemThemes?.icons?.CustomIssueIcon || IssueIcon;

    theme = updateIssueTheme(theme, progressItemThemes.issue);
    steps = updateIssueStep(steps, activeStageIndex, issueIcon);
  }

  if (selectedTheme) {
    const fixedTheme = progressItemThemes[selectedTheme];
    theme = {
      past: fixedTheme,
      current: fixedTheme,
      future: fixedTheme,
    };
  }

  return (
    <ForwardProgressIndicatorWrapper>
      <PpProgressIndicator
        theme={theme}
        steps={steps}
        activeStepIndex={activeStageIndex}
      />
    </ForwardProgressIndicatorWrapper>
  );
};

const itemThemePropTypes = PropTypes.shape({
  iconBgColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  lineColor: PropTypes.string.isRequired,
  labelFontSize: PropTypes.number.isRequired,
});

const eventTypeMasterDataPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  phaseKey: PropTypes.string.isRequired,
  stageKey: PropTypes.string.isRequired,
  isFinalEvent: PropTypes.bool.isRequired,
  isFixedAddress: PropTypes.bool.isRequired,
  analytics: PropTypes.string,
  delayExceptionSource: PropTypes.string,
});

ForwardProgressIndicator.propTypes = {
  progressItemThemes: PropTypes.shape({
    past: itemThemePropTypes,
    current: itemThemePropTypes,
    future: itemThemePropTypes,
    issue: itemThemePropTypes,
    texts: PropTypes.shape({
      pickUpText: PropTypes.string,
      inTransitText: PropTypes.string,
      customsText: PropTypes.string,
      outForDeliveryText: PropTypes.string,
      deliveredText: PropTypes.string,
      atCollectionPointText: PropTypes.string,
      collectedText: PropTypes.string,
      returnToSenderText: PropTypes.string,
      deliveryText: PropTypes.string,
    }),
    icons: PropTypes.shape({
      CustomPickupIcon: PropTypes.element,
      CustomCustomsIcon: PropTypes.element,
      CustomInTransitIcon: PropTypes.element,
      CustomOutForDeliveryIcon: PropTypes.element,
      CustomDeliveredIcon: PropTypes.element,
      CustomAtCollectionPointIcon: PropTypes.element,
      CustomCollectedIcon: PropTypes.element,
      CustomReturnToSenderIcon: PropTypes.element,
      CustomIssueIcon: PropTypes.element,
    }),
  }).isRequired,
  stage: PropTypes.oneOf(Object.values(PARCEL_STAGE)),
  translation: PropTypes.func.isRequired,
  hasCustomsStage: PropTypes.bool,
  isHideCustomsPhase: PropTypes.bool,
  issueState: PropTypes.string,
  selectedTheme: PropTypes.string,
  events: PropTypes.arrayOf(eventTypeMasterDataPropTypes),
};

ForwardProgressIndicator.defaultProps = {
  stage: undefined,
  hasCustomsStage: false,
  isHideCustomsPhase: false,
  issueState: undefined,
  selectedTheme: undefined,
  events: [],
};

export default ForwardProgressIndicator;
