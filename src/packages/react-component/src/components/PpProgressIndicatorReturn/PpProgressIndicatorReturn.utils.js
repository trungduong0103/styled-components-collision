import { getLastShipmentEventStageKey } from './returnShipment';
import { STAGE_KEYS } from './masterData';
import {
  RequestReturnIcon,
  SelectShipmentMethodIcon,
  ReturnPropductIcon,
  RefundIcon,
} from './components/DefaultIcons';

export const getActiveStepIndex = (stages, shipmentEvents, returnTicket) => {
  // if (returnTicket.isCancelled()) {
  //   return -1;
  // }

  const shipmenStageKey = getLastShipmentEventStageKey(shipmentEvents);
  return stages.indexOf(shipmenStageKey);
};

export const mapCustomConfigToSteps = (
  stages,
  stepCustomConfig,
  translation,
) => {
  const { texts = {}, icons = {} } = stepCustomConfig;

  const {
    requestReturnText,
    selectShipmentMethodText,
    returnProductText,
    getYourRefundText,
  } = texts;

  const {
    CustomRequestReturnIcon,
    CustomSelectShipmentMethodIcon,
    CustomReturnProductIcon,
    CustomGetYourRefundIcon,
  } = icons;
  const steps = stages.map((stage) => {
    switch (stage) {
      case STAGE_KEYS.returnRequestReturn:
        return {
          icon: CustomRequestReturnIcon || RequestReturnIcon,
          label: requestReturnText || translation('RETURN_REQUEST_RETURN'),
        };
      case STAGE_KEYS.returnSelectShipmentMethod:
        return {
          icon: CustomSelectShipmentMethodIcon || SelectShipmentMethodIcon,
          label:
            selectShipmentMethodText ||
            translation('RETURN_SELECT_SHIPMENT_METHOD'),
        };
      case STAGE_KEYS.returnReturnProduct:
        return {
          icon: CustomReturnProductIcon || ReturnPropductIcon,
          label: returnProductText || translation('RETURN_RETURN_PRODUCT'),
        };
      case STAGE_KEYS.returnRefundCompleted:
        return {
          icon: CustomGetYourRefundIcon || RefundIcon,
          label: getYourRefundText || translation('RETURN_GET_YOUR_REFUND'),
        };
      default:
        return undefined;
    }
  });

  return steps;
};
