import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PARCEL_STAGE from '@pperform/pp-constants/parcelStage.constants';
import PpProgressIndicatorForward from '../index';

const PROGRESS_ITEM_THEMES = {
  past: {
    iconBgColor: '#E9F3FF',
    iconColor: '#fff',
    labelColor: '#AAAAAA',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
  current: {
    iconBgColor: '#14A6DE',
    iconColor: '#fff',
    labelColor: '#000',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
  future: {
    iconBgColor: '#EDEDED',
    iconColor: '#fff',
    labelColor: '#BFBFBF',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
  issue: {
    iconBgColor: '#F44336',
    iconColor: '#fff',
    labelColor: '#000',
    lineColor: '#D5D5D5',
    labelFontSize: 10,
  },
};

const ACTIVE_STEP_TESTID = 'step active';

const AT_COLLECTION_POINT_EVENTS = [
  [
    {
      id: 1,
      stageKey: 'delivered',
      phaseKey: 'H',
      isFixedAddress: true,
      isFinalEvent: true,
    },
  ],
  [
    {
      id: 1,
      stageKey: 'out_for_delivery',
      phaseKey: 'G',
      isFixedAddress: true,
      isFinalEvent: false,
    },
  ],
];

const translation = (key) => `<<< ${key} >>>`;

describe('PpProgressIndicatorForward', () => {
  const setup = (props) => {
    const utils = render(
      <PpProgressIndicatorForward
        progressItemThemes={PROGRESS_ITEM_THEMES}
        translation={translation}
        {...props}
      />,
    );

    const { getAllByRole, getByTestId, queryByText } = utils;

    const getCustomsStep = () => queryByText('<<< customs >>>');
    const getOutForDeliveryStep = () => queryByText('<<< out_for_delivery >>>');
    const getDeliveredStep = () => queryByText('<<< delivered >>>');
    const getAtCollectionPointStep = () =>
      queryByText('<<< at_collection_point >>>');
    const getCollectedStep = () => queryByText('<<< collected >>>');
    const getDeliveryStep = () => queryByText('<<< delivery_issue >>>');
    const getAllSteps = () => getAllByRole('listitem');
    const getActiveStep = () => getByTestId(ACTIVE_STEP_TESTID);

    return {
      ...utils,
      getAllSteps,
      getActiveStep,
      getCustomsStep,
      getOutForDeliveryStep,
      getDeliveredStep,
      getAtCollectionPointStep,
      getCollectedStep,
      getDeliveryStep,
    };
  };

  it('Should show custom stage when hasCustomsStage=TRUE', () => {
    const { getCustomsStep, getAllSteps } = setup({
      stage: PARCEL_STAGE.customs,
      hasCustomsStage: true,
    });

    expect(getAllSteps()).toHaveLength(5);
    expect(getCustomsStep()).toBeInTheDocument();
  });

  it('Should hide custom stage hasCustomsStage=FALSE', () => {
    const { getCustomsStep, getAllSteps } = setup({
      stage: PARCEL_STAGE.customs,
      hasCustomsStage: false,
    });

    expect(getAllSteps()).toHaveLength(4);
    expect(getCustomsStep()).not.toBeInTheDocument();
  });

  it('[isHideCustomsPhase] Should hide custom stage', () => {
    const { getCustomsStep } = setup({
      stage: PARCEL_STAGE.customs,
      hasCustomsStage: true,
      isHideCustomsPhase: true,
    });

    expect(getCustomsStep()).not.toBeInTheDocument();
  });

  it('Should hide custom stage when hasCustomsStage=TRUE and isHideCustomsPhase=TRUE', () => {
    const { getCustomsStep } = setup({
      stage: PARCEL_STAGE.customs,
      hasCustomsStage: true,
      isHideCustomsPhase: true,
    });

    expect(getCustomsStep()).not.toBeInTheDocument();
  });

  it('Should active previous stage when shipment has activated custom stage, but it is hidden', () => {
    const { getActiveStep } = setup({
      stage: PARCEL_STAGE.customs,
      hasCustomsStage: true,
      isHideCustomsPhase: true,
    });

    expect(getActiveStep()).toHaveTextContent('<<< processing >>>');
  });

  it('Should active custom step', () => {
    const { getActiveStep } = setup({
      stage: PARCEL_STAGE.customs,
      hasCustomsStage: true,
      isHideCustomsPhase: false,
    });

    expect(getActiveStep()).toHaveTextContent('<<< customs >>>');
  });

  AT_COLLECTION_POINT_EVENTS.forEach((events) => {
    it('Should show at-collection-point & collected step when address is fixed', () => {
      const {
        getOutForDeliveryStep,
        getDeliveredStep,
        getAtCollectionPointStep,
        getCollectedStep,
        getAllSteps,
      } = setup({
        stage: PARCEL_STAGE.customs,
        events,
      });

      expect(getAllSteps()).toHaveLength(4);
      expect(getOutForDeliveryStep()).not.toBeInTheDocument();
      expect(getDeliveredStep()).not.toBeInTheDocument();
      expect(getAtCollectionPointStep()).toBeInTheDocument();
      expect(getCollectedStep()).toBeInTheDocument();
    });

    it('Should show out_for_delivery & delivered step when address is NOT fixed', () => {
      const {
        getOutForDeliveryStep,
        getDeliveredStep,
        getAtCollectionPointStep,
        getCollectedStep,
        getAllSteps,
      } = setup({
        stage: PARCEL_STAGE.customs,
      });

      expect(getAllSteps()).toHaveLength(4);
      expect(getOutForDeliveryStep()).toBeInTheDocument();
      expect(getDeliveredStep()).toBeInTheDocument();
      expect(getAtCollectionPointStep()).not.toBeInTheDocument();
      expect(getCollectedStep()).not.toBeInTheDocument();
    });
  });

  it('Should show delivered step when delivered stage is a final event', () => {
    const { getAllSteps, getDeliveredStep, getDeliveryStep } = setup({
      stage: PARCEL_STAGE.customs,
      events: [
        {
          id: 2,
          stageKey: 'delivered',
          phaseKey: 'H',
          isFinalEvent: true,
          isFixedAddress: false,
        },
        {
          id: 1,
          stageKey: 'out_for_delivery',
          phaseKey: 'G',
          isFinalEvent: false,
          isFixedAddress: false,
        },
      ],
    });

    expect(getAllSteps()).toHaveLength(4);
    expect(getDeliveredStep()).toBeInTheDocument();
    expect(getDeliveryStep()).not.toBeInTheDocument();
  });

  it('Should show delivery step when delivered stage is NOT a final event', () => {
    const { getAllSteps, getDeliveredStep, getDeliveryStep } = setup({
      stage: PARCEL_STAGE.customs,
      events: [
        {
          id: 2,
          stageKey: 'delivered',
          phaseKey: 'H',
          isFinalEvent: false,
          isFixedAddress: false,
        },
        {
          id: 1,
          stageKey: 'out_for_delivery',
          phaseKey: 'G',
          isFinalEvent: false,
          isFixedAddress: false,
        },
      ],
    });

    expect(getAllSteps()).toHaveLength(4);
    expect(getDeliveredStep()).not.toBeInTheDocument();
    expect(getDeliveryStep()).toBeInTheDocument();
  });
});
