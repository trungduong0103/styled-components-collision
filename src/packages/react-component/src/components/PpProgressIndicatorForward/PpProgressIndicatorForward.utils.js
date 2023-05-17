import PARCEL_STAGE from './parcelStage.constants';
import EVENT_PHASE_KEY from './eventPhase.constants';
import PARCEL_ISSUE from './parcelIssue.constants';
import {
  DEFAULT_STAGES,
  CUSTOMS_STAGE_INDEX,
  DELIVERED_PHASE,
  OUT_FOR_DELIVERY_PHASE,
} from './PpProgressIndicatorForward.constants';
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
} from './components/DefaultIcons';

export const getDeliveredPhase = (events) => {
  const shouldDisplayReturnToSender = events?.some(
    (event) =>
      event.stageKey === PARCEL_STAGE.delivered &&
      event.phaseKey === EVENT_PHASE_KEY.return_to_sender,
  );

  if (shouldDisplayReturnToSender) return DELIVERED_PHASE.return_to_sender;

  const shouldDisplayCollectionPoint = events?.some(
    (event) =>
      event?.isFixedAddress &&
      (event?.stageKey === PARCEL_STAGE.delivered ||
        event?.stageKey === PARCEL_STAGE.out_for_delivery),
  );

  if (shouldDisplayCollectionPoint) return DELIVERED_PHASE.collected;

  const newestEvent = events[0];
  const shouldDisplayDelivery =
    newestEvent?.stageKey === PARCEL_STAGE.delivered &&
    newestEvent?.phaseKey === EVENT_PHASE_KEY.delivery &&
    !newestEvent?.isFinalEvent;

  if (shouldDisplayDelivery) return DELIVERED_PHASE.delivery;

  return DELIVERED_PHASE.delivered;
};

export const getOutForDeliveryPhase = (events) => {
  const shouldDisplayCollectionPoint = events?.some(
    (event) =>
      event?.isFixedAddress &&
      (event?.stageKey === PARCEL_STAGE.delivered ||
        event?.stageKey === PARCEL_STAGE.out_for_delivery),
  );

  if (shouldDisplayCollectionPoint)
    return OUT_FOR_DELIVERY_PHASE.at_collection_point;

  return OUT_FOR_DELIVERY_PHASE.out_for_delivery;
};

export const hasIssue = (issueState) => issueState === PARCEL_ISSUE.hasIssue;

export const getActiveStageIndex = (
  stages,
  shipmentCurrentStage,
  config = {},
) => {
  const { isHideCustomsPhase, hasCustomsStage } = config;
  const isCurrentlyCustoms = shipmentCurrentStage === PARCEL_STAGE.customs;

  // if parcel has customs phase, and is in customs phase, and isHideCustomsPhase is true, we use the previous phase as the current phase
  // https://parcelperform.slack.com/archives/C01L2RM4WFK/p1656079284362529?thread_ts=1656053305.576559&cid=C01L2RM4WFK
  if (hasCustomsStage && isHideCustomsPhase && isCurrentlyCustoms) {
    return CUSTOMS_STAGE_INDEX - 1;
  }

  return stages.indexOf(shipmentCurrentStage);
};

export const getShipmentStages = (config = {}) => {
  const { hasCustomsStage, isHideCustomsPhase } = config;

  return DEFAULT_STAGES.filter((stage) => {
    if (!hasCustomsStage || isHideCustomsPhase) {
      return stage !== PARCEL_STAGE.customs;
    }

    return stage;
  });
};

export const mapStagesToSteps = (
  shipmentStages,
  shipmentEvents,
  stepCustomConfig,
  translation,
) => {
  const { texts = {}, icons = {} } = stepCustomConfig;

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
      },
      out_for_delivery: {
        icon: CustomOutForDeliveryIcon || OutOfDeliveryIcon,
        label: outForDeliveryText || translation('out_for_delivery'),
      },
    };

    return mapping[getOutForDeliveryPhase(shipmentEvents)];
  };

  const getDeliveredStep = () => {
    const mapping = {
      return_to_sender: {
        icon: CustomReturnToSenderIcon || ReturnToSenderIcon,
        label: returnToSenderText || translation('return_to_sender'),
      },
      collected: {
        icon: CustomCollectedIcon || CollectedIcon,
        label: collectedText || translation('collected'),
      },
      delivery: {
        icon: CustomIssueIcon || IssueIcon,
        label: deliveryText || translation('delivery_issue'),
      },
      delivered: {
        icon: CustomDeliveredIcon || DeliveredIcon,
        label: deliveredText || translation('delivered'),
      },
    };

    return mapping[getDeliveredPhase(shipmentEvents)];
  };

  const mapStageToStep = (stage) => {
    switch (stage) {
      case PARCEL_STAGE.pickup:
        return {
          icon: CustomPickupIcon || OrderPlacedIcon,
          label: pickUpText || translation('picked_up'),
        };
      case PARCEL_STAGE.processing:
        return {
          icon: CustomInTransitIcon || IntransitIcon,
          label: inTransitText || translation('processing'),
        };
      case PARCEL_STAGE.customs:
        return {
          icon: CustomCustomsIcon || CustomsIcon,
          label: customsText || translation('customs'),
        };
      case PARCEL_STAGE.out_for_delivery:
        return outForDeliveryStep();
      case PARCEL_STAGE.delivered:
        return getDeliveredStep();
      default:
        return undefined;
    }
  };

  const steps = shipmentStages.map(mapStageToStep);

  return steps;
};

export const updateIssueStep = (originSteps, activeStepIndex, issueIcon) => {
  const steps = [...originSteps];

  steps[activeStepIndex] = {
    ...originSteps[activeStepIndex],
    icon: issueIcon,
  };

  return steps;
};

export const updateIssueTheme = (originTheme, issueTheme) => {
  return {
    ...originTheme,
    current: issueTheme,
  };
};
