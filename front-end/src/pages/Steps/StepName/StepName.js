import React from "react";
import Button from "../../../Components/Shared/Button/Button";
import Card from "../../../Components/Shared/Card/Card";

const StepName = ({ onNext }) => {
  return (
    <>
      <Card title="Name">
        <Button onClick={onNext}>Next</Button>
      </Card>
    </>
  );
};

export default StepName;
