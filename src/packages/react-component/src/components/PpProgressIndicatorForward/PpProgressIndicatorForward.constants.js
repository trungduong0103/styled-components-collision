import PARCEL_STAGE from './parcelStage.constants';

export const DEFAULT_STAGES = [
  PARCEL_STAGE.pickup,
  PARCEL_STAGE.processing,
  PARCEL_STAGE.customs,
  PARCEL_STAGE.out_for_delivery,
  PARCEL_STAGE.delivered,
];

export const CUSTOMS_STAGE_INDEX = DEFAULT_STAGES.indexOf(PARCEL_STAGE.customs);

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
