import React from 'react';
import PropTypes from 'prop-types';
import PARCEL_STAGE from './parcelStage.constants';
import PARCEL_ISSUE from './parcelIssue.constants';
import {
  IntransitIcon,
  OrderPlacedIcon,
  OutOfDeliveryIcon,
  DeliveredIcon,
  IssueIcon,
  CustomsIcon,
  CollectedIcon,
  AtCollectionPoint,
  ReturnToSenderIcon,
} from './Icons';
import {
  ProgressBarWrapper,
  ItemIcon,
  ItemContainer,
  ItemLine,
  ItemLabel,
} from './PpProgressBar.styles';
import {
  getDeliveredPhase,
  getOutForDeliveryPhase,
} from './PpProgressBar.utils';

const ProgressItem = ({
  label,
  icon: Icon,
  iconColor,
  iconBgColor,
  labelColor,
  labelFontSize,
  labelLineHeight,
  isActive,
}) => {
  return (
    <ItemContainer>
      <ItemIcon>
        <Icon bgColor={iconBgColor} color={iconColor} />
      </ItemIcon>
      <ItemLabel
        color={labelColor}
        isActive={isActive}
        labelFontSize={labelFontSize}
        labelLineHeight={labelLineHeight}
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
  labelLineHeight: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const ProgressBar = ({
  stage,
  events,
  progressItemThemes,
  hasCustomsStage,
  isHideCustomsPhase,
  issueState,
  translation,
  selectedTheme,
}) => {
  const { texts = {}, icons = {} } = progressItemThemes;

  const {
    pickUpText,
    inTransitText,
    customsText,
    outForDeliveryText,
    deliveredText,
    atCollectionPointText,
    collectedText,
    returnToSenderText,
    deliveryText,
  } = texts;

  const {
    CustomPickupIcon,
    CustomCustomsIcon,
    CustomInTransitIcon,
    CustomOutForDeliveryIcon,
    CustomDeliveredIcon,
    CustomAtCollectionPointIcon,
    CustomCollectedIcon,
    CustomReturnToSenderIcon,
    CustomIssueIcon,
  } = icons;

  const outForDeliveryStep = () => {
    const mapping = {
      at_collection_point: {
        icon: CustomAtCollectionPointIcon || AtCollectionPoint,
        label: atCollectionPointText || translation('at_collection_point'),
        value: PARCEL_STAGE.out_for_delivery,
      },
      out_for_delivery: {
        icon: CustomOutForDeliveryIcon || OutOfDeliveryIcon,
        label: outForDeliveryText || translation('out_for_delivery'),
        value: PARCEL_STAGE.out_for_delivery,
      },
    };

    return mapping[getOutForDeliveryPhase(events)];
  };

  const getDeliveredStep = () => {
    const mapping = {
      return_to_sender: {
        icon: CustomReturnToSenderIcon || ReturnToSenderIcon,
        label: returnToSenderText || translation('return_to_sender'),
        value: PARCEL_STAGE.delivered,
      },
      collected: {
        icon: CustomCollectedIcon || CollectedIcon,
        label: collectedText || translation('collected'),
        value: PARCEL_STAGE.delivered,
      },
      delivery: {
        icon: CustomIssueIcon || IssueIcon,
        label: deliveryText || translation('delivery_issue'),
        value: PARCEL_STAGE.delivered,
      },
      delivered: {
        icon: CustomDeliveredIcon || DeliveredIcon,
        label: deliveredText || translation('delivered'),
        value: PARCEL_STAGE.delivered,
      },
    };

    return mapping[getDeliveredPhase(events)];
  };

  const defaultSteps = [
    {
      icon: CustomPickupIcon || OrderPlacedIcon,
      label: pickUpText || translation('picked_up'),
      value: PARCEL_STAGE.pickup,
    },
    {
      icon: CustomInTransitIcon || IntransitIcon,
      label: inTransitText || translation('processing'),
      value: PARCEL_STAGE.processing,
    },
    {
      icon: CustomCustomsIcon || CustomsIcon,
      label: customsText || translation('customs'),
      value: PARCEL_STAGE.customs,
    },
    outForDeliveryStep(),
    getDeliveredStep(),
  ];

  const steps = defaultSteps.filter((step) => {
    if (!hasCustomsStage || isHideCustomsPhase) {
      return step.value !== PARCEL_STAGE.customs;
    }

    return step;
  });

  const getCurrentIndex = () => {
    const isCurrentlyCustoms = stage === PARCEL_STAGE.customs;
    // if parcel has customs phase, and is in customs phase, and isHideCustomsPhase is true, we use the previous phase as the current phase
    // https://parcelperform.slack.com/archives/C01L2RM4WFK/p1656079284362529?thread_ts=1656053305.576559&cid=C01L2RM4WFK
    if (hasCustomsStage && isHideCustomsPhase && isCurrentlyCustoms) {
      return defaultSteps.findIndex((step) => step.value === stage) - 1;
    }
    return steps.findIndex((step) => step.value === stage);
  };

  const currentIndex = getCurrentIndex();

  const hasIssue = (index) => {
    return currentIndex === index && issueState === PARCEL_ISSUE.hasIssue;
  };

  const getIconTheme = (index) => {
    if (selectedTheme) {
      return progressItemThemes[selectedTheme];
    }

    if (index < currentIndex) {
      return progressItemThemes.past;
    }
    if (index > currentIndex) {
      return progressItemThemes.future;
    }
    if (hasIssue(index)) {
      return progressItemThemes.issue;
    }
    return progressItemThemes.current;
  };

  return (
    <ProgressBarWrapper>
      {steps.map((step, index) => {
        const iconTheme = getIconTheme(index);

        return (
          <>
            <ProgressItem
              iconBgColor={iconTheme.iconBgColor}
              iconColor={iconTheme.iconColor}
              labelColor={iconTheme.labelColor}
              lineColor={iconTheme.lineColor}
              labelFontSize={iconTheme.labelFontSize}
              key={step.value}
              label={step.label}
              isActive={index === currentIndex}
              icon={hasIssue(index) ? CustomIssueIcon || IssueIcon : step.icon}
            />
            {index !== steps.length - 1 && (
              <ItemLine backgroundColor={iconTheme.lineColor} />
            )}
          </>
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

const eventTypeMasterDataProptypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  phaseKey: PropTypes.string.isRequired,
  stageKey: PropTypes.string.isRequired,
  isFinalEvent: PropTypes.bool.isRequired,
  isFixedAddress: PropTypes.bool.isRequired,
  analytics: PropTypes.string,
  delayExceptionSource: PropTypes.string,
});

ProgressBar.propTypes = {
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
  stage: PropTypes.string,
  translation: PropTypes.func.isRequired,
  hasCustomsStage: PropTypes.bool,
  isHideCustomsPhase: PropTypes.bool,
  issueState: PropTypes.string,
  selectedTheme: PropTypes.string,
  events: PropTypes.arrayOf(eventTypeMasterDataProptypes),
};

ProgressBar.defaultProps = {
  stage: undefined,
  hasCustomsStage: false,
  isHideCustomsPhase: false,
  issueState: undefined,
  selectedTheme: undefined,
  events: [],
};

export default ProgressBar;
