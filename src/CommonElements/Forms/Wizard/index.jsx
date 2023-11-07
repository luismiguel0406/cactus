import React from "react";
import StepZilla from "react-stepzilla";

const StepWizard = ({ steps }) => {
  return (
    <StepZilla
      steps={steps}
      showSteps={true}
      showNavigation={false}
      stepsNavigation={false}
      prevBtnOnLastStep={false}
      dontValidate={false}
      preventEnterSubmission={false}
    />
  );
};

export default StepWizard;
