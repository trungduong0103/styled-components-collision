import React from "react";
import { ForwardTrackingComponent } from "@foo-testing-0103/react-component/build/ForwardTrackingComponent";

export const ReturnComponent = () => {
  return (
    <div>
      <h1>Return Component</h1>
      <ForwardTrackingComponent />
    </div>
  );
};
