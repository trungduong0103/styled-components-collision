import {
  getDeliveredPhase,
  getOutForDeliveryPhase,
} from '../PpProgressIndicatorForward.utils';
import {
  DELIVERED_PHASE,
  OUT_FOR_DELIVERY_PHASE,
} from '../PpProgressIndicatorForward.constants';

describe('getDeliveredPhase', () => {
  it("should return 'return_to_sender'", () => {
    const events = [
      { stageKey: 'delivered', phaseKey: 'H', isFinalEvent: true },
      { stageKey: 'out_for_delivery', phaseKey: 'G', isFinalEvent: false },
      { stageKey: 'delivered', phaseKey: 'I', isFinalEvent: false },
    ];

    expect(getDeliveredPhase(events)).toEqual(DELIVERED_PHASE.return_to_sender);
  });

  it("should return 'collected'", () => {
    const events = [
      {
        stageKey: 'delivered',
        phaseKey: 'H',
        isFixedAddress: true,
        isFinalEvent: true,
      },
      {
        stageKey: 'out_for_delivery',
        phaseKey: 'G',
        isFixedAddress: true,
        isFinalEvent: false,
      },
    ];

    expect(getDeliveredPhase(events)).toEqual(DELIVERED_PHASE.collected);
  });

  it("should return 'delivery'", () => {
    const events = [
      { stageKey: 'delivered', phaseKey: 'H', isFinalEvent: false },
      { stageKey: 'out_for_delivery', phaseKey: 'G', isFinalEvent: false },
    ];
    expect(getDeliveredPhase(events)).toEqual(DELIVERED_PHASE.delivery);
  });

  it("should return 'delivered'", () => {
    const events = [
      { stageKey: 'delivered', phaseKey: 'H', isFinalEvent: true },
      { stageKey: 'out_for_delivery', phaseKey: 'G', isFinalEvent: false },
    ];
    expect(getDeliveredPhase(events)).toEqual(DELIVERED_PHASE.delivered);
  });
});

describe('getOutForDeliveryPhase', () => {
  it("should return 'at_collection_point'", () => {
    const events = [
      {
        stageKey: 'delivered',
        phaseKey: 'H',
        isFixedAddress: true,
        isFinalEvent: true,
      },
      {
        stageKey: 'out_for_delivery',
        phaseKey: 'G',
        isFixedAddress: true,
        isFinalEvent: false,
      },
    ];

    expect(getOutForDeliveryPhase(events)).toEqual(
      OUT_FOR_DELIVERY_PHASE.at_collection_point,
    );
  });

  it("should return 'out_for_delivery'", () => {
    const events = [
      { stageKey: 'delivered', phaseKey: 'H', isFinalEvent: true },
      { stageKey: 'out_for_delivery', phaseKey: 'G', isFinalEvent: false },
    ];
    expect(getOutForDeliveryPhase(events)).toEqual(
      OUT_FOR_DELIVERY_PHASE.out_for_delivery,
    );
  });
});
