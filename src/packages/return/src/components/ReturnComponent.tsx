import React from "react";
import PpProgressIndicatorReturn from "@foo-testing-0103/react-component/PpProgressIndicatorReturn";

const PROGRESS_ITEM_THEMES = {
  past: {
    iconBgColor: "#feb798",
    iconColor: "#fff",
    labelColor: "#AAAAAA",
    lineColor: "#D5D5D5",
    labelFontSize: 10,
  },
  current: {
    iconBgColor: "#FC6F30",
    iconColor: "#fff",
    labelColor: "#000",
    lineColor: "#D5D5D5",
    labelFontSize: 10,
  },
  future: {
    iconBgColor: "#feb798",
    iconColor: "#fff",
    labelColor: "#BFBFBF",
    lineColor: "#D5D5D5",
    labelFontSize: 10,
  },
  cancelled: {
    iconBgColor: "#898989",
    iconColor: "#fff",
    labelColor: "#898989",
    lineColor: "#898989",
    labelFontSize: 10,
  },
};

const SHIPMENT_APPROVED = {
  return: {
    return_status: "approved",
  },
  shipmentEvents: [
    {
      eventTypeMasterData: {
        stageKey: "temporarily_key_select_shipment_method",
      },
    },
  ],
};

const translation = (key) => `${key}`;

export const ReturnComponent = () => {
  return (
    <div>
      <h1>Return Component</h1>
      <PpProgressIndicatorReturn
        progressItemThemes={PROGRESS_ITEM_THEMES}
        translation={translation}
        shipment={SHIPMENT_APPROVED}
      />
    </div>
  );
};
