import PARCEL_STAGE from './parcelStage.constants';
import EVENT_PHASE_KEY from './eventPhase.constants';

export const DELIVERED_PHASE = {
  return_to_sender: 'return_to_sender',
  collected: 'collected',
  delivery: 'delivery',
  delivered: 'delivered',
};

export const OUT_FOR_DELIVERY_PHASE = {
  at_collection_point: 'at_collection_point',
  out_for_delivery: 'out_for_delivery',
};

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
