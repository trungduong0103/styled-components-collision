import React from "react";
import { ForwardTrackingComponent } from "@foo/react-component/ForwardTrackingComponent";

export const ReturnComponent = () => {
  return (
    <div>
      <h1>Return Component</h1>
      <ForwardTrackingComponent />
    </div>
  );
};
