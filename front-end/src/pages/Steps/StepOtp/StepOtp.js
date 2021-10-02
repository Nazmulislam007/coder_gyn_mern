import React from "react";
import Button from "../../../Components/Shared/Button/Button";
import Card from "../../../Components/Shared/Card/Card";

const StepOtp = ({ onNext }) => {
  return (
    <>
      <Card title="otp">
        <Button onClick={onNext}>Next</Button>
      </Card>
    </>
  );
};

export default StepOtp;
