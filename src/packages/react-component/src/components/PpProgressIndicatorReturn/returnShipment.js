var RETURN_STATUS = {
  approved: 'approved',
  booking_pending: 'booking_pending',
  shipping: 'shipping',
  received: 'received',
  completed: 'completed',
  cancelled: 'cancelled'
};

var STAGE_KEYS = {
  // Return shipment
  // TODO: need to confirm with product
  returnRequestReturn: 'temporarily_key_request_return',
  returnSelectShipmentMethod: 'temporarily_key_select_shipment_method',
  returnReturnProduct: 'temporarily_key_return_product',
  returnRefundCompleted: 'temporarily_key_refund_completed'
};

// --- STAGE ---
var getLastShipmentEventStageKey = function (shipmentEvents) {
  var _a, _b;
  return (_b = (_a = shipmentEvents === null || shipmentEvents === void 0 ? void 0 : shipmentEvents[0]) === null || _a === void 0 ? void 0 : _a.eventTypeMasterData) === null || _b === void 0 ? void 0 : _b.stageKey;
};
// --- / STAGE ---
var isShipmentBookedFailed = function (shipment) {
  return shipment["return"].returnStatus === RETURN_STATUS.approved &&
      getLastShipmentEventStageKey(shipment) === STAGE_KEYS.returnReturnProduct;
};

export { getLastShipmentEventStageKey, isShipmentBookedFailed };
//# sourceMappingURL=returnShipment.js.map
