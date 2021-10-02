import React from "react";
import Button from "../../../Components/Shared/Button/Button";
import Card from "../../../Components/Shared/Card/Card";

const StepAvater = ({ onNext }) => {
  return (
    <>
      <Card title="avatar">
        <Button onClick={onNext}>Next</Button>
      </Card>
    </>
  );
};

export default StepAvater;
