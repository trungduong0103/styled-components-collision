import React from 'react';
import PpProgressIndicator from '../index';
import {
  IntransitIcon,
  OrderPlacedIcon,
  OutOfDeliveryIcon,
  DeliveredIcon,
  CustomsIcon,
  CollectedIcon,
  AtCollectionPoint,
  ReturnToSenderIcon,
} from './components/Icons';

const PAST_THEME = {
  iconBgColor: '#E9F3FF',
  iconColor: '#fff',
  labelColor: '#AAAAAA',
  lineColor: '#D5D5D5',
  labelFontSize: 10,
};

const CURRENT_THEME = {
  iconBgColor: '#14A6DE',
  iconColor: '#fff',
  labelColor: '#000',
  lineColor: '#D5D5D5',
  labelFontSize: 10,
};

const FUTURE_THEME = {
  iconBgColor: '#F44336',
  iconColor: '#fff',
  labelColor: '#000',
  lineColor: '#D5D5D5',
  labelFontSize: 10,
};

const STEPS = [
  {
    label: 'Intransit',
    icon: IntransitIcon,
  },
  {
    label: 'Order placed',
    icon: OrderPlacedIcon,
  },
  {
    label: 'Out of delivery',
    icon: OutOfDeliveryIcon,
  },
  {
    label: 'Delivered',
    icon: DeliveredIcon,
  },
  {
    label: 'Customs',
    icon: CustomsIcon,
  },
  {
    label: 'Collected',
    icon: CollectedIcon,
  },
  {
    label: 'At collection ',
    icon: AtCollectionPoint,
  },
  {
    label: 'Return to sender',
    icon: ReturnToSenderIcon,
  },
];

export default {
  title: 'styled/PpProgressIndicator',
};

const Template = () => {
  const activeStepIndex = 3;

  const theme = {
    past: PAST_THEME,
    current: CURRENT_THEME,
    future: FUTURE_THEME,
  };

  return (
    <PpProgressIndicator
      theme={theme}
      steps={STEPS}
      activeStepIndex={activeStepIndex}
    />
  );
};

export const Default = Template.bind({});
