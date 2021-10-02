import React, { useState } from "react";
import Card from "../../Components/Shared/Card/Card";
import StepAvater from "../Steps/StepAvatar/StepAvater";
import StepName from "../Steps/StepName/StepName";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepUsername from "../Steps/StepUsername/StepUsername";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvater,
  5: StepUsername,
};

const Register = () => {
  const [step, setStep] = useState(1);

  const Step = steps[step];

  const onNext = () => {
    return setStep(step + 1);
  };

  return (
    <>
      <Step onNext={onNext} />
    </>
  );
};

export default Register;
