import React from 'react';
import { STAGE_KEYS } from './masterData';
import PpProgressIndicatorReturn from '.';

const PROGRESS_ITEM_THEMES = {
  past: {
    iconBgColor: '#feb798',
    iconColor: '#fff',
    labelColor: '#AAAAAA',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
  current: {
    iconBgColor: '#FC6F30',
    iconColor: '#fff',
    labelColor: '#000',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
  future: {
    iconBgColor: '#feb798',
    iconColor: '#fff',
    labelColor: '#BFBFBF',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
  cancelled: {
    iconBgColor: '#898989',
    iconColor: '#fff',
    labelColor: '#898989',
    lineColor: '#898989',
    labelFontSize: 10,
  },
};

const SHIPMENT_BOOK_FAILED = {
  return: {
    return_status: 'approved',
  },
  shipmentEvents: [
    {
      eventTypeMasterData: { stageKey: STAGE_KEYS.returnReturnProduct },
    },
  ],
};

const SHIPMENT_APPROVED = {
  return: {
    return_status: 'approved',
  },
  shipmentEvents: [
    {
      eventTypeMasterData: { stageKey: STAGE_KEYS.returnSelectShipmentMethod },
    },
  ],
};

const SHIPMENT_CANCELLED = {
  return: {
    return_status: 'cancelled',
  },
  shipmentEvents: [{ eventTypeMasterData: { stageKey: 'cancelled' } }],
};

const translation = (key) => key.replaceAll('_', ' ');

export const ReturnProductStep = () => (
  <PpProgressIndicatorReturn
    progressItemThemes={PROGRESS_ITEM_THEMES}
    translation={translation}
    shipment={SHIPMENT_BOOK_FAILED}
  />
);

export const SelectShipmentMethodStep = () => (
  <PpProgressIndicatorReturn
    progressItemThemes={PROGRESS_ITEM_THEMES}
    translation={translation}
    shipment={SHIPMENT_APPROVED}
  />
);

export const CancelledStep = () => (
  <PpProgressIndicatorReturn
    progressItemThemes={PROGRESS_ITEM_THEMES}
    translation={translation}
    shipment={SHIPMENT_CANCELLED}
  />
);

export default {
  title: 'PpProgressIndicatorReturn',
};
