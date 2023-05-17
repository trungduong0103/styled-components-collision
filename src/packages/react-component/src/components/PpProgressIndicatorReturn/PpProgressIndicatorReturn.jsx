import React from 'react';
import PropTypes from 'prop-types';
import PpProgressIndicator from '../PpProgressIndicator';
import {
  mapCustomConfigToSteps,
  // getActiveStepIndex,
} from './PpProgressIndicatorReturn.utils';
import { DEFAULT_STAGES } from './PpProgressIndicatorReturn.constants';

const ReturnProgressIndicator = (props) => {
  const {
    shipmentEvents,
    returnTicket,
    progressItemThemes,
    translation,
  } = props;

  // const activeStatusIndex = getActiveStepIndex(
  //   DEFAULT_STAGES,
  //   shipmentEvents,
  //   returnTicket,
  // );

  const steps = mapCustomConfigToSteps(
    DEFAULT_STAGES,
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

  // if (returnTicket.isCancelled()) {
  //   const fixedTheme = progressItemThemes.cancelled;
  //   theme = {
  //     past: fixedTheme,
  //     current: fixedTheme,
  //     future: fixedTheme,
  //   };
  // }

  return (
    <PpProgressIndicator
      theme={theme}
      steps={steps}
      activeStepIndex={0}
    />
  );
};

const itemThemePropTypes = PropTypes.shape({
  iconBgColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  lineColor: PropTypes.string.isRequired,
  labelFontSize: PropTypes.number.isRequired,
});

ReturnProgressIndicator.propTypes = {
  progressItemThemes: PropTypes.shape({
    past: itemThemePropTypes,
    current: itemThemePropTypes,
    future: itemThemePropTypes,
    cancelled: itemThemePropTypes,
    texts: PropTypes.shape({
      requestReturnText: PropTypes.string,
      selectShipmentMethodText: PropTypes.string,
      returnProductText: PropTypes.string,
      getYourRefundText: PropTypes.string,
    }),
    icons: PropTypes.shape({
      CustomRequestReturnIcon: PropTypes.element,
      CustomSelectShipmentMethodIcon: PropTypes.element,
      CustomReturnProductIcon: PropTypes.element,
      CustomGetYourRefundIcon: PropTypes.element,
    }),
  }).isRequired,
  returnTicket: PropTypes.shape({
    isCancelled: PropTypes.func.isRequired,
  }).isRequired,
  shipmentEvents: PropTypes.arrayOf(
    PropTypes.shape({
      eventTypeMasterData: PropTypes.shape({
        stageKey: PropTypes.string,
      }),
    }),
  ).isRequired,
  translation: PropTypes.func.isRequired,
};

export default ReturnProgressIndicator;
