import React from "react";
import Button from "../../../Components/Shared/Button/Button";
import Card from "../../../Components/Shared/Card/Card";

const StepPhoneEmail = ({ onNext }) => {
  return (
    <>
      <Card title="PhoneEmail">
        <Button onClick={onNext}>Next</Button>
      </Card>
    </>
  );
};

export default StepPhoneEmail;
