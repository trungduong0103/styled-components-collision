import React from "react";
import PpProgressBar from "@foo-testing-0103/react-component/PpProgressBar";

const PROGRESS_ITEM_THEMES = {
  past: {
    iconBgColor: "#E9F3FF",
    iconColor: "#fff",
    labelColor: "#AAAAAA",
    lineColor: "#D5D5D5",
    labelFontSize: 10,
  },
  current: {
    iconBgColor: "#14A6DE",
    iconColor: "#fff",
    labelColor: "#000",
    lineColor: "#D5D5D5",
    labelFontSize: 10,
  },
  future: {
    iconBgColor: "#EDEDED",
    iconColor: "#fff",
    labelColor: "#BFBFBF",
    lineColor: "#D5D5D5",
    labelFontSize: 10,
  },
  issue: {
    iconBgColor: "#F44336",
    iconColor: "#fff",
    labelColor: "#000",
    lineColor: "#D5D5D5",
    labelFontSize: 10,
  },
};

const translation = (key) => `${key}`;

const AT_COLLECTION_POINT_EVENTS = [
  [
    {
      id: 1,
      stageKey: "delivered",
      phaseKey: "H",
      isFixedAddrescs: true,
      isFinalEvent: true,
    },
  ],
  [
    {
      id: 1,
      stageKey: "out_for_delivery",
      phaseKey: "G",
      isFixedAddress: true,
      isFinalEvent: false,
    },
  ],
];

export const ShipmentComponent = () => {
  return (
    <div>
      <h1>Shipment Compzzzzonent</h1>
      <PpProgressBar
        progressItemThemes={PROGRESS_ITEM_THEMES}
        stage="customs"
        hasCustomsStage
        isHideCustomsPhase
        events={AT_COLLECTION_POINT_EVENTS}
        translation={translation}
      />
    </div>
  );
};
